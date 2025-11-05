import { HeroSection } from '@/components/sections/HeroSection.jsx';
import { HighlightsSection } from '@/components/sections/HighlightsSection.jsx';
import { ToolSection } from '@/components/sections/ToolSection.jsx';
import { FAQSection } from '@/components/sections/FAQSection.jsx';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ToolSection />
      <FAQSection />
    </>
  );
}
