import { container, footerSubLink } from "../../libs/classNames";
import FooterCurve from "../ui/icons/FooterCurve";
import logo from "../../assets/logo.svg";
import RollingButton from "../ui/rolling-button/RollingButton";
import { FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";

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
export default function FooterSection() {
  return (
    <footer className={`${container} min-h-screen flex flex-col relative`}>
      <div className="border-t border-t-base-content/25 px-10 h-full flex flex-col grow items-center justify-center">
        <div className="h-full flex flex-col justify-center items-center px-10">
          <div className="grow">
            <h2 className="text-9xl font-semibold">Get Hyped</h2>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2 bg-base-200 text-justify w-[calc(100%-2.5rem)]">
        <div className="absolute w-full bottom-0 left-0 -z-1 text-base-200">
          <FooterCurve />
        </div>
        <div className="flex justify-between w-full relative">
          <figure className="h-36 w-auto absolute bottom-2 left-2">
            <img src={logo} alt="brand logo" className="h-full" />
          </figure>
          <div className="absolute flex items-end justify-end right-2 bottom-2 gap-24 px-2 pb-8">
            <div className="flex flex-col gap-8">
              <div className="flex gap-3 justify-center items-center">
                {footLinks.map((l, i) => (
                  <RollingButton key={i} text={l} />
                ))}
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-xl font-bold">Follow Us</span>
                <div className="flex gap-3 items-center">
                  {socialLinks.map((l, i) => (
                    <a
                      href={l.link}
                      key={i}
                      className="size-12 rounded-full flex items-center justify-center text-xl group hover:text-primary bg-white"
                    >
                      <l.icon className="transition group-hover:scale-110" />
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
