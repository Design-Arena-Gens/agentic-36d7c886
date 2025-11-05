import './globals.css';
import { RootProviders } from '@/components/layout/RootProviders.jsx';
import { Header } from '@/components/layout/Header.jsx';
import { Footer } from '@/components/layout/Footer.jsx';
import { translations, defaultLanguage } from '@/i18n';

const baseMetadata = translations[defaultLanguage]?.metadata ?? {};

export const metadata = {
  title: baseMetadata.title,
  description: baseMetadata.description,
  openGraph: {
    title: baseMetadata.title,
    description: baseMetadata.description,
    type: 'website',
    url: 'https://agentic-36d7c886.vercel.app',
    siteName: 'Horoscopes Love'
  },
  twitter: {
    card: 'summary_large_image',
    title: baseMetadata.title,
    description: baseMetadata.description
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
