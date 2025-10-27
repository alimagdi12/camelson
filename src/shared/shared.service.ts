import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook that checks if the current pathname includes
 * any of the given paths.
 * @param paths - Array of path substrings to check against.
 * @returns boolean
 */
export const useCheckIfPathIncludes = (paths: string[] = []): boolean => {
  const location = useLocation();
  return paths.some((path) => location.pathname.includes(path));
};

/**
 * Custom hook that tracks window width and determines if user is on mobile.
 * @param mobileBreakpoint - Width threshold to consider as mobile (default: 768px)
 * @returns Object { width, isMobile }
 */
export const usePageWidth = (mobileBreakpoint: number = 1000) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= mobileBreakpoint;

  return { width, isMobile };
};
