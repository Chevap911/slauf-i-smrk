import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

// Common brand colors
const brandColors = {
    yellow: '#FFDE00',
    blue: '#0B2027',
    blueLight: '#1A3644',
    white: '#FFFFFF',
    grayText: '#666666',
    grayBg: '#F8F9FA'
};

interface InquiryEmailProps {
    name: string;
    email: string;
    phone: string;
    serviceName: string;
    estimatedPriceMin: number;
    estimatedPriceMax: number;
    message?: string;
}

export const ClientInquiryEmail = ({
    name = "Klijent",
    email = "test@example.com",
    phone = "09x xxx xxxx",
    serviceName = "Čišćenje",
    estimatedPriceMin = 50,
    estimatedPriceMax = 100,
    message = ""
}: InquiryEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Vaš upit za {serviceName} - Šlauf i Šmrk</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={header}>
                        <Text style={logoText}>Šlauf i <span style={{ color: brandColors.yellow }}>Šmrk</span></Text>
                    </Section>

                    {/* Content */}
                    <Section style={content}>
                        <Heading style={heading}>Hvala na upitu, {name}!</Heading>
                        <Text style={paragraph}>
                            Uspješno smo zaprimili vaš zahtjev za uslugu <strong>{serviceName}</strong>.
                            Naš tim će ubrzo pregledati detalje i javiti vam se na telefon ({phone}) ili email ({email}) kako bismo dogovorili točan termin i detalje.
                        </Text>

                        <Section style={priceBox}>
                            <Text style={priceBoxTitle}>Informativna procjena cijene:</Text>
                            <Text style={priceAmount}>
                                {estimatedPriceMin === estimatedPriceMax
                                    ? `${estimatedPriceMin} €`
                                    : `${estimatedPriceMin} - ${estimatedPriceMax} €`}
                            </Text>
                            <Text style={priceDisclaimer}>
                                *Ovo je okvirna informativna cijena izračunata na temelju unesenih parametara. Konačna cijena može varirati nakon uvida u stanje uživo.
                            </Text>
                        </Section>

                        {message && (
                            <Section style={messageBox}>
                                <Text style={messageBoxTitle}>Vaša dodatna napomena:</Text>
                                <Text style={messageText}>"{message}"</Text>
                            </Section>
                        )}

                        <Text style={paragraph}>
                            Ako imate bilo kakvih hitnih pitanja prije nego vas povratno kontaktiramo, slobodno nas nazovite na <Link href="tel:+385958442806" style={link}>+385 95 844 2806</Link>.
                        </Text>
                    </Section>

                    <Hr style={hr} />

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            <strong>Šlauf i Šmrk</strong> - Profesionalno visokotlačno čišćenje i detailing<br />
                            Zagreb i okolica | <a href="mailto:slauf.i.smrk@gmail.com" style={{ color: '#0C2B4B', textDecoration: 'none' }}>slauf.i.smrk@gmail.com</a>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

// Internal notification email template
export const AdminNotificationEmail = ({
    name, email, phone, city, serviceName, estimatedPriceMin, estimatedPriceMax, message, details
}: InquiryEmailProps & { city?: string, details?: any }) => {
    return (
        <Html>
            <Head />
            <Preview>NOVI UPIT: {name} - {serviceName}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={{ ...header, backgroundColor: '#dc2626' }}>
                        <Text style={logoText}>🚨 NOVI KLIJENT</Text>
                    </Section>
                    <Section style={content}>
                        <Heading style={heading}>Novi zahtjev s weba</Heading>
                        <Text style={paragraph}><strong>Ime:</strong> {name}</Text>
                        <Text style={paragraph}><strong>Telefon:</strong> <Link href={`tel:${phone}`}>{phone}</Link></Text>
                        <Text style={paragraph}><strong>Email:</strong> <Link href={`mailto:${email}`}>{email}</Link></Text>
                        <Text style={paragraph}><strong>Lokacija:</strong> {city || 'Nije navedeno'}</Text>

                        <Section style={priceBox}>
                            <Text style={paragraph}><strong>Tražena usluga:</strong> {serviceName}</Text>
                            <Text style={paragraph}><strong>Procjena sustava:</strong> {estimatedPriceMin} - {estimatedPriceMax} €</Text>
                            <Text style={{ ...paragraph, fontSize: '12px', color: brandColors.grayText }}>
                                Tehnički detalji: {JSON.stringify(details)}
                            </Text>
                        </Section>

                        {message && (
                            <Text style={paragraph}><strong>Poruka klijenta:</strong><br />{message}</Text>
                        )}
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

export default ClientInquiryEmail;

const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    maxWidth: '580px',
};

const header = {
    padding: '24px',
    backgroundColor: brandColors.blue,
    borderRadius: '8px 8px 0 0',
    textAlign: 'center' as const,
};

const logoText = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: brandColors.white,
    margin: '0',
};

const content = {
    padding: '32px 24px',
    backgroundColor: brandColors.grayBg,
    borderRadius: '0 0 8px 8px',
    border: `1px solid ${brandColors.border}`,
};

const heading = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: brandColors.blue,
    marginBottom: '24px',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#333333',
    marginBottom: '20px',
};

const priceBox = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '8px',
    border: `2px solid ${brandColors.yellow}`,
    marginTop: '32px',
    marginBottom: '32px',
    textAlign: 'center' as const,
};

const priceBoxTitle = {
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase' as const,
    color: brandColors.grayText,
    margin: '0 0 12px 0',
};

const priceAmount = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: brandColors.blue,
    margin: '0 0 12px 0',
};

const priceDisclaimer = {
    fontSize: '12px',
    color: brandColors.grayText,
    margin: '0',
    lineHeight: '18px',
};

const messageBox = {
    backgroundColor: 'rgba(11, 32, 39, 0.05)',
    padding: '16px',
    borderRadius: '6px',
    borderLeft: `4px solid ${brandColors.blue}`,
    marginBottom: '24px',
};

const messageBoxTitle = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: brandColors.blueLight,
    margin: '0 0 8px 0',
};

const messageText = {
    fontSize: '15px',
    fontStyle: 'italic',
    color: '#333333',
    margin: '0',
};

const link = {
    color: brandColors.blue,
    textDecoration: 'underline',
    fontWeight: 'bold',
};

const hr = {
    borderColor: '#cccccc',
    margin: '48px 0 24px',
};

const footer = {
    padding: '0 24px',
};

const footerText = {
    fontSize: '14px',
    color: brandColors.grayText,
    lineHeight: '22px',
    textAlign: 'center' as const,
};
