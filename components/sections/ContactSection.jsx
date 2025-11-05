'use client';

import { ContactForm } from '@/components/forms/ContactForm.jsx';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function ContactSection() {
  const { translate } = useLanguage();
  const side = translate('contact.side', {});

  return (
    <section className="contact-section">
      <div className="contact-section__grid">
        <div className="contact-section__details">
          <h2>{translate('contact.title')}</h2>
          <p>{translate('contact.subtitle')}</p>
          <ul>
            <li>
              <strong>{side.studio}</strong>
              <span>{side.address}</span>
            </li>
            <li>
              <strong>{side.phone}</strong>
            </li>
            <li>
              <strong>{side.media}</strong>
              <span>media@horoscopeslove.com</span>
            </li>
            <li>
              <strong>{side.partnerships}</strong>
              <span>partners@horoscopeslove.com</span>
            </li>
          </ul>
        </div>
        <div className="contact-section__form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
