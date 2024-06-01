"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const iconSetVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const iconVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    x: 50,
  },
  animate: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15,
    },
  },
};

interface IconSetProps {
  svgIcons: any[];
}

const IconSet = (props: IconSetProps) => {
  return (
    <motion.div
      className="flex flex-row flex-wrap gap-1 items-center justify-center"
      variants={iconSetVariants}
      initial="initial"
      animate="animate"
      viewport={{ once: true, amount: 0.8 }}
    >
      {props.svgIcons.map((icon, index2) => (
        <motion.div
          key={index2}
          className="p-2 transition duration-150 rounded-md backdrop-blur-sm bg-opacity-10 bg-gray-200 hover:bg-opacity-50 hover:bg-gray-400"
          variants={iconVariants}
        >
          <Image src={icon} width={40} height={40} alt={`Skill icon`} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IconSet;
