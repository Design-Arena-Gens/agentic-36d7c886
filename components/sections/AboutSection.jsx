'use client';

import { useLanguage } from '@/components/layout/LanguageProvider.jsx';
import { motion } from 'framer-motion';

export function AboutSection() {
  const { translate } = useLanguage();
  const pillars = translate('about.pillars', []);
  const timeline = translate('about.timeline', []);

  return (
    <section className="about">
      <div className="about__intro">
        <h2>{translate('about.title')}</h2>
        <p>{translate('about.intro')}</p>
      </div>
      <div className="about__pillars">
        {Array.isArray(pillars) &&
          pillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.article>
          ))}
      </div>
      <div className="about__timeline">
        {Array.isArray(timeline) &&
          timeline.map((entry, index) => (
            <div className="timeline-entry" key={entry.year}>
              <span className="timeline-entry__year">{entry.year}</span>
              <p>{entry.event}</p>
            </div>
          ))}
      </div>
      <p className="about__closing">{translate('about.closing')}</p>
    </section>
  );
}
