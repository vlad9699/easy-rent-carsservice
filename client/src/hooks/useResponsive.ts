import { useEffect, useState } from "react";

export const mediaQueries = {
  xs: 576,
  sm: 768,
  lg: 1250,
  md: 920,
};

export const useResponsive = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= mediaQueries.xs;
  const isTablet = width <= mediaQueries.sm;
  const isLarge = width <= mediaQueries.lg;
  const isLargeTablet = width <= mediaQueries.md;

  return {
    isMobile,
    isTablet,
    isLarge,
    isLargeTablet,
  };
};