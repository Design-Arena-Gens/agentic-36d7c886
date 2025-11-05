'use client';

import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function PolicySection({ title, sections, titleKey, sectionsKey }) {
  const { translate } = useLanguage();
  const resolvedTitle = titleKey ? translate(titleKey) : title;
  const resolvedSections = sectionsKey ? translate(sectionsKey, []) : sections;

  return (
    <section className="policy">
      <h2>{resolvedTitle}</h2>
      <div className="policy__content">
        {Array.isArray(resolvedSections) &&
          resolvedSections.map((section) => (
            <article key={section.heading}>
              <h3>{section.heading}</h3>
              <p>{section.body}</p>
            </article>
          ))}
      </div>
    </section>
  );
}
