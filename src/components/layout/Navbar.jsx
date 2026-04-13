import RollingButton from "../ui/rolling-button/RollingButton";

export default function NavbarComponent() {
  const navLinks = ["Expertises", "Work", "About", "Contact"];

  return (
    <div className="w-1/2 flex items-center justify-center mid">
      <nav className="flex gap-2 font-semibold w-max bg-white p-1.5 rounded-2xl">
        {navLinks.map((l, i) => (
          <RollingButton key={i} text={l} />
        ))}
      </nav>
    </div>
  );
}
