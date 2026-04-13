/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { springTransition } from "./RollingButton.style";

export default function RollingButton({ text }) {
  return (
    <motion.a
      initial="initial"
      whileHover={"hovered"}
      href="#"
      className="relative text-lg tracking-tight font-semibold px-3.5 py-2 rounded-xl overflow-hidden"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-150%" },
        }}
        transition={{
          ...springTransition,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
        href="#"
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-2"
        variants={{
          initial: { y: "150%" },
          hovered: { y: 0, color: "#fff" },
        }}
        transition={{
          ...springTransition,
          delay: 0.06,
          ease: [0.6, 0.01, 0.05, 0.95],
        }}
      >
        {text}
      </motion.div>
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
    </motion.a>
  );
}
