'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function HighlightsSection() {
  const { translate } = useLanguage();
  const highlights = translate('highlights', []);

  return (
    <section className="highlights">
      <div className="highlights__grid">
        {Array.isArray(highlights) &&
          highlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
      </div>
    </section>
  );
}
