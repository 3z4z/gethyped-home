import { container } from "../../libs/classNames";
import logo from "../../assets/logo.svg";
import NavbarComponent from "./Navbar";
import { IoFlame } from "react-icons/io5";
import SkewButton from "../ui/skew-button/SkewButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeaderSection() {
  const header = useRef();
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
                "rounded-2xl",
                "shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
                "backdrop-blur-[5.2px]",
                "border",
                "border-white/30",
              );
            } else {
              header.current.classList.remove(
                "bg-white/5",
                "rounded-2xl",
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
      className={`${container} fixed top-0 left-1/2 -translate-x-1/2 flex justify-between items-center py-5.5 z-20 px-10`}
    >
      <a href="#" className="w-1/4 left">
        <figure>
          <img src={logo} alt="Logo" className="max-h-19" />
        </figure>
      </a>
      <NavbarComponent />
      <div className="w-1/4 flex justify-end right">
        <SkewButton
          title={"Get Results"}
          icon={<IoFlame />}
          style={"secondary"}
        />
      </div>
    </header>
  );
}
