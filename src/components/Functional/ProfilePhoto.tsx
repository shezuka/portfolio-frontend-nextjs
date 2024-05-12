"use client";

import Image from "next/image";
import Spinner from "@/components/Elements/Spinner";
import { useEffect, useRef, useState } from "react";

const ProfilePhoto = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!imageRef.current) {
      setLoaded(true);
      return;
    }

    if (imageRef.current.complete) {
      setLoaded(true);
    } else {
      imageRef.current.onload = () => {
        setLoaded(true);
      };
    }
  }, []);

  return (
    <div className="relative rounded-full">
      <Image
        ref={imageRef}
        className="rounded-full"
        src={"/profile.jpg"}
        width={200}
        height={200}
        alt={"Profile image"}
        priority
      />
      <div
        className={`bg-gray-500 rounded-full absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center transition-opacity duration-200 ${loaded ? "opacity-0" : "opacity-100"}`}
      >
        <Spinner />
      </div>
    </div>
  );
};

export default ProfilePhoto;
