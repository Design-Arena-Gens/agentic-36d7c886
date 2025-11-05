'use client';

import { LanguageProvider } from './LanguageProvider.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';

export function RootProviders({ children }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
