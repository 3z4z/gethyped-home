import useToggle from "../../hooks/useToggle";

export default function Hamburger() {
  const { isOpen, toggle } = useToggle();
  return (
    <button
      onClick={toggle}
      className="relative w-8 h-8 flex flex-col justify-between items-center"
    >
      <span
        className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out
        ${isOpen ? "rotate-45 translate-y-3" : ""}`}
      />
      <span
        className={`block h-0.5 w-full bg-black transition duration-300 ease-in-out
        ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        className={`block h-0.5 w-full bg-black transform transition duration-300 ease-in-out
        ${isOpen ? "-rotate-45 -translate-y-3" : ""}`}
      />
    </button>
  );
}
