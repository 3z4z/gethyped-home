/* eslint-disable no-unused-vars */
import { FaArrowRight } from "react-icons/fa";
import SkewButton from "./ui/skew-button/SkewButton";
import TiltCard from "./ui/tilt-card/TiltCard";
import clip1 from "../assets/clips/work1.mp4";
import clip2 from "../assets/clips/work2.mp4";
import clip3 from "../assets/clips/work3.mp4";
import CurveShape from "./ui/icons/CurveShape";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, transform } from "framer-motion";
import Elevation from "./ui/Elevation";
import {
  headingLargeTextResponse,
  headingSubTextResponse,
} from "../libs/classNames";
import { useBreakpoint } from "../hooks/useBreakpoints";

export default function WorksSection() {
  const breakpoint = useBreakpoint();
  const works = [
    {
      video: clip1,
      title: "From zero to full, within 3 weeks",
      badge: "Boiled",
    },
    {
      video: clip2,
      title: "Soft in taste, strong in appearance",
      badge: "Roast",
    },
    {
      video: clip3,
      title: "Content that really tastes good (and touches)",
      badge: "Loco",
    },
  ];
  return (
    <section className="lg:px-10 md:px-8 sm:px-6 px-4 lg:pt-48 md:pt-36 sm:pt-26 pt-20 gap-4 lg:pb-20 sm:pb-15">
      <div className="lg:grid flex max-lg:flex-col grid-cols-12 grid-rows-2 gap-4">
        <h2
          className={`max-lg:max-w-xl row-start-1 row-end-2 lg:col-start-2 col-start-1 col-end-6 ${headingLargeTextResponse}`}
        >
          Content that scores.
        </h2>
        <div className="row-start-2 row-end-3 col-start-2 lg:col-end-6">
          <p
            className={`max-w-[calc(100%-4rem)] pb-6 ${headingSubTextResponse}`}
          >
            We tell your story. In a way that truly resonates with your target
            audience. With creative content that works and makes a difference.
          </p>
          <SkewButton
            title={"View all our work"}
            style={"baseOutline"}
            icon={<FaArrowRight />}
          />
        </div>
      </div>
      <div className="pt-12 flex max-sm:flex-col lg:gap-20 sm:gap-3 gap-2 lg:pb-20 pb-12 lg:px-32 w-full">
        {works.map((w, i) => (
          <Elevation
            key={i}
            className={"group"}
            lift={
              breakpoint === "md"
                ? i * -160
                : breakpoint === "lg"
                  ? i * -100
                  : i
            }
          >
            <TiltCard
              key={i}
              style={{
                top: ["md", "lg"].includes(breakpoint)
                  ? works.length * 40 - i * 40
                  : breakpoint === "sm"
                    ? i * -80
                    : 0,
              }}
              className={`relative aspect-3/4 ${i === 0 ? "sm:bg-primary/25 bg-primary/75" : i === 1 ? "sm:bg-info/25 bg-info/25" : "sm:bg-success/25 bg-success/25"} max-sm:group-even:-rotate-5 max-sm:group-odd:rotate-5 max-sm:group-even:-translate-x-5 max-sm:group-odd:translate-x-5 max-sm:max-w-xs max-sm:mx-auto`}
              inset="lg:inset-4 md:inset-2 inset-1.5"
              radius="lg:rounded-[2.75rem] rounded-2xl"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              >
                <source src={w.video} type="video/mp4" />
              </video>
              <motion.div
                initial="initial"
                whileHover={"hovered"}
                className="lg:px-4 sm:px-2 px-4 lg:pb-4 sm:pb-2 pb-4 w-full h-max absolute left-0 bottom-0 cursor-pointer"
              >
                <div
                  className={`lg:translate-y-20 sm:translate-y-8 translate-y-20 relative z-0 ${i === 0 ? "text-primary" : i === 1 ? "text-info" : "text-success"}`}
                >
                  <CurveShape />
                  <button className="overflow-hidden absolute z-3 lg:top-4 sm:top-1.5 top-4 lg:right-4 sm:right-1.5 right-4 lg:size-12 sm:size-7 size-12 lg:text-3xl sm:text-lg text-3xl rounded-full flex items-center justify-center bg-white cursor-pointer">
                    <motion.span
                      variants={{
                        initial: { y: "0px", x: "10px", opacity: 1, scale: 1 },
                        hovered: {
                          y: "-50px",
                          x: "60px",
                          opacity: 0.5,
                          scale: 0.85,
                        },
                      }}
                    >
                      <FiArrowUpRight />
                    </motion.span>
                    <motion.span
                      variants={{
                        initial: {
                          y: "50px",
                          x: "-60px",
                          opacity: 0.5,
                          scale: 0.85,
                        },
                        hovered: { y: "0px", x: "-15px", opacity: 1, scale: 1 },
                      }}
                    >
                      <FiArrowUpRight />
                    </motion.span>
                  </button>
                </div>
                <div
                  className={`relative lg:p-4 md:p-2 sm:p-1.5 p-4 rounded-t-none! rounded-b-2xl! flex flex-col lg:gap-4 md:gap-2 gap-3 ${i === 0 ? "bg-primary" : i === 1 ? "bg-info" : "bg-success"}`}
                >
                  <h3 className="text-base-100 text-2xl sm:text-sm md:text-base lg:text-[2rem] font-semibold tracking-tight lg:leading-10 sm:leading-4.5 leading-5 line-clamp-2">
                    {w.title}
                  </h3>
                  <span className="badge lg:badge-xl md:badge-sm sm:badge-xs badge-lg rounded-md font-medium">
                    {w.badge}
                  </span>
                </div>
              </motion.div>
            </TiltCard>
          </Elevation>
        ))}
      </div>
    </section>
  );
}
