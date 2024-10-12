import { useState, useEffect } from "react";

type Device = "sm" | "md" | "lg" | "xl" | "2xl";

const mediaQueries: Record<Device, string> = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

export default function useMediaQuery(device: Device, initialValue = false) {
  const [matches, setMatches] = useState(initialValue);

  useEffect(() => {
    const query = mediaQueries[device];

    if (!query) {
      console.error(`Invalid device name: ${device}`);
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    const handleResize = () => setMatches(mediaQueryList.matches);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [device, initialValue]);

  return !matches;
}
