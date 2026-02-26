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
    <title>Nova forma za čišćenje</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; }
        .section { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3b82f6; }
        .price-box { background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 15px; border-radius: 8px; border: 2px solid #f59e0b; }
        .label { font-weight: bold; color: #1e40af; }
        .value { margin-left: 10px; }
        .footer { background: #1e40af; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; }
        .urgent { background: #fee2e2; border-left-color: #ef4444; }
        .priority { color: #ef4444; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏠 Nova forma za čišćenje</h1>
            <p>Datum: <?php echo date('d.m.Y H:i'); ?></p>
            <p class="priority">⚡ HITNO - Kontaktiraj klijenta!</p>
        </div>
        
        <div class="content">
            <div class="section urgent">
                <h2>📞 Kontakt podaci - PRIORITET</h2>
                <p><span class="label">Email:</span><span class="value"><?php echo esc_html($form_data['email']); ?></span></p>
                <p><span class="label">Telefon:</span><span class="value"><?php echo esc_html($form_data['phone']); ?></span></p>
                <p><span class="label">Adresa:</span><span class="value"><?php echo esc_html($form_data['address']); ?></span></p>
                <p><span class="label">Grad:</span><span class="value"><?php echo esc_html($form_data['city']); ?></span></p>
                <?php if (!empty($form_data['name'])): ?>
                <p><span class="label">Ime:</span><span class="value"><?php echo esc_html($form_data['name']); ?></span></p>
                <?php endif; ?>
            </div>
            
            <div class="section">
                <h2>🛠️ Odabrana usluga</h2>
                <p><span class="label">Usluga:</span><span class="value"><?php echo $email_handler->get_service_name($form_data['selectedService']); ?></span></p>
            </div>
            
            <?php if (in_array($form_data['selectedService'], ['facade', 'complete'])): ?>
            <div class="section">
                <h2>🏢 Detalji fasade</h2>
                <p><span class="label">Dimenzije:</span><span class="value"><?php echo $form_data['buildingWidth']; ?>m x <?php echo $form_data['buildingLength']; ?>m</span></p>
                <p><span class="label">Broj katova:</span><span class="value"><?php echo $form_data['floors']; ?></span></p>
                <p><span class="label">Broj strana za čišćenje:</span><span class="value"><?php echo $form_data['facadeSides']; ?></span></p>
                <p><span class="label">Stanje fasade:</span><span class="value"><?php echo $form_data['facadeCondition']; ?>/5</span></p>
                <p><span class="label">Mali prozori:</span><span class="value"><?php echo $form_data['windowsSmall']; ?></span></p>
                <p><span class="label">Dupli prozori:</span><span class="value"><?php echo $form_data['windowsDouble']; ?></span></p>
                <p><span class="label">Površina za čišćenje:</span><span class="value"><?php echo $form_data['adjustedArea']; ?> m²</span></p>
                
                <?php if (!empty($form_data['balconyType']) && $form_data['balconyType'] !== 'none'): ?>
                <p><span class="label">Balkoni:</span><span class="value"><?php echo $form_data['balconyType'] === 'inner' ? 'Unutarnji' : 'Vanjski'; ?> (<?php echo $form_data['balconyCount']; ?>)</span></p>
                <?php endif; ?>
            </div>
            <?php endif; ?>
            
            <?php if ($form_data['cleanYard'] || in_array($form_data['selectedService'], ['yard', 'complete'])): ?>
            <div class="section">
                <h2>🌳 Detalji okućnice</h2>
                <p><span class="label">Površina:</span><span class="value"><?php echo $form_data['yardSquareMeters']; ?> m²</span></p>
                <p><span class="label">Stanje:</span><span class="value"><?php echo $form_data['yardCondition']; ?>/5</span></p>
                <p><span class="label">Ukrasno bilje:</span><span class="value"><?php echo $form_data['hasPlants'] ? 'Da' : 'Ne'; ?></span></p>
                <p><span class="label">Drveće:</span><span class="value"><?php echo $form_data['hasTrees'] ? 'Da' : 'Ne'; ?></span></p>
            </div>
            <?php endif; ?>
            
            <?php if (in_array($form_data['selectedService'], ['pool', 'complete']) && $form_data['hasPool']): ?>
            <div class="section">
                <h2>🏊 Detalji bazena</h2>
                <p><span class="label">Veličina:</span><span class="value"><?php echo ucfirst($form_data['poolSize']); ?></span></p>
                <p><span class="label">Tip:</span><span class="value"><?php echo ucfirst($form_data['poolType']); ?></span></p>
                <?php if (!empty($form_data['poolLastCleaned'])): ?>
                <p><span class="label">Zadnje čišćenje:</span><span class="value"><?php echo $form_data['poolLastCleaned']; ?></span></p>
                <?php endif; ?>
            </div>
            <?php endif; ?>
            
            <?php if ($form_data['carWash']): ?>
            <div class="section">
                <h2>🚗 Dodatne usluge</h2>
                <p><span class="label">Pranje automobila:</span><span class="value">Da (25€)</span></p>
            </div>
            <?php endif; ?>
            
            <div class="price-box">
                <h2>💰 Procjena cijene</h2>
                <p style="font-size: 18px; font-weight: bold; color: #1e40af;">
                    <?php echo $email_handler->format_price($form_data['estimatedPrice']); ?>
                </p>
                <p style="font-size: 12px; color: #666;">*Uključen popust od 15% za prvo čišćenje</p>
            </div>
            
            <?php if (!empty($form_data['message'])): ?>
            <div class="section">
                <h2>💬 Dodatna poruka</h2>
                <p><?php echo nl2br(esc_html($form_data['message'])); ?></p>
            </div>
            <?php endif; ?>
        </div>
        
        <div class="footer">
            <p><strong>AKCIJA POTREBNA:</strong> Kontaktirajte klijenta u roku od 2 sata!</p>
            <p>Email: <strong><?php echo esc_html($form_data['email']); ?></strong></p>
            <p>Telefon: <strong><?php echo esc_html($form_data['phone']); ?></strong></p>
        </div>
    </div>
</body>
</html>
