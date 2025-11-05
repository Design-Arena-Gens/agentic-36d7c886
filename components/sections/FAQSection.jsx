'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function FAQSection() {
  const { translate } = useLanguage();
  const items = translate('faq.items', []);
  const title = translate('faq.title');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faq" id="faq">
      <h2>{title}</h2>
      <div className="faq__items">
        {Array.isArray(items) &&
          items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <article key={item.question} className="faq__item">
                <button
                  type="button"
                  className="faq__question"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  aria-expanded={isActive}
                >
                  <span>{item.question}</span>
                  <span aria-hidden="true">{isActive ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.p
                      className="faq__answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
      </div>
    </section>
  );
}
