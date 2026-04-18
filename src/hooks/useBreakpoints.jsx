import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [size, setSize] = useState("lg");

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 640) {
        setSize("sm");
      } else if (width >= 640 && width < 992) {
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
