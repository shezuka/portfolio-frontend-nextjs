"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import usePageTransition from "@/context/PageTransition/usePageTransition";
import { ReactComponentLike } from "prop-types";

const variants = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};

interface PageTransitionContentProps {
  children: ReactNode;
  loadingComponent?: ReactComponentLike;
}

const PageTransitionContent = (props: PageTransitionContentProps) => {
  const { state, transitionDuration } = usePageTransition();

  const transition = {
    duration: transitionDuration,
  };

  const LoadingComponent = props.loadingComponent;
  return (
    <>
      {LoadingComponent ? (
        <div
          className={`fixed z-0 select-none pointer-events-none transition-opacity duration-300 opacity-${state === "out" ? 1 : 0}`}
        >
          <LoadingComponent />
        </div>
      ) : null}
      <motion.div
        variants={variants}
        initial="in"
        animate={state}
        transition={transition}
      >
        {props.children}
      </motion.div>
    </>
  );
};

export default PageTransitionContent;
