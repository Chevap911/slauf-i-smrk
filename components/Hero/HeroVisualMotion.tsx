'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function HeroVisualMotion({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
            {children}
        </motion.div>
    );
}
