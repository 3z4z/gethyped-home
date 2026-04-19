import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ResponsiveWrapper({ children, className, max, min }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleZoom = () => {
      const width = window.innerWidth;
      if (max && min && width < max && width >= min) {
        setZoomLevel(width / max);
      } else if (width < 1920 && width >= 992) {
        setZoomLevel(width / 1920);
      } else if (width < 480) {
        setZoomLevel(width / 480);
      } else {
        setZoomLevel(1);
      }
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleZoom);
    handleZoom();
  }, [max, min]);

  return (
    <div
      style={{
        zoom: zoomLevel,
        width: "100%",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
