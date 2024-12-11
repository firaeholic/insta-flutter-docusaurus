import React from "react";
import MegaBundleBanner from "../components/black-friday/MegaBundleBanner";
import HeroSection from "../components/black-friday/hero";
import heroData from "../../data/flutter/heroData.json";
import ValuePropositionSection from "../components/black-friday/ValuePropositionSection";
import valuePropositionData from "../../data/flutter/valuePropositionData.json";
import ShowcaseSection from "../components/black-friday/ShowcaseSection";
import showcaseData from "../../data/flutter/showcaseData.json";
import TestimonialsSection from "../components/black-friday/TestimonialsSection";
import testimonialsData from "../../data/flutter/testimonialsData.json";
import ComparisonSection from "../components/black-friday/ComparisonSection";
import comparisonData from "../../data/flutter/comparisonData.json";
import FAQSection from "../components/black-friday/FAQSection";
import faqData from "../../data/flutter/faqData.json";
import FooterSection from "../components/black-friday/FooterSection";
import footerData from "../../data/flutter/footerData.json";
import UrgencyWithOrdersSection from "../components/black-friday/UrgencySection";
import urgencyWithOrdersData from "../../data/flutter/urgencyData.json";

import PricingSection from "../components/black-friday/PricingSection";
import pricingData from "../../data/flutter/pricingData.json";
import NavbarSection from "../components/black-friday/NavbarSection";



const App: React.FC = () => {
  return (
    <div>
    <MegaBundleBanner />
      {/* <NavbarSection logoSrc="https://docs.instaflutter.com/img/logo.png"
        logoAlt="Instaflutter Logo"
        pricingLink="#pricing"
        backToSiteLink="https://instaflutter.com/templates" /> */}
        
      <HeroSection
        headline={heroData.headline}
        subheadline={heroData.subheadline}
        ctaText={heroData.ctaText}
        ctaLink={heroData.ctaLink}
      />
      

      <ValuePropositionSection
        title={valuePropositionData.title}
        propositions={valuePropositionData.propositions}
      />

      <PricingSection title={pricingData.title} pricingOptions={pricingData.pricingOptions} />
      <ShowcaseSection
        title={showcaseData.title}
        subtitle={showcaseData.subtitle}
        templates={showcaseData.templates}
        ctaText={showcaseData.ctaText}
        ctaLink={showcaseData.ctaLink}
      />
      <TestimonialsSection
        title={testimonialsData.title}
        testimonials={testimonialsData.testimonials}
      />
      <ComparisonSection
        title={comparisonData.title}
        comparison={comparisonData.comparison}
        totalSavings={comparisonData.totalSavings}
      />
      <FAQSection title={faqData.title} questions={faqData.questions} />
      <UrgencyWithOrdersSection
        title={urgencyWithOrdersData.title}
        subtitle={urgencyWithOrdersData.subtitle}
        countdown={urgencyWithOrdersData.countdown}
        remainingOrders={urgencyWithOrdersData.remainingOrders}
        cta={urgencyWithOrdersData.cta}
      />
      <FooterSection footerData={footerData} />

    </div>
  );
};

export default App;