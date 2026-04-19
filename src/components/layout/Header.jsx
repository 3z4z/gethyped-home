import { container } from "../../libs/classNames";
import logo from "../../assets/logo.svg";
import NavbarComponent from "./Navbar";
import { IoFlame } from "react-icons/io5";
import SkewButton from "../ui/skew-button/SkewButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useBreakpoint } from "../../hooks/useBreakpoints";
import Hamburger from "../ui/Hamburger";
import ResponsiveHeader from "../ResponsiveHeader";
import useToggle from "../../hooks/useToggle";
import ResponsiveWrapper from "../ResponsiveWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderSection() {
  const header = useRef();
  const breakpoint = useBreakpoint();
  const { isOpen, toggle } = useToggle();
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      ScrollTrigger.getAll().forEach((t) => t.disable());
    } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      ScrollTrigger.getAll().forEach((t) => t.enable());
    }

    return () => {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      ScrollTrigger.getAll().forEach((t) => t.enable());
    };
  }, [isOpen]);
  useGSAP(
    () => {
      const showAnim = gsap
        .from(header.current, {
          yPercent: -100,
          paused: true,
          duration: 0.3,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top+=80px top",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === 1) {
            showAnim.reverse();
          } else {
            showAnim.play();
            if (window.scrollY > 100) {
              header.current.classList.add(
                "bg-white/5",
                "rounded-b-2xl",
                "shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
                "backdrop-blur-[5.2px]",
                "border",
                "border-white/30",
              );
            } else {
              header.current.classList.remove(
                "bg-white/5",
                "rounded-b-2xl",
                "shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
                "backdrop-blur-[5.2px]",
                "border",
                "border-white/30",
              );
            }
          }
        },
      });

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.out" },
      });

      tl.from(".left", { x: -100, opacity: 0 })
        .from(".mid", { y: -100, opacity: 0 }, "-=0.8")
        .from(".right", { x: 100, opacity: 0 }, "-=0.8");
    },
    { scope: header },
  );
  return (
    <header
      ref={header}
      className={`${container} fixed top-0 left-1/2 -translate-x-1/2 flex justify-between items-center py-5.5 z-20 lg:px-10 md:px-8 sm:px-6 px-4`}
    >
      <ResponsiveWrapper className={"w-1/4"}>
        <a href="#" className="w-full left relative z-2">
          <figure>
            <img src={logo} alt="Logo" className="max-h-19" />
          </figure>
        </a>
      </ResponsiveWrapper>
      {breakpoint === "lg" && (
        <ResponsiveWrapper className={"lg:w-1/2 "}>
          <NavbarComponent />
        </ResponsiveWrapper>
      )}
      <ResponsiveWrapper className={"w-1/4"}>
        <div className="w-full relative z-2 flex justify-end right">
          {breakpoint === "lg" ? (
            <SkewButton
              title={"Get Results"}
              icon={<IoFlame />}
              style={"secondary"}
            />
          ) : (
            <>
              <Hamburger isOpen={isOpen} toggle={toggle} />
            </>
          )}
        </div>
      </ResponsiveWrapper>
      <ResponsiveHeader isOpen={isOpen} />
    </header>
  );
}
