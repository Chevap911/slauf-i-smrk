/** Jedna validacija za preglednik i API. Nikad ne izmišljamo e-mail uz telefon. */
export function contactFields(value: string): { phone: string; email: string } | null {
    const contact = value.trim();
    if (contact.length > 254) return null;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) return { phone: '', email: contact };
    const digits = contact.replace(/\D/g, '');
    if (/^\+?[\d\s()./-]+$/.test(contact) && digits.length >= 6 && digits.length <= 15) return { phone: contact, email: '' };
    return null;
}
