import RollingButton from "../ui/rolling-button/RollingButton";

export default function NavbarComponent() {
  const navLinks = ["Expertises", "Work", "About", "Contact"];

  return (
    <div className="w-full flex items-center justify-center mid">
      <nav className="flex max-lg:flex-col max-lg:items-center gap-2 font-semibold w-max lg:bg-white p-1.5 rounded-2xl">
        {navLinks.map((l, i) => (
          <RollingButton key={i} text={l} bgColor={"bg-white"} />
        ))}
      </nav>
    </div>
  );
}
