import { PageHero } from '@/components/sections/PageHero.jsx';
import { ContactSection } from '@/components/sections/ContactSection.jsx';
import { translations } from '@/i18n';

const base = translations.en;

export const metadata = {
  title: `Contact | ${base.metadata.title}`,
  description: base.contact.subtitle
};

export default function ContactPage() {
  return (
    <>
      <PageHero titleKey="contact.title" subtitleKey="contact.subtitle" />
      <ContactSection />
    </>
  );
}
