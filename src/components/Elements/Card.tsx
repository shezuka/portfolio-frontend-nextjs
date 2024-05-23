"use client";

import { MouseEventHandler, ReactNode } from "react";
import { motion } from "framer-motion";
import ImageLoader from "@/components/Functional/ImageLoader";

type CardLogo = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type CardProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  title?: string;
  logo?: CardLogo;
};

const rootVariants = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
  },
};

const innerVariants = {
  initial: {
    boxShadow: "0 0 40px rgba(127, 177, 233, 0)",
  },
  hover: {
    boxShadow: "0 0 40px rgba(107, 157, 213, 1)",
  },
};

const Card = (props: CardProps) => {
  return (
    <motion.div
      variants={rootVariants}
      viewport={{ once: true, amount: 0.8 }}
      initial="offscreen"
      whileInView="onscreen"
      className="first:mt-0 mt-6"
    >
      <motion.div
        variants={innerVariants}
        whileHover="hover"
        transition={{ delay: 0, duration: 0.1 }}
        className="bg-gray-800 rounded-lg cursor-pointer select-none transition duration-300 border-2 border-gray-600 hover:border-blue-300 scale-100 hover:scale-105"
        onClick={props.onClick}
      >
        {props.logo ? (
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "140px" }}
          >
            <ImageLoader
              containerClassName="relative w-full h-full  rounded-tl-md rounded-tr-md overflow-hidden"
              loaderWrapperClassName="rounded-tl-lg rounded-tr-lg"
            >
              <img
                src={props.logo.url}
                alt={props.logo.alt}
                className={`absolute w-full h-auto top-[50%] left-0 transform -translate-y-1/2`}
              />
            </ImageLoader>
          </div>
        ) : null}
        {props.title ? (
          <h3 className="p-4 pb-0 text-lg font-bold text-gray-100">
            {props.title}
          </h3>
        ) : null}
        <div className="p-4">{props.children}</div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
