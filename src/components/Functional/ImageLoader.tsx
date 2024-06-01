"use client";

import { cloneElement, ReactElement, useEffect, useRef, useState } from "react";
import Spinner from "@/components/Elements/Spinner";

type ImageLoaderProps = {
  containerClassName?: string;
  loaderWrapperClassName?: string;
  children: ReactElement;
};

const ImageLoader = (props: ImageLoaderProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState(true);

  const child = cloneElement(props.children, { ref: imageRef });

  useEffect(() => {
    if (!imageRef.current) {
      console.error(new Error("no imageRef was initialized"));
      setLoading(false);
      return;
    }

    if (imageRef.current.complete) {
      setLoading(false);
    } else {
      imageRef.current.onload = () => {
        setLoading(false);
      };
    }
  }, []);

  return (
    <div
      className={`relative${props.containerClassName ? ` ${props.containerClassName}` : ""}`}
    >
      {child}
      <div
        className={`flex bg-gray-300 justify-center items-center absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-200 opacity-${loading ? "1" : "0"}${props.loaderWrapperClassName ? ` ${props.loaderWrapperClassName}` : ""}`}
      >
        <Spinner />
      </div>
    </div>
  );
};

export default ImageLoader;
