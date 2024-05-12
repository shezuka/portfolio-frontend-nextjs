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

    imageRef.current.onload = () => setLoaded(true);
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
      />
      <div
        className={`bg-gray-500 rounded-full absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center transition-opacity ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Spinner />
      </div>
    </div>
  );
};

export default ProfilePhoto;
