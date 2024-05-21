"use client";

import { useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const targetElement = window;

    const handleScroll = () => {
      setScroll({
        x: targetElement.scrollX,
        y: targetElement.scrollY,
      });
    };

    handleScroll();
    targetElement.addEventListener("scroll", handleScroll);

    return () => {
      targetElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};

export default useScroll;
