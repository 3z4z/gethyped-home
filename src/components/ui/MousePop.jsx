import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import BrandLogo from "./icons/BrandLogo";

const colors = [
  "#ff7e75",
  "#ffd675",
  "#eaff75",
  "#95ff75",
  "#ff75d3",
  "#b175ff",
  "#758eff",
  "#75ffef",
];

const hoverDistance = 400;

const MousePopSection = ({ children }) => {
  const [pops, setPops] = useState([]);
  const lastPos = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!lastPos.current) {
      lastPos.current = { x, y };
      return;
    }

    const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y);

    if (dist > hoverDistance) {
      const id = Date.now();

      const directionX = (x - lastPos.current.x) * 0.5;
      const directionY = (y - lastPos.current.y) * 0.5;

      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newPop = {
        id,
        x,
        y,
        dx: directionX,
        dy: directionY,
        color: randomColor,
      };

      setPops((prev) => [...prev, newPop]);
      lastPos.current = { x, y };
      setTimeout(() => {
        setPops((prev) => prev.filter((p) => p.id !== id));
      }, 4000);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative sm:min-h-screen flex flex-col overflow-hidden"
    >
      {children}

      {pops.map((pop) => (
        <PopText key={pop.id} {...pop} />
      ))}
    </div>
  );
};

const PopText = ({ x, y, dx, dy, color }) => {
  const el = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        el.current,
        {
          opacity: 0,
          scale: 0.2,
          x: x,
          y: y,
        },
        {
          opacity: 1,
          scale: 1.2,
          x: `+=${dx}`,
          y: `+=${dy}`,
          duration: 1,
          ease: "expo.out",
        },
      )
        .to(el.current, {
          scale: 1,
          duration: 1.5,
        })
        .to(
          el.current,
          {
            scale: 0,
            duration: 0.5,
            ease: "power1.out",
          },
          "-=0.1",
        );
    });

    return () => ctx.revert();
  }, [dx, dy, x, y]);

  return (
    <div
      ref={el}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        height: "4.5rem",
        pointerEvents: "none",
        zIndex: 100,
        opacity: 0,
        willChange: "transform, opacity",
      }}
    >
      <BrandLogo color={color} />
    </div>
  );
};

export default MousePopSection;
