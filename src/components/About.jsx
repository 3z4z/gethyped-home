import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import aboutImg from "../assets/about.webp";
import SkewButton from "./ui/skew-button/SkewButton";
import RollingButton from "./ui/rolling-button/RollingButton";
import TiltCard from "./ui/tilt-card/TiltCard";
import aboutClip from "../assets/clips/about-clip.mp4";
import {
  headingMediumTextResponse,
  headingSubTextResponse,
} from "../libs/classNames";

export default function AboutSection() {
  return (
    <section className="sm:grid grid-cols-12 grid-rows-2 pt-4 lg:pb-48 md:pb-36 sm:pb-28 pb-20 lg:px-10 md:px-8 sm:px-6 px-4">
      <h2
        className={`row-start-1 row-end-2 lg:col-start-2 col-start-1 col-end-12 col-span-12 lg:max-w-[85%] max-w-max max-md:mb-10 max-sm:mb-16 ${headingMediumTextResponse}`}
      >
        We create content that stands out. It lingers. That touches your target
        group and sets your brand in motion. Fast, powerful and energetic.
      </h2>
      <div className="row-start-2 row-end-3 col-start-1 lg:col-end-3 col-end-6 max-lg:pe-6 max-sm:pb-12">
        <TiltCard
          className={
            "aspect-3/4 bg-primary/35 max-sm:rotate-6 max-sm:w-[calc(100%-4rem)] lg:ms-10"
          }
        >
          <figure className="max-sm:hidden size-full">
            <img src={aboutImg} alt="" className="size-full object-cover" />
          </figure>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="sm:hidden h-full w-full object-cover"
          >
            <source src={aboutClip} />
          </video>
        </TiltCard>
      </div>
      <div className="row-start-2 row-end-5 lg:col-start-5 col-start-6 lg:col-end-10 sm:col-end-12 col-end-12 self-end flex flex-col lg:gap-6 gap-8">
        <p className={`max-w-2xl ${headingSubTextResponse}`}>
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
      <div className="max-sm:hidden row-start-2 row-end-5 lg:col-start-11 col-start-12 col-end-12 self-end flex justify-end">
        <div className="w-max">
          <RollingButton
            icon={<FiArrowDown />}
            action={() =>
              document
                .getElementById("expertise")
                .scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>
      </div>
    </section>
  );
}
