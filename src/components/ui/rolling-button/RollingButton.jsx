/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { springTransition } from "./RollingButton.style";

export default function RollingButton({ text, icon }) {
  return (
    <motion.button
      initial="initial"
      whileHover={"hovered"}
      variants={{
        initial: { skewY: 0, scale: 1 },
        hovered: { skewY: icon ? -3 : 0, scale: icon ? 1.05 : 1 },
      }}
      className={`relative tracking-tight font-semibold ${icon ? "p-3 text-primary border-2 border-base-content/50 text-3xl" : "px-3.5 py-2 text-lg"} rounded-xl overflow-hidden cursor-pointer`}
    >
      <motion.div
        className="block"
        variants={{
          initial: { y: 0 },
          hovered: { y: icon ? "150%" : "-150%" },
        }}
        transition={{
          ...springTransition,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        {text || icon}
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-2"
        variants={{
          initial: { y: icon ? "-150%" : "150%" },
          hovered: { y: 0, color: text && "#fff" },
        }}
        transition={{
          ...springTransition,
          delay: 0.06,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        {text || icon}
      </motion.div>
      {text && (
        <>
          <motion.div
            variants={{
              initial: {
                height: 0,
                skewY: -6,
              },
              hovered: {
                height: "100%",
                skewY: 0,
              },
            }}
            className="absolute inset w-full bg-primary left-0 z-0 bottom-0"
          />
          <motion.div
            variants={{
              initial: { height: 0, skewY: -6 },
              hovered: {
                height: "100%",
                skewY: 0,
                transition: { delay: 0.07, duration: 0.2 },
              },
            }}
            className="absolute inset w-full bg-base-content left-0 z-1 bottom-0"
          />
        </>
      )}
    </motion.button>
  );
}
