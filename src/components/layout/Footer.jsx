/* eslint-disable no-unused-vars */
import {
  container,
  footerSubLink,
  headingLargeTextResponse,
} from "../../libs/classNames";
import FooterCurve from "../ui/icons/FooterCurve";
import logo from "../../assets/logo.svg";
import RollingButton from "../ui/rolling-button/RollingButton";
import {
  FaEnvelope,
  FaFire,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import ghSticker from "../../assets/gh-sticker.svg";
import { motion } from "framer-motion";
import SkewButton from "../ui/skew-button/SkewButton";
import MousePopSection from "../ui/MousePop";
import ResponsiveWrapper from "../ResponsiveWrapper";
import { useBreakpoint } from "../../hooks/useBreakpoints";
import footerLogo from "../../assets/footer-logo.svg";

const footLinks = ["Experties", "Work", "About", "Contact"];
const contacts = [
  { label: "Contact", links: ["md.salmanezaz@gmail.com", "+8801632095012"] },
  { label: "Address", links: ["Jatrabari, Dhaka - 1204"] },
];
const socialLinks = [
  { icon: FaLinkedinIn, link: "https://www.linkedin.com" },
  { icon: FaTiktok, link: "https://www.tiktok.com" },
  { icon: FaInstagram, link: "https://www.instagram.com" },
  { icon: FaYoutube, link: "https://www.youtube.com" },
];

const footerBodyLinks = [
  { text: "Email us directly", icon: FaEnvelope },
  { text: "Get Results", icon: FaFire },
];
export default function FooterSection() {
  const breakpoint = useBreakpoint();
  return (
    <footer
      className={`${container} sm:min-h-screen min-h-[calc(75dvh)] flex flex-col relative lg:px-10 md:px-8 sm:px-6 px-4`}
    >
      <div className="border-t border-t-base-content/25"></div>
      <MousePopSection>
        <div className="h-full flex flex-col lg:grow max-lg:pt-56 items-center justify-center">
          <div className="h-full flex flex-col justify-center items-center lg:px-10 md:px-8 sm:px-6 px-4">
            {["md", "lg"].includes(breakpoint) && (
              <ResponsiveWrapper>
                <div className="grow flex flex-col gap-12">
                  <h2 className={headingLargeTextResponse}>Let's Get Hyped!</h2>
                  <div className="flex items-center justify-center gap-6">
                    {footerBodyLinks.map((l, i) => (
                      <SkewButton
                        key={i}
                        icon={<l.icon className="lg:p-1.5" />}
                        title={l.text}
                        style={i === 0 ? "baseOutline" : "primary"}
                      />
                    ))}
                  </div>
                </div>
              </ResponsiveWrapper>
            )}
          </div>
        </div>
      </MousePopSection>
      {/* footer bottom */}
      <ResponsiveWrapper max={991} min={640}>
        <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 bg-base-200 text-justify w-[calc(100%-2.5rem)]">
          <div className="max-sm:hidden absolute w-full lg:bottom-0 bottom-full left-0 z-1 text-base-200">
            <FooterCurve />
          </div>
          {["md", "lg"].includes(breakpoint) && (
            <motion.figure
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute lg:bottom-72 bottom-80 right-12 size-36 z-3"
            >
              <img src={ghSticker} alt="" className="size-full" />
            </motion.figure>
          )}
          <div className="flex sm:justify-between justify-center w-full relative">
            {["md", "lg"].includes(breakpoint) && (
              <figure className="lg:h-36 h-20 w-auto absolute lg:bottom-2 bottom-58 left-2 z-2">
                <img src={logo} alt="brand logo" className="h-full" />
              </figure>
            )}
            <div className="lg:absolute flex max-sm:flex-col sm:items-end items-center sm:justify-end justify-center right-2 bottom-2 sm:gap-24 gap-12 px-2 pb-8 z-2">
              <div className="flex flex-col gap-8 pt-16">
                {breakpoint === "sm" && (
                  <figure className="w-full absolute bottom-[calc(100%-2rem)] right-0">
                    <img src={footerLogo} alt="" />
                  </figure>
                )}
                <div className="sm:hidden mx-auto">
                  <SkewButton
                    title={"Get Hyped! Contact us"}
                    icon={<FaFire />}
                    style={"primary"}
                  />
                </div>
                <div className="flex gap-3 justify-center items-center">
                  {footLinks.map((l, i) => (
                    <RollingButton key={i} text={l} bgColor={"bg-white"} />
                  ))}
                </div>
                <div className="flex gap-4 items-center max-sm:justify-center">
                  <span className="max-sm:hidden text-xl font-bold">
                    Follow Us
                  </span>
                  <div className="flex gap-3 items-center">
                    {socialLinks.map((l, i) => (
                      <a
                        href={l.link}
                        key={i}
                        className="size-12 rounded-full flex items-center justify-center text-xl group hover:scale-125 hover:text-primary transition bg-white hover:shadow-md"
                      >
                        <l.icon className="transition" />
                      </a>
                    ))}
                  </div>
                </div>
                {breakpoint === "md" && (
                  <div className="flex justify-between">
                    <a href="#" className={footerSubLink}>
                      &copy; 2026 Get Hyped
                    </a>
                    <a href="https://github.com/3z4z" className={footerSubLink}>
                      &copy; Designed by Md. Salman Ezaz
                    </a>
                  </div>
                )}
              </div>
              <div className="flex gap-4 flex-col">
                {contacts.map((c, i) => (
                  <div key={i}>
                    <h5 className="max-sm:hidden font-bold text-xl mb-2">
                      {c.label}
                    </h5>
                    <div className="flex flex-col max-sm:text-center gap-1">
                      {c.links.map((l, i) => (
                        <a
                          href="#"
                          key={i}
                          className="hover:text-primary font-medium transition"
                        >
                          {l}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <a href="#" className={`${footerSubLink} max-sm:text-center`}>
                  Privacy Policy
                </a>
                {breakpoint === "sm" && (
                  <div className="flex flex-col justify-center items-center gap-4">
                    <a href="#" className={footerSubLink}>
                      &copy; 2026 Get Hyped
                    </a>
                    <a href="https://github.com/3z4z" className={footerSubLink}>
                      &copy; Designed by Md. Salman Ezaz
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ResponsiveWrapper>
    </footer>
  );
}
