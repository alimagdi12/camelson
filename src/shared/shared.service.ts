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
