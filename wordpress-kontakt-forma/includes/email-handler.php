<?php

// Sprječava direktan pristup
if (!defined('ABSPATH')) {
    exit('Direct access forbidden.');
}

class CSF_Email_Handler {
    
    private $owner_email = 'slauf.i.smrk@gmail.com';
    
    public function send_emails($form_data) {
        $owner_sent = $this->send_owner_notification($form_data);
        $user_sent = $this->send_user_confirmation($form_data);
        
        return $owner_sent && $user_sent;
    }
    
    private function send_owner_notification($form_data) {
        $subject = 'Nova forma za čišćenje - ' . $form_data['city'];
        
        $message = $this->get_owner_email_template($form_data);
        
        $headers = array(
            'Content-Type: text/html; charset=UTF-8',
            'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>',
            'Reply-To: ' . $form_data['email']
        );
        
        return wp_mail($this->owner_email, $subject, $message, $headers);
    }
    
    private function send_user_confirmation($form_data) {
        $subject = 'Potvrda zahtjeva za čišćenje - ' . get_bloginfo('name');
        
        $message = $this->get_user_email_template($form_data);
        
        $headers = array(
            'Content-Type: text/html; charset=UTF-8',
            'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>'
        );
        
        return wp_mail($form_data['email'], $subject, $message, $headers);
    }
    
    private function get_owner_email_template($form_data) {
        $template_path = CSF_PLUGIN_PATH . 'templates/email-owner.php';
        if (file_exists($template_path)) {
            ob_start();
            include $template_path;
            return ob_get_clean();
        }
        return $this->get_fallback_owner_email($form_data);
    }
    
    private function get_user_email_template($form_data) {
        $template_path = CSF_PLUGIN_PATH . 'templates/email-user.php';
        if (file_exists($template_path)) {
            ob_start();
            include $template_path;
            return ob_get_clean();
        }
        return $this->get_fallback_user_email($form_data);
    }
    
    private function get_fallback_owner_email($form_data) {
        $message = '<h2>Nova forma za čišćenje</h2>';
        $message .= '<p><strong>Email:</strong> ' . esc_html($form_data['email']) . '</p>';
        $message .= '<p><strong>Telefon:</strong> ' . esc_html($form_data['phone']) . '</p>';
        $message .= '<p><strong>Adresa:</strong> ' . esc_html($form_data['address']) . '</p>';
        $message .= '<p><strong>Grad:</strong> ' . esc_html($form_data['city']) . '</p>';
        $message .= '<p><strong>Usluga:</strong> ' . $this->get_service_name($form_data['selectedService']) . '</p>';
        return $message;
    }
    
    private function get_fallback_user_email($form_data) {
        $message = '<h2>Hvala na vašem upitu!</h2>';
        $message .= '<p>Vaš zahtjev je uspješno primljen. Kontaktirat ćemo vas u najkraćem mogućem roku.</p>';
        $message .= '<p><strong>Referentni broj:</strong> CSF-' . date('Ymd') . '-' . substr(md5($form_data['email']), 0, 6) . '</p>';
        return $message;
    }
    
    public function get_service_name($service_id) {
        $services = array(
            'facade' => 'Čišćenje fasade',
            'pool' => 'Pranje bazena',
            'yard' => 'Čišćenje okućnice',
            'complete' => 'Kompletna usluga'
        );
        
        return $services[$service_id] ?? 'Nepoznata usluga';
    }
    
    public function format_price($price_data) {
        if (!$price_data || !isset($price_data['min'])) {
            return 'Nije izračunato';
        }
        
        $total = $price_data['min'] + 
                ($price_data['yardPrice'] ?? 0) + 
                ($price_data['poolPrice'] ?? 0) + 
                ($price_data['carWashPrice'] ?? 0);
        
        if (isset($price_data['max']) && $price_data['max'] && $price_data['max'] != $price_data['min']) {
            $total_max = $price_data['max'] + 
                        ($price_data['yardPrice'] ?? 0) + 
                        ($price_data['poolPrice'] ?? 0) + 
                        ($price_data['carWashPrice'] ?? 0);
            return $total . '€ - ' . $total_max . '€';
        }
        
        return $total . '€';
    }
}
?>
