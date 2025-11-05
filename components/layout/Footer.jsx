'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function Footer() {
  const { translate } = useLanguage();

  const footerLinks = [
    { href: '/', label: translate('nav.home') },
    { href: '/about', label: translate('nav.about') },
    { href: '/contact', label: translate('nav.contact') },
    { href: '/privacy-policy', label: translate('nav.privacy') },
    { href: '/disclaimer', label: translate('nav.disclaimer') }
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div>
          <h3>Horoscopes Love</h3>
          <p>{translate('footer.tagline')}</p>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="site-footer__legal">© {new Date().getFullYear()} Horoscopes Love. {translate('footer.rights')}</div>
      </div>
    </footer>
  );
}
