/* eslint-disable react-hooks/purity */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import vid1 from "../assets/clips/loop-salontopper.mp4";
import vid2 from "../assets/clips/petrolhead-loop.mp4";
import { motion } from "framer-motion";
import { useBreakpoint } from "../hooks/useBreakpoints";

export default function HeroSection() {
  const breakpoint = useBreakpoint();
  const cards = [
    {
      count: "10M+",
      text: ["Organic views", "Growth through smart content"],
      data: null,
    },
    { data: vid1, text: null },
    {
      count: "30+",
      data: null,
      text: ["Brands helped", "From start-up to multinational"],
    },
    { data: vid2, text: null },
  ];

  let visibleCount = cards.length;
  if (breakpoint === "md") visibleCount = cards.length - 1;
  if (breakpoint === "sm") visibleCount = cards.length - 2;

  const visibleCards = cards.slice(0, visibleCount);

  const getRandomRotation = () => Math.floor(Math.random() * 25 - 10);

  const [rotations, setRotations] = useState(
    visibleCards.map(() => getRandomRotation()),
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    setIsFirstRender(false);
  }, []);
  const handleHoverStart = (index) => {
    setHoveredIndex(index);
    const newRotations = [...rotations];
    newRotations[index] = 0;
    setRotations(newRotations);
  };

  const handleHoverEnd = (index) => {
    setHoveredIndex(null);
    const newRotations = [...rotations];
    newRotations[index] = getRandomRotation();
    setRotations(newRotations);
  };

  return (
    <section className="pt-48 pb-20 overflow-hidden lg:px-10 md:px-8 sm:px-6 px-4">
      <header className="grid gap-8">
        <h1 className="text-[clamp(3.5rem,4vw,3rem)] text-6xl sm:text-[5rem] md:text-[5.5rem] lg:text-9xl font-semibold lg:tracking-tight -tracking-[0.2rem] lg:max-w-7/10 md:max-w-9/10 leading-15 sm:leading-17 md:leading-20 lg:leading-30">
          Get Hyped. Get Noticed. Get Results.
        </h1>
        <p className="text-[1.75rem] lg:text-[2rem] lg:leading-10 leading-9 font-semibold tracking-tight">
          Done gambling on content <br /> that yields nothing?
        </p>
      </header>
      <main>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 py-16 lg:px-16 lg:gap-4">
          {visibleCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{
                rotate: rotations[i],
                scale: 0.95,
                x: "-100%",
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                rotate: rotations[i],
                scale:
                  hoveredIndex === i ? 1.1 : hoveredIndex !== null ? 0.9 : 1,
                x:
                  hoveredIndex === null || hoveredIndex === i
                    ? 0
                    : i < hoveredIndex
                      ? -55
                      : 55,
                zIndex: hoveredIndex === i ? 10 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: isFirstRender ? i * 0.1125 : 0,
              }}
              onHoverStart={() => handleHoverStart(i)}
              onHoverEnd={() => handleHoverEnd(i)}
              className={`rounded-4xl lg:rounded-[2.5rem] overflow-hidden shadow-lg aspect-[4.8/6.2] cursor-pointer ${
                i === 0 ? "bg-info" : i === 2 ? "bg-success" : "bg-black"
              }`}
            >
              {c.text ? (
                <div className="p-5 sm:p-6 md:p-8 lg:p-10 flex justify-between flex-col h-full">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl md:font-semibold font-bold">
                    {c.count}
                  </span>
                  <div className="flex flex-col">
                    {c.text.map((t, i) => (
                      <span
                        key={i}
                        className="last:border-t last:border-t-base-content last:mt-2 last:pt-2 text-xs sm:text-base md:text-lg lg:text-xl first:lg:text-4xl first:md:text-3xl first:sm:text-2xl first:text-xl font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full w-full">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  >
                    <source src={c.data} type="video/mp4" />
                  </video>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </section>
  );
}
