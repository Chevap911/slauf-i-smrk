<?php
/**
 * Plugin Name: Cleaning Service Form
 * Plugin URI: https://yourwebsite.com
 * Description: Interaktivna forma za usluge čišćenja s kalkulatorom cijene i email notifikacijama
 * Version: 1.0.0
 * Author: Cleaning Service
 * Author URI: https://yourwebsite.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: cleaning-service-form
 * Domain Path: /languages
 * Requires at least: 5.0
 * Tested up to: 6.4
 * Requires PHP: 7.4
 * Network: false
 */

// Sprječava direktan pristup
if (!defined('ABSPATH')) {
    exit('Direct access forbidden.');
}

// Definiraj konstante
define('CSF_PLUGIN_URL', plugin_dir_url(__FILE__));
define('CSF_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('CSF_PLUGIN_VERSION', '1.0.0');

class CleaningServiceForm {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('rest_api_init', array($this, 'register_rest_routes'));
        add_shortcode('cleaning_form', array($this, 'render_form_shortcode'));
        
        // Hook za aktivaciju
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
        
        // Uključi potrebne fileove
        $this->include_files();
    }
    
    public function init() {
        // Inicijalizacija plugin-a
        load_plugin_textdomain('cleaning-service-form', false, dirname(plugin_basename(__FILE__)) . '/languages');
    }
    
    private function include_files() {
        $email_handler_path = CSF_PLUGIN_PATH . 'includes/email-handler.php';
        if (file_exists($email_handler_path)) {
            require_once $email_handler_path;
        }
    }
    
    public function activate() {
        // Kreiraj tabelu pri aktivaciji
        $this->create_table();
        
        // Flush rewrite rules
        flush_rewrite_rules();
    }
    
    public function deactivate() {
        // Cleanup kod pri deaktivaciji
        flush_rewrite_rules();
    }
    
    public function enqueue_scripts() {
        // Provjeri da li je shortcode prisutan na stranici
        global $post;
        if (is_a($post, 'WP_Post') && has_shortcode($post->post_content, 'cleaning_form')) {
            
            // Enqueue React i ReactDOM
            wp_enqueue_script(
                'react',
                'https://unpkg.com/react@18/umd/react.production.min.js',
                array(),
                '18.0.0',
                true
            );
            
            wp_enqueue_script(
                'react-dom',
                'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
                array('react'),
                '18.0.0',
                true
            );

            // Enqueue Framer Motion
            wp_enqueue_script(
                'framer-motion',
                'https://unpkg.com/framer-motion@10/dist/framer-motion.js',
                array('react'),
                '10.0.0',
                true
            );

            // Enqueue React Confetti
            wp_enqueue_script(
                'react-confetti',
                'https://unpkg.com/react-confetti@6.1.0/dist/confetti.min.js',
                array('react'),
                '6.1.0',
                true
            );

            // Enqueue React Use
            wp_enqueue_script(
                'react-use',
                'https://unpkg.com/react-use@17.4.0/lib/index.js',
                array('react'),
                '17.4.0',
                true
            );
            
            // Enqueue našu React komponentu
            wp_enqueue_script(
                'cleaning-form-js',
                CSF_PLUGIN_URL . 'assets/js/cleaning-form.js',
                array('react', 'react-dom', 'framer-motion', 'react-confetti', 'react-use'),
                CSF_PLUGIN_VERSION,
                true
            );
            
            // Enqueue CSS
            wp_enqueue_style(
                'cleaning-form-css',
                CSF_PLUGIN_URL . 'assets/css/cleaning-form.css',
                array(),
                CSF_PLUGIN_VERSION
            );
            
            // Proslijedi podatke u JavaScript
            wp_localize_script('cleaning-form-js', 'cleaningFormAjax', array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'resturl' => rest_url('cleaning-form/v1/'),
                'nonce' => wp_create_nonce('wp_rest'),
            ));
        }
    }
    
    public function render_form_shortcode($atts) {
        $atts = shortcode_atts(array(
            'id' => 'cleaning-service-form-container'
        ), $atts);
        
        return '<div id="' . esc_attr($atts['id']) . '" class="cleaning-service-form-wrapper"></div>';
    }
    
    public function register_rest_routes() {
        register_rest_route('cleaning-form/v1', '/submit', array(
            'methods' => 'POST',
            'callback' => array($this, 'handle_form_submission'),
            'permission_callback' => '__return_true',
            'args' => array(
                'email' => array(
                    'required' => true,
                    'validate_callback' => function($param) {
                        return is_email($param);
                    }
                ),
                'address' => array('required' => true),
                'city' => array('required' => true),
                'phone' => array('required' => true),
            )
        ));
    }
    
    public function handle_form_submission($request) {
        // Rate limiting
        $ip = $_SERVER['REMOTE_ADDR'];
        $submissions_count = get_transient('csf_submissions_' . md5($ip));
        
        if ($submissions_count && $submissions_count >= 5) {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Previše zahtjeva. Molimo pokušajte kasnije.'
            ), 429);
        }
        
        $params = $request->get_params();
        
        // Sanitiziraj podatke
        $form_data = array(
            'email' => sanitize_email($params['email']),
            'address' => sanitize_text_field($params['address']),
            'city' => sanitize_text_field($params['city']),
            'phone' => sanitize_text_field($params['phone']),
            'name' => sanitize_text_field($params['name'] ?? ''),
            'selectedService' => sanitize_text_field($params['selectedService'] ?? ''),
            'buildingWidth' => floatval($params['buildingWidth'] ?? 0),
            'buildingLength' => floatval($params['buildingLength'] ?? 0),
            'floors' => intval($params['floors'] ?? 0),
            'facadeSides' => intval($params['facadeSides'] ?? 4),
            'facadeCondition' => intval($params['facadeCondition'] ?? 3),
            'windowsSmall' => intval($params['windowsSmall'] ?? 0),
            'windowsDouble' => intval($params['windowsDouble'] ?? 0),
            'balconyType' => sanitize_text_field($params['balconyType'] ?? ''),
            'balconyCount' => intval($params['balconyCount'] ?? 0),
            'yardSquareMeters' => floatval($params['yardSquareMeters'] ?? 0),
            'yardCondition' => intval($params['yardCondition'] ?? 3),
            'hasPlants' => (bool)($params['hasPlants'] ?? false),
            'hasTrees' => (bool)($params['hasTrees'] ?? false),
            'poolSize' => sanitize_text_field($params['poolSize'] ?? ''),
            'poolType' => sanitize_text_field($params['poolType'] ?? ''),
            'poolLastCleaned' => sanitize_text_field($params['poolLastCleaned'] ?? ''),
            'cleanYard' => (bool)($params['cleanYard'] ?? false),
            'carWash' => (bool)($params['carWash'] ?? false),
            'message' => sanitize_textarea_field($params['message'] ?? ''),
            'estimatedPrice' => $params['estimatedPrice'] ?? array(),
            'adjustedArea' => floatval($params['adjustedArea'] ?? 0),
            'hasPool' => (bool)($params['hasPool'] ?? false),
        );
        
        // Spremi u bazu podataka
        $this->save_form_submission($form_data);
        
        // Pošalji emailove
        if (class_exists('CSF_Email_Handler')) {
            $email_handler = new CSF_Email_Handler();
            $email_sent = $email_handler->send_emails($form_data);
        } else {
            $email_sent = false;
        }
        
        // Update rate limiting
        $new_count = $submissions_count ? $submissions_count + 1 : 1;
        set_transient('csf_submissions_' . md5($ip), $new_count, HOUR_IN_SECONDS);
        
        if ($email_sent) {
            return new WP_REST_Response(array(
                'success' => true,
                'message' => 'Vaš zahtjev je uspješno poslan!'
            ), 200);
        } else {
            return new WP_REST_Response(array(
                'success' => false,
                'message' => 'Greška pri slanju emaila. Molimo pokušajte ponovo.'
            ), 500);
        }
    }
    
    private function save_form_submission($form_data) {
        global $wpdb;
        
        $table_name = $wpdb->prefix . 'cleaning_form_submissions';
        
        $wpdb->insert(
            $table_name,
            array(
                'email' => $form_data['email'],
                'form_data' => wp_json_encode($form_data),
                'submitted_at' => current_time('mysql'),
                'ip_address' => $_SERVER['REMOTE_ADDR']
            ),
            array('%s', '%s', '%s', '%s')
        );
    }
    
    public function create_table() {
        global $wpdb;
        
        $table_name = $wpdb->prefix . 'cleaning_form_submissions';
        
        $charset_collate = $wpdb->get_charset_collate();
        
        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            email varchar(100) NOT NULL,
            form_data longtext NOT NULL,
            submitted_at datetime DEFAULT CURRENT_TIMESTAMP,
            ip_address varchar(45),
            PRIMARY KEY (id)
        ) $charset_collate;";
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}

// Inicijaliziraj plugin
new CleaningServiceForm();
?>
