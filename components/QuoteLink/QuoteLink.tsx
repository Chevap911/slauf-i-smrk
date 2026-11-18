'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
export function otvoriProcjenu(service?: string) {
    window.dispatchEvent(new CustomEvent('slauf:otvori-procjenu', { detail: { service } }));
}
export default function QuoteLink({ className, children, service }: { className?: string; children: ReactNode; service?: string }) {
    return <Link href="/#procjena" className={className} data-service={service} onClick={e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault(); otvoriProcjenu(service);
    }}>{children}</Link>;
}
