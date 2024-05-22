"use client";

import { Project } from "@/types";
import { MouseEventHandler } from "react";
import Card from "@/components/Elements/Card";
import { getImageUrl } from "@/lib/hostname";

type ProjectCardProps = {
  project: Project;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const ProjectCard = ({
  project: { id, title, description, image_id, project_url },
}: ProjectCardProps) => {
  const onCardClick = () => {
    window.open(project_url, "_blank");
  };

  return (
    <Card
      logo={{
        url: getImageUrl(image_id),
        alt: `${title} logo`,
        width: 285,
        height: 140,
      }}
      onClick={onCardClick}
    >
      <h3 className="text-xl text-white font-bold mb-2">{title}</h3>
      <p className="text-md text-gray-300">{description}</p>
    </Card>
  );
};

export default ProjectCard;
