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
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    if (!imageRef.current) {
      setImageLoading(false);
      return;
    }

    if (imageRef.current.complete) {
      setImageLoading(false);
    } else {
      setImageLoading(true);
      imageRef.current.onload = () => {
        setImageLoading(false);
      };
    }
  }, [props.logo]);

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
              ref={imageRef}
              src={props.logo.url}
              alt={props.logo.alt}
              className={`w-full h-auto object-cover object-center rounded-tl-lg rounded-tr-lg`}
            />
          </ImageLoader>
          <div
            className={`flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 rounded-tl-lg rounded-tr-lg bg-gray-200 pointer-events-none transition-opacity duration-300 ${imageLoading ? "opacity-1" : "opacity-0"}`}
          >
            <Spinner />
          </div>
        </div>
      ) : null}
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Card;
