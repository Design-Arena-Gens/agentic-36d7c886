import { PageHero } from '@/components/sections/PageHero.jsx';
import { PolicySection } from '@/components/sections/PolicySection.jsx';
import { translations } from '@/i18n';

const base = translations.en;

export const metadata = {
  title: `Disclaimer | ${base.metadata.title}`,
  description: base.disclaimer.sections.map((section) => section.body).join(' ')
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero titleKey="disclaimer.title" subtitleKey="footer.tagline" />
      <PolicySection titleKey="disclaimer.title" sectionsKey="disclaimer.sections" />
    </>
  );
}
