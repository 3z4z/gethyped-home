import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import aboutImg from "../assets/about.webp";
import SkewButton from "./ui/skew-button/SkewButton";
import RollingButton from "./ui/rolling-button/RollingButton";
export default function AboutSection() {
  return (
    <section className="grid grid-cols-12 grid-rows-2 pt-4 pb-48">
      <h2 className="row-start-1 row-end-2 col-start-2 col-end-12 text-[5rem] -tracking-[0.04rem] font-semibold max-w-[85%] leading-20">
        We create content that stands out. It lingers. That touches your target
        group and sets your brand in motion. Fast, powerful and energetic.
      </h2>
      <figure className="row-start-2 row-end-3 col-start-1 col-end-3 aspect-3/4 rounded-2xl overflow-hidden ring-10 ring-primary/35">
        <img src={aboutImg} alt="" className="w-full h-full object-cover" />
      </figure>
      <div className="row-start-2 row-end-5 col-start-5 col-end-10 self-end grid gap-5">
        <p className="text-[2rem] font-semibold tracking-tight leading-10 max-w-2xl">
          We don't stop at pretty pictures and cool visuals. We make it
          measurable. That way, you know exactly what works and what doesn't.
          Never again content without a strategy. Never again content without
          results.
        </p>
        <SkewButton
          title={"Get to know us"}
          icon={<FiArrowRight />}
          style={"baseOutline"}
        />
      </div>
      <div className="row-start-2 row-end-5 col-start-11 col-end-12 self-end flex justify-end">
        <div className="w-max">
          <RollingButton icon={<FiArrowDown />} />
        </div>
      </div>
    </section>
  );
}
