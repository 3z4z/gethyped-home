/* eslint-disable no-unused-vars */
import { container, footerSubLink } from "../../libs/classNames";
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
  return (
    <footer className={`${container} min-h-screen flex flex-col relative`}>
      <MousePopSection>
        <div className="border-t border-t-base-content/25 lg:px-10 md:px-8 sm:px-6 px-4 h-full flex flex-col grow items-center justify-center">
          <div className="h-full flex flex-col justify-center items-center lg:px-10 md:px-8 sm:px-6 px-4">
            <div className="grow flex flex-col gap-12">
              <h2 className="text-9xl font-semibold">Let's Get Hyped!</h2>
              <div className="flex items-center justify-center gap-6">
                {footerBodyLinks.map((l, i) => (
                  <SkewButton
                    key={i}
                    icon={<l.icon className="p-1.5" />}
                    title={l.text}
                    style={i === 0 ? "baseOutline" : "primary"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </MousePopSection>
      {/* footer bottom */}
      <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 bg-base-200 text-justify w-[calc(100%-2.5rem)]">
        <div className="absolute w-full bottom-0 left-0 z-1 text-base-200">
          <FooterCurve />
        </div>
        <motion.figure
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute bottom-72 right-12 size-36 z-3"
        >
          <img src={ghSticker} alt="" className="size-full" />
        </motion.figure>
        <div className="flex justify-between w-full relative">
          <figure className="h-36 w-auto absolute bottom-2 left-2 z-2">
            <img src={logo} alt="brand logo" className="h-full" />
          </figure>
          <div className="absolute flex items-end justify-end right-2 bottom-2 gap-24 px-2 pb-8 z-2">
            <div className="flex flex-col gap-8">
              <div className="flex gap-3 justify-center items-center">
                {footLinks.map((l, i) => (
                  <RollingButton key={i} text={l} bgColor={"bg-white"} />
                ))}
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-xl font-bold">Follow Us</span>
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
              <div className="flex justify-between">
                <a href="#" className={footerSubLink}>
                  &copy; 2026 Get Hyped
                </a>
                <a href="https://github.com/3z4z" className={footerSubLink}>
                  &copy; Designed by Md. Salman Ezaz
                </a>
              </div>
            </div>
            <div className="flex gap-4 flex-col">
              {contacts.map((c, i) => (
                <div key={i}>
                  <h5 className="font-bold text-xl mb-2">{c.label}</h5>
                  <div className="flex flex-col gap-1">
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
              <a href="#" className={footerSubLink}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
