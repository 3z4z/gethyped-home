export default function Hamburger({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className={`cursor-pointer relative size-12 rounded-lg flex items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? "bg-base-100" : "bg-secondary"}`}
    >
      {/* Top bar */}
      <span
        className={`absolute h-0.5 w-6 transition-all duration-300 ease-in-out
        ${isOpen ? "rotate-45 bg-base-content" : "-translate-y-2 bg-base-100"}`}
      />

      {/* Bottom bar */}
      <span
        className={`absolute h-0.5 w-6 bg-base-100 transition-all duration-300 ease-in-out
        ${isOpen ? "-rotate-45 bg-base-content" : "translate-y-2 bg-base-100"}`}
      />
    </button>
  );
}
