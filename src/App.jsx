import AboutSection from "./components/About";
import BrandsSection from "./components/Brands";
import ExpertiseSection from "./components/Expertise";
import HeroSection from "./components/Hero";
import HeaderSection from "./components/layout/Header";
import ResponsiveWrapper from "./components/ResponsiveWrapper";
import WorksSection from "./components/Works";
import { container } from "./libs/classNames";

export default function App() {
  return (
    <>
      <div className={`${container} relative`}>
        <ResponsiveWrapper>
          <HeaderSection />
          <HeroSection />
          <AboutSection />
        </ResponsiveWrapper>
        <ExpertiseSection />
        <ResponsiveWrapper>
          <WorksSection />
        </ResponsiveWrapper>
      </div>
      <BrandsSection />
    </>
  );
}
