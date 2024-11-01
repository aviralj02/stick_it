"use client";

import { useState, useEffect } from "react";

interface ScreenDimensions {
  width: number;
  height: number;
}

const useMediaScreen = (): ScreenDimensions => {
  const [dimensions, setDimensions] = useState<ScreenDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

export default useMediaScreen;
