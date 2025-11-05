import { PageHero } from '@/components/sections/PageHero.jsx';
import { PolicySection } from '@/components/sections/PolicySection.jsx';
import { translations } from '@/i18n';

const base = translations.en;

export const metadata = {
  title: `Privacy Policy | ${base.metadata.title}`,
  description: base.privacy.sections.map((section) => section.body).join(' ')
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero titleKey="privacy.title" subtitleKey="footer.tagline" />
      <PolicySection titleKey="privacy.title" sectionsKey="privacy.sections" />
    </>
  );
}
