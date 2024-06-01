"use client";

import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import useScroll from "@/hooks/useScroll";

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuToggle = (props: MobileMenuToggleProps) => {
  const scroll = useScroll();
  const buttonClasses = classNames({
    "pointer-events-none": !props.isOpen && scroll.y > 50,
    "pointer-events-auto": props.isOpen || scroll.y <= 50,
  });

  return (
    <button
      className={`absolute top-[10px] left-[10px] select-none bg-transparent cursor-pointer rounded-[50%] flex justify-center items-center ${buttonClasses}`}
      style={{
        width: "60px",
        height: "60px",
      }}
      onClick={props.onToggle}
    >
      <svg width={24} height={24} viewBox={"0 0 24 24"}>
        <Path
          variants={{
            closed: {
              d: "M 3 3 L 21 3",
              stroke: "hsl(0, 0%, 100%)",
            },
            open: {
              d: "M 5 5 L 19 19",
              stroke: "hsl(0, 0%, 18%)",
            },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          d="M 3 9 L 21 9"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: {
              d: "M 3 15 L 21 15",
              stroke: "hsl(0, 0%, 100%)",
            },
            open: {
              d: "M 5 19 L 19 5",
              stroke: "hsl(0, 0%, 18%)",
            },
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
};

export default MobileMenuToggle;
