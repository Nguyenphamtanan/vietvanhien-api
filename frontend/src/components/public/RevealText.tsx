'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealTextProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function RevealText({ children, delay = 0, className }: RevealTextProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
