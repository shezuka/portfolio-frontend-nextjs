"use client";

import { useContext } from "react";
import PageTransitionContext from "@/context/PageTransition/PageTransitionContext";

const usePageTransition = () => {
  return useContext(PageTransitionContext);
};

export default usePageTransition;
