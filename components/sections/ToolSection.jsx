'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';
import { CompatibilityForm } from '@/components/forms/CompatibilityForm.jsx';

export function ToolSection() {
  const { translate } = useLanguage();

  return (
    <section className="tool" id="tool">
      <motion.div
        className="tool__intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
      >
        <h2>{translate('tool.title')}</h2>
        <p>{translate('tool.intro')}</p>
      </motion.div>
      <CompatibilityForm />
    </section>
  );
}
