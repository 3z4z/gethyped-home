import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ResponsiveWrapper({ children }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleZoom = () => {
      const width = window.innerWidth;
      if (width < 1920 && width >= 991) {
        setZoomLevel(width / 1920);
      } else {
        setZoomLevel(1);
      }
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleZoom);
    handleZoom();
  }, []);

  return (
    <div
      style={{
        zoom: zoomLevel,
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
