/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({
  children,
  className,
  style,
  radius = "rounded-xl",
  inset = "inset-3",
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative size-full ${radius}${className ? ` ${className}` : ""}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className={`absolute place-content-center shadow-lg overflow-hidden ${radius} *:${radius} ${inset}`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
