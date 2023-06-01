import { useState, useLayoutEffect } from "react";
import { BREAKPOINTS } from "./constants";

function getScreenSizes(innerWidth: number) {
  return {
    xs: innerWidth < BREAKPOINTS.SM,
    sm: innerWidth >= BREAKPOINTS.SM && innerWidth < BREAKPOINTS.MD,
    md: innerWidth >= BREAKPOINTS.MD && innerWidth < BREAKPOINTS.LG,
    lg: innerWidth >= BREAKPOINTS.LG && innerWidth < BREAKPOINTS.XL,
    xl: innerWidth >= BREAKPOINTS.XL && innerWidth < BREAKPOINTS.XXL,
    xxl: innerWidth >= BREAKPOINTS.XXL
  };
}

export const useGetScreenBreakpoints = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [screenSizes, setScreenSizes] = useState(() =>
    getScreenSizes(innerWidth)
  );

  useLayoutEffect(() => {
    let timeoutId: any = null;

    const debouncedHandleResize = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 64 milliseconds
      timeoutId = setTimeout(() => setInnerWidth(window.innerWidth), 64);
    };

    setScreenSizes(getScreenSizes(innerWidth));

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, [innerWidth]);

  return screenSizes;
};
