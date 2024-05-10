import React, { MouseEventHandler } from "react";
import Image from "next/image";

type CardLogoType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type CardPropsType = {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  logo?: CardLogoType;
};

export default function Card(props: CardPropsType) {
  return (
    <div
      className="bg-secondary rounded-lg shadow-lg cursor-pointer hover:bg-primary hover:shadow-xl transition duration-300 select-none"
      onClick={props.onClick}
    >
      {props.logo ? (
        <div className="w-full overflow-hidden" style={{ height: "140px" }}>
          <Image
            width={props.logo.width}
            height={props.logo.height}
            src={props.logo.url}
            alt={props.logo.alt}
            className="w-full h-full object-cover object-center rounded-tl-lg rounded-tr-lg"
          />
        </div>
      ) : null}
      <div className="p-4">{props.children}</div>
    </div>
  );
}
