import { container } from "../libs/classNames";
import logo from "../assets/logo.svg";
export default function HeaderSection() {
  const navLinks = ["Expertise", "Work", "About", "Contact"];
  return (
    <header
      className={`${container} absolute top-0 left-0 w-full flex justify-between py-5.5`}
    >
      <figure className="w-1/4">
        <img src={logo} alt="Logo" className="max-h-19" />
      </figure>
      <nav className="w-1/2 flex items-center justify-center gap-6 font-semibold">
        {navLinks.map((l, i) => (
          <a href="#" className="hover:text-primary transition-all" key={i}>
            {l}
          </a>
        ))}
      </nav>
      <div className="w-1/4 flex justify-end">
        <button className="btn btn-secondary">Get Results</button>
      </div>
    </header>
  );
}
