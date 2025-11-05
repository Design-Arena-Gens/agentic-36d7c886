'use client';

import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function PageHero({ title, subtitle, titleKey, subtitleKey }) {
  const { translate } = useLanguage();
  const resolvedTitle = titleKey ? translate(titleKey) : title;
  const resolvedSubtitle = subtitleKey ? translate(subtitleKey) : subtitle;

  return (
    <section className="page-hero">
      <div className="page-hero__wrapper">
        <h1>{resolvedTitle}</h1>
        {resolvedSubtitle && <p>{resolvedSubtitle}</p>}
      </div>
    </section>
  );
}
