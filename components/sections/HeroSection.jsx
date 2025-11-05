'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroScene } from '@/components/three/HeroScene.jsx';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function HeroSection() {
  const { translate } = useLanguage();
  const stats = translate('hero.stats');

  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="hero__eyebrow">Horoscopes Love</p>
          <h1>{translate('hero.headline')}</h1>
          <p className="hero__lead">{translate('hero.subheadline')}</p>
          <div className="hero__actions">
            <Link href="#tool" className="button button--primary">
              {translate('hero.primaryCta')}
            </Link>
            <Link href="/about" className="button button--ghost">
              {translate('hero.secondaryCta')}
            </Link>
          </div>
          <ul className="hero__stats">
            {Array.isArray(stats) &&
              stats.map((item) => (
                <li key={item.label}>
                  <span className="hero__stats-value">{item.value}</span>
                  <span className="hero__stats-label">{item.label}</span>
                </li>
              ))}
          </ul>
        </motion.div>
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <HeroScene />
        </motion.div>
      </div>
    </section>
  );
}
