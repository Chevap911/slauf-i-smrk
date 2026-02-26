<?php
// Sprječava direktan pristup
if (!defined('ABSPATH')) {
    exit('Direct access forbidden.');
}

$email_handler = new CSF_Email_Handler();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Potvrda zahtjeva</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f0fdf4; padding: 20px; border: 1px solid #bbf7d0; }
        .section { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #10b981; }
        .highlight { background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 15px; border-radius: 8px; border: 2px solid #f59e0b; text-align: center; margin: 20px 0; }
        .footer { background: #059669; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
        .checkmark { font-size: 48px; color: #10b981; }
        .steps { background: #ecfdf5; padding: 15px; border-radius: 8px; border: 1px solid #bbf7d0; }
        .steps ul { margin: 0; padding-left: 20px; }
        .steps li { margin-bottom: 8px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="checkmark">✅</div>
            <h1>Hvala na vašem upitu!</h1>
            <p>Vaš zahtjev je uspješno primljen</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>Poštovani/a <?php echo !empty($form_data['name']) ? esc_html($form_data['name']) : 'korisniče'; ?>,</h2>
                <p>Hvala vam što ste se obratili našoj usluzi čišćenja. Vaš zahtjev je uspješno primljen i trenutno ga obrađujemo.</p>
                <p><strong>Referentni broj:</strong> CSF-<?php echo date('Ymd'); ?>-<?php echo substr(md5($form_data['email']), 0, 6); ?></p>
            </div>
            
            <div class="highlight">
                <h3>🎉 Čestitamo!</h3>
                <p><strong>Ostvarili ste 15% popusta na prvo čišćenje!</strong></p>
                <p>Procjena cijene: <strong><?php echo $email_handler->format_price($form_data['estimatedPrice']); ?></strong></p>
                <p style="font-size: 12px; color: #666; margin-top: 10px;">*Konačna cijena može varirati ovisno o stanju objekta</p>
            </div>
            
            <div class="section">
                <h2>📋 Sažetak vašeg zahtjeva</h2>
                <p><strong>Usluga:</strong> <?php echo $email_handler->get_service_name($form_data['selectedService']); ?></p>
                <p><strong>Adresa:</strong> <?php echo esc_html($form_data['address']) . ', ' . esc_html($form_data['city']); ?></p>
                
                <?php if (in_array($form_data['selectedService'], ['facade', 'complete'])): ?>
                <p><strong>Površina fasade:</strong> <?php echo $form_data['adjustedArea']; ?> m²</p>
                <p><strong>Broj strana:</strong> <?php echo $form_data['facadeSides']; ?></p>
                <?php endif; ?>
                
                <?php if ($form_data['cleanYard'] || in_array($form_data['selectedService'], ['yard', 'complete'])): ?>
                <p><strong>Površina okućnice:</strong> <?php echo $form_data['yardSquareMeters']; ?> m²</p>
                <?php endif; ?>
                
                <?php if (in_array($form_data['selectedService'], ['pool', 'complete']) && $form_data['hasPool']): ?>
                <p><strong>Bazen:</strong> <?php echo ucfirst($form_data['poolSize']); ?> <?php echo ucfirst($form_data['poolType']); ?></p>
                <?php endif; ?>
                
                <?php if ($form_data['carWash']): ?>
                <p><strong>Dodatno:</strong> Pranje automobila (25€)</p>
                <?php endif; ?>
            </div>
            
            <div class="steps">
                <h2>📞 Sljedeći koraci</h2>
                <ul>
                    <li>✅ <strong>Kontakt u roku od 24 sata</strong> - Naš tim će vas kontaktirati telefonom ili emailom</li>
                    <li>📅 <strong>Besplatni pregled</strong> - Dogovorit ćemo termin za pregled objekta</li>
                    <li>📄 <strong>Detaljnu ponudu</strong> - Poslat ćemo vam preciznu ponudu s cijenama</li>
                    <li>🛠️ <strong>Izvođenje radova</strong> - Nakon prihvaćanja ponude, dogovaramo termin</li>
                    <li>✨ <strong>Garancija kvalitete</strong> - Pružamo garanciju na sve naše usluge</li>
                </ul>
            </div>
            
            <div class="section">
                <h2>📞 Kontakt informacije</h2>
                <p>Ako imate dodatnih pitanja ili želite promijeniti termin, slobodno nas kontaktirajte:</p>
                <p><strong>Email:</strong> <?php echo get_option('admin_email'); ?></p>
                <p><strong>Radno vrijeme:</strong> Ponedjeljak - Petak: 8:00 - 18:00, Subota: 8:00 - 14:00</p>
                <p><strong>Hitni slučajevi:</strong> Dostupni smo 24/7 za hitne intervencije</p>
            </div>

            <div class="section">
                <h2>💡 Korisni savjeti</h2>
                <p>Dok čekate naš poziv, evo nekoliko savjeta:</p>
                <ul>
                    <li>Pripremite pristup objektu (uklonite vozila, vrtni namještaj)</li>
                    <li>Označite osjetljive biljke koje trebaju posebnu pažnju</li>
                    <li>Pripremite popis dodatnih pitanja za naš tim</li>
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p><strong>Hvala vam što ste odabrali naše usluge!</strong></p>
            <p><?php echo get_bloginfo('name'); ?> - Vaš partner za čišćenje</p>
            <p style="font-size: 12px; margin-top: 10px;">Ovaj email je automatski generiran. Molimo ne odgovarajte direktno na ovaj email.</p>
        </div>
    </div>
</body>
</html>
