import { PageHero } from '@/components/sections/PageHero.jsx';
import { AboutSection } from '@/components/sections/AboutSection.jsx';
import { translations } from '@/i18n';

const base = translations.en;

export const metadata = {
  title: `About | ${base.metadata.title}`,
  description: base.about.intro
};

export default function AboutPage() {
  return (
    <>
      <PageHero titleKey="about.title" subtitleKey="about.intro" />
      <AboutSection />
    </>
  );
}
