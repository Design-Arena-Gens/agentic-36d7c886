'use client';

import { useLanguage } from '@/components/layout/LanguageProvider.jsx';

export function LanguageSelector() {
  const { language, setLanguage, options, translate } = useLanguage();

  return (
    <label className="language-selector">
      <span>{translate('language.label')}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        className="language-selector__field"
      >
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
