/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { buttonStyles, iconStyles } from "./SkewButton.style";

export default function SkewButton({ title, icon, style }) {
  return (
    <motion.button
      initial="rest"
      whileHover="hovered"
      whileTap="tapped"
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      variants={{
        rest: { borderRadius: "1rem" },
        hovered: { skewY: -4, scale: 1.05, borderRadius: "0.625rem" },
        tapped: { scale: 0.95, borderRadius: "0.875rem" },
      }}
      className={`${buttonStyles[style] || ""} flex items-center gap-2 font-semibold lg:text-xl md:text-base sm:text-xs text-lg py-1.5 ps-2.5 pe-1.5 cursor-pointer border max-w-max`}
    >
      {title}
      <motion.span
        variants={{
          rest: {
            borderRadius: "0.75rem",
          },
          hovered: {
            borderRadius: "0.45rem",
            scale: 0.9,
          },
          tapped: {
            borderRadius: "0.5rem",
            scale: 1,
          },
        }}
        className={`${iconStyles[style] || ""} lg:p-1.5 sm:p-2 p-1.5 lg:text-3xl sm:text-xl text-2xl relative z-10`}
      >
        {icon}
      </motion.span>
    </motion.button>
  );
}
