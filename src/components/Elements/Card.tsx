"use client";

import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import Spinner from "@/components/Elements/Spinner";
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
  logo?: CardLogo;
};

const Card = (props: CardProps) => {
  return (
    <div
      className="bg-secondary rounded-lg shadow-lg cursor-pointer hover:bg-primary hover:shadow-xl transition duration-300 select-none"
      onClick={props.onClick}
    >
      {props.logo ? (
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "140px" }}
        >
          <ImageLoader
            containerClassName="w-full h-full"
            loaderWrapperClassName="rounded-tl-lg rounded-tr-lg"
          >
            <img
              src={props.logo.url}
              alt={props.logo.alt}
              className={`w-full h-auto object-cover object-center rounded-tl-lg rounded-tr-lg`}
            />
          </ImageLoader>
        </div>
      ) : null}
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Card;
