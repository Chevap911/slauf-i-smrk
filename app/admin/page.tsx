'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Mail, Phone, RefreshCcw } from 'lucide-react';
import styles from './admin.module.css';

type InquiryStatus = 'new' | 'contacted' | 'completed';

interface InquiryRecord {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone: string;
    city: string | null;
    service: string;
    estimated_price_min: number | null;
    estimated_price_max: number | null;
    message: string | null;
    details: unknown;
    status: InquiryStatus;
}

export default function AdminCRM() {
    const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    const DEMO_PASSWORD = "slaufadmin"; // Simple password protection, consider Supabase Auth for production

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === DEMO_PASSWORD) {
            setIsAuthenticated(true);
            fetchInquiries();
        } else {
            alert("Neispravna lozinka.");
        }
    };

    const fetchInquiries = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('inquiries')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching:', error);
            alert("Greška kod učitavanja podataka");
        } else {
            setInquiries(data || []);
        }
        setLoading(false);
    };

    const updateStatus = async (id: string, newStatus: string) => {
        const { error } = await supabase
            .from('inquiries')
            .update({ status: newStatus })
            .eq('id', id);

        if (!error) {
            setInquiries((current) =>
                current.map((inquiry) =>
                    inquiry.id === id
                        ? { ...inquiry, status: newStatus as InquiryStatus }
                        : inquiry
                )
            );
        }
    };

    if (!isAuthenticated) {
        return (
            <div className={styles.loginContainer}>
                <div className={styles.loginBox}>
                    <h2>Admin Pristup</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            placeholder="Lozinka..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                        />
                        <button type="submit" className={styles.btn}>Prijava</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.adminContainer}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Upiti i Klijenti</h1>
                    <p className={styles.subtitle}>Pregled svih pristiglih web upita</p>
                </div>
                <button onClick={fetchInquiries} className={styles.refreshBtn}>
                    <RefreshCcw size={18} className={loading ? styles.spinning : ''} />
                    Osvježi
                </button>
            </div>

            {loading ? (
                <div className={styles.emptyState}>Učitavanje klijenata...</div>
            ) : inquiries.length === 0 ? (
                <div className={styles.emptyState}>Još nema zaprimljenih upita.</div>
            ) : (
                <div className={styles.grid}>
                    {inquiries.map((inquiry) => (
                        <div key={inquiry.id} className={`${styles.card} ${inquiry.status === 'completed' ? styles.cardCompleted : ''}`}>
                            <div className={styles.cardHeader}>
                                <div>
                                    <span className={styles.date}>
                                        {new Date(inquiry.created_at).toLocaleDateString('hr-HR')} u {new Date(inquiry.created_at).toLocaleTimeString('hr-HR', { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                    <h3 className={styles.clientName}>{inquiry.name}</h3>
                                </div>
                                <select
                                    className={`${styles.statusBadge} ${styles[inquiry.status]}`}
                                    value={inquiry.status}
                                    onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                                >
                                    <option value="new">Novi upit</option>
                                    <option value="contacted">Kontaktirano</option>
                                    <option value="completed">Završeno</option>
                                </select>
                            </div>

                            <div className={styles.contactInfo}>
                                <a href={`tel:${inquiry.phone}`} className={styles.infoRow}>
                                    <Phone size={14} /> {inquiry.phone}
                                </a>
                                <a href={`mailto:${inquiry.email}`} className={styles.infoRow}>
                                    <Mail size={14} /> {inquiry.email}
                                </a>
                                {inquiry.city && <span className={styles.infoRow}>📍 {inquiry.city}</span>}
                            </div>

                            <div className={styles.serviceDetails}>
                                <div className={styles.serviceTag}>{inquiry.service}</div>
                                <div className={styles.priceTag}>Procjena: {inquiry.estimated_price_min} - {inquiry.estimated_price_max} €</div>
                            </div>

                            {inquiry.message && (
                                <div className={styles.messageBox}>
                                    <strong>Poruka:</strong> {inquiry.message}
                                </div>
                            )}

                            <details className={styles.technicalDetails}>
                                <summary>Tehnički parametri izračuna</summary>
                                <pre>{JSON.stringify(inquiry.details, null, 2)}</pre>
                            </details>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
