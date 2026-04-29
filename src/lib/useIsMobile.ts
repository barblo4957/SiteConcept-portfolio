"use client";

import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 767;

export function useIsMobile() {
  // Default to mobile-safe rendering to avoid animation flash/checkerboarding before hydration settles.
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isMobile;
}
