'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Procjena bez odlaska sa stranice. Ako stranica ima formu (id="procjena"), skrolira
 * do nje; ako nema, otvara modal iz QuoteFab. Do 28. 9. 2026. ovi gumbi vodili su na
 * naslovnicu, pa je posjetitelj s "O nama" ili galerije gubio mjesto na kojem je bio.
 * Bez JavaScripta href i dalje vodi na formu na naslovnici.
 */
export function otvoriProcjenu() {
    const forma = document.getElementById('procjena');
    if (forma && forma.getClientRects().length > 0) {
        forma.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }
    window.dispatchEvent(new Event('slauf:otvori-procjenu'));
}

type Props = {
    className?: string;
    children: ReactNode;
};

export default function QuoteLink({ className, children }: Props) {
    return (
        <Link
            href="/#procjena"
            className={className}
            onClick={(e) => {
                e.preventDefault();
                otvoriProcjenu();
            }}
        >
            {children}
        </Link>
    );
}
