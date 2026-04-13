/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import vid1 from "../assets/clips/loop-salontopper.mp4";
import vid2 from "../assets/clips/petrolhead-loop.mp4";
import { motion } from "framer-motion";

export default function HeroSection() {
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

  const getRandomRotation = () => Math.floor(Math.random() * 25 - 10);

  const [rotations, setRotations] = useState(
    cards.map(() => getRandomRotation()),
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
    <section className="pt-48 pb-20 overflow-hidden">
      <header className="grid gap-8">
        <h1 className="text-9xl font-semibold tracking-tight max-w-7/10 leading-30">
          Get Hyped. Get Noticed. Get Results.
        </h1>
        <p className="text-[2rem] leading-10 font-semibold tracking-tight">
          Done gambling on content <br /> that yields nothing?
        </p>
      </header>
      <main>
        <div className="grid grid-cols-4 mt-8 p-16 gap-4">
          {cards.map((c, i) => (
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
              className={`rounded-[2.5rem] overflow-hidden shadow-lg aspect-[4.8/6.2] cursor-pointer ${
                i === 0 ? "bg-info" : i === 2 ? "bg-success" : "bg-black"
              }`}
            >
              {c.text ? (
                <div className="p-10 flex justify-between flex-col h-full">
                  <span className="text-8xl font-semibold">{c.count}</span>
                  <div className="flex flex-col">
                    {c.text.map((t, i) => (
                      <span
                        key={i}
                        className="last:border-t last:border-t-base-content last:mt-2 last:pt-2 text-xl first:text-4xl font-semibold"
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
