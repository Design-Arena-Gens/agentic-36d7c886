'use client';

import { useThemeMode } from '@/components/layout/ThemeProvider.jsx';
import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeMode();
  const { translate } = useLanguage();

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? translate('theme.light') : translate('theme.dark')}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? '🌙' : '☀️'}
      </span>
      <span>{isDark ? translate('theme.dark') : translate('theme.light')}</span>
    </button>
  );
}
