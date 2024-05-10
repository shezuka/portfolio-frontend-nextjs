import { ProjectType } from "@/types";
import { MouseEventHandler } from "react";
import Image from "next/image";

type ProjectCardPropsType = {
  project: ProjectType;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function ProjectCard({
  project: { name, description, logo_url },
  onClick,
}: ProjectCardPropsType) {
  return (
    <div
      className="bg-secondary rounded-lg shadow-lg cursor-pointer hover:bg-primary hover:shadow-xl transition duration-300 select-none"
      onClick={onClick}
    >
      <div className="w-full overflow-hidden" style={{ height: "140px" }}>
        <Image
          width={285}
          height={140}
          src={logo_url}
          alt={`${name} logo`}
          className="w-full h-full object-cover object-center rounded-tl-lg rounded-tr-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl text-white font-bold mb-2">{name}</h3>
        <p className="text-md text-gray-300">{description}</p>
      </div>
    </div>
  );
}
