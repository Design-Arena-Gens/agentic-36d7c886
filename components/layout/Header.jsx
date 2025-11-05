'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';
import { ThemeToggle } from '@/components/ui/ThemeToggle.jsx';
import { LanguageSelector } from '@/components/ui/LanguageSelector.jsx';
import classNames from 'classnames';

export function Header() {
  const { translate } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '/', label: translate('nav.home') },
    { href: '/#tool', label: translate('nav.tool') },
    { href: '/about', label: translate('nav.about') },
    { href: '/#faq', label: translate('nav.faq') },
    { href: '/contact', label: translate('nav.contact') },
    { href: '/privacy-policy', label: translate('nav.privacy') },
    { href: '/disclaimer', label: translate('nav.disclaimer') }
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" onClick={() => setOpen(false)}>
          Horoscopes Love
        </Link>
        <button
          type="button"
          className={classNames('site-header__burger', { 'site-header__burger--open': open })}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={classNames('site-nav', { 'site-nav--open': open })}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="site-nav__actions">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </nav>
      </div>
    </header>
  );
}
