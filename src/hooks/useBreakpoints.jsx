import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [size, setSize] = useState("lg");

  useEffect(() => {
    function handleResize() {
      if (
        window.matchMedia("(max-width: 767px)").matches ||
        (window.innerWidth <= 576 && window.innerWidth > 768)
      ) {
        setSize("sm");
      } else if (
        window.matchMedia("(max-width: 991px)").matches ||
        (window.innerWidth <= 768 && window.innerWidth > 991)
      ) {
        setSize("md");
      } else {
        setSize("lg");
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
