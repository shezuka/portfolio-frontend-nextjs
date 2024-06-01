"use client";

import React, { ReactNode } from "react";

interface AnimatedLineProps {
  reverse?: boolean;
}

const Line = (props: AnimatedLineProps) => {
  return (
    <div
      className="relative flex-1"
      style={{ direction: props.reverse ? "rtl" : "ltr" }}
    >
      <div
        className="w-full bg-blue-300 rounded-full"
        style={{
          minHeight: "3px",
          boxShadow: "0 0 20px rgba(107, 157, 213, 1)",
        }}
      />
    </div>
  );
};

interface HighlightedTitleProps {
  children: ReactNode;
}

const HighlightedTitle = (props: HighlightedTitleProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Line reverse />
      {props.children}
      <Line />
    </div>
  );
};

export default HighlightedTitle;
