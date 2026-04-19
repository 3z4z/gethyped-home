import { container } from "./libs/classNames";

import AboutSection from "./components/About";
import BrandsSection from "./components/Brands";
import ExpertiseSection from "./components/Expertise";
import HeroSection from "./components/Hero";
import FooterSection from "./components/layout/Footer";
import HeaderSection from "./components/layout/Header";
import ResponsiveWrapper from "./components/ResponsiveWrapper";
import WorksSection from "./components/Works";

export default function App() {
  return (
    <>
      <div className={`${container} relative`}>
        <HeaderSection />
        <ResponsiveWrapper>
          <HeroSection />
          <AboutSection />
        </ResponsiveWrapper>
        <ExpertiseSection />
        <ResponsiveWrapper>
          <WorksSection />
        </ResponsiveWrapper>
      </div>
      <BrandsSection />
      <FooterSection />
    </>
  );
}
