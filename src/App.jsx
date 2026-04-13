import HeaderSection from "./components/Header";
import HeroSection from "./components/Hero";
import { container } from "./libs/classNames";

export default function App() {
  return (
    <div className={`${container} relative`}>
      <HeaderSection />
      <HeroSection />
    </div>
  );
}
