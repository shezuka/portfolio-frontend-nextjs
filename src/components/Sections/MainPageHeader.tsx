import React from "react";
import Image from "next/image";
import ImageLoader from "@/components/Functional/ImageLoader";
import SocialMediaButton from "@/components/Elements/SocialMediaButton";
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ProfileImage from "@public/profile.jpg";
import SkillSetIcons from "@/components/Functional/SkillSetIcons";

interface MainPageHeaderProps {}

const MainPageHeader = (props: MainPageHeaderProps) => {
  return (
    <header className="relative header-gradient min-h-screen flex flex-col justify-center items-center text-center p-5 md:p-10 lg:p-15 xl:p-20 mt-[-3rem]">
      <ImageLoader loaderWrapperClassName="rounded-full">
        <Image
          className="rounded-full w-60 h-auto"
          src={ProfileImage}
          alt={"Profile image"}
        />
      </ImageLoader>
      {/*<ProfilePhoto />*/}
      <div className="my-2">
        <div className="inline-block m-2 mt-0">
          <SocialMediaButton
            href="https://www.linkedin.com/in/dmytro-horbalynskyi-306b45134/"
            icon={faLinkedinIn}
            bgColor="blue-600"
            hoverBgColor="blue-800"
          >
            LinkedIn
          </SocialMediaButton>
        </div>
        <div className="inline-block m-2 mb-0">
          <SocialMediaButton
            href="https://www.facebook.com/profile.php?id=61551777862375"
            icon={faFacebook}
            bgColor="blue-600"
            hoverBgColor="blue-800"
          >
            Facebook
          </SocialMediaButton>
        </div>
      </div>
      <h1 className="text-center text-4xl font-bold text-white mb-2">
        Engineering Impactful Software Experiences
      </h1>
      <p className="text-xl text-gray-200">
        Dima Horbalynskyi | Senior Full-Stack Developer & React Expert
      </p>

      <div className="my-3">
        <SkillSetIcons />
      </div>
    </header>
  );
};

export default MainPageHeader;
