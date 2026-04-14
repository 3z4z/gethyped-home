import AboutSection from "./components/About";
import ExpertiseSection from "./components/Expertise";
import HeroSection from "./components/Hero";
import HeaderSection from "./components/layout/Header";
import { container } from "./libs/classNames";

export default function App() {
  return (
    <div className={`${container} relative`}>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
    </div>
  );
}
