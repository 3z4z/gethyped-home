import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Elevation({ children, lift }) {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(wrapperRef.current, {
        y: lift,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [lift]);

  return (
    <div ref={wrapperRef} className="relative size-full">
      {children}
    </div>
  );
}
