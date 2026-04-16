/* eslint-disable no-unused-vars */
import { FaArrowRight } from "react-icons/fa";
import SkewButton from "./ui/skew-button/SkewButton";
import TiltCard from "./ui/tilt-card/TiltCard";
import clip1 from "../assets/clips/work1.mp4";
import clip2 from "../assets/clips/work2.mp4";
import clip3 from "../assets/clips/work3.mp4";
import CurveShape from "./ui/icons/CurveShape";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Elevation from "./ui/Elevation";

export default function WorksSection() {
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
    <section className="px-10 pt-48 gap-4 pb-20">
      <div className="grid grid-cols-12 grid-rows-2">
        <h2 className="row-start-1 row-end-2 col-start-2 col-end-6 tracking-tighter font-semibold text-9xl">
          Content that scores.
        </h2>
        <div className="row-start-2 row-end-3 col-start-2 col-end-6">
          <p className="max-w-[calc(100%-4rem)] font-semibold text-[2rem] leading-11 tracking-tight pb-6">
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
      <div className="pt-12 flex gap-20 pb-20 px-32 w-full">
        {works.map((w, i) => (
          <Elevation key={i} lift={i * -100}>
            <TiltCard
              key={i}
              style={{ top: works.length * 40 - i * 40 }}
              className={`relative aspect-3/4 ${i === 0 ? "bg-primary/25" : i === 1 ? "bg-info/25" : "bg-success/25"}`}
              inset="inset-4"
              radius="rounded-[2.75rem]"
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
                className="px-4 pb-4 w-full h-max absolute left-0 bottom-0 cursor-pointer"
              >
                <div
                  className={`translate-y-20 relative z-0 ${i === 0 ? "text-primary" : i === 1 ? "text-info" : "text-success"}`}
                >
                  <CurveShape />
                  <button className="overflow-hidden absolute z-3 top-4 right-4 size-12 text-3xl rounded-full flex items-center justify-center bg-white cursor-pointer">
                    <motion.span
                      variants={{
                        initial: { y: "0px", x: "15px", opacity: 1, scale: 1 },
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
                  className={`relative p-4 rounded-t-none! rounded-b-2xl! flex flex-col gap-4 ${i === 0 ? "bg-primary" : i === 1 ? "bg-info" : "bg-success"}`}
                >
                  <h3 className="text-[2rem] font-semibold tracking-tight leading-9 text-base-100">
                    {w.title}
                  </h3>
                  <span className="badge badge-xl rounded-md font-medium">
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
