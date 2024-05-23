"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import usePageTransition from "@/context/PageTransition/usePageTransition";
import { ReactComponentLike } from "prop-types";

const contentVariants = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const loaderVariants = {
  in: { opacity: 0 },
  out: { opacity: 1 },
};

const INITIAL_STATE = "in";

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
        <motion.div
          initial={INITIAL_STATE}
          animate={state}
          variants={loaderVariants}
          transition={transition}
          className={`fixed z-0 select-none pointer-events-none`}
        >
          <LoadingComponent />
        </motion.div>
      ) : null}
      <motion.div
        variants={contentVariants}
        initial={INITIAL_STATE}
        animate={state}
        transition={transition}
      >
        {props.children}
      </motion.div>
    </>
  );
};

export default PageTransitionContent;
