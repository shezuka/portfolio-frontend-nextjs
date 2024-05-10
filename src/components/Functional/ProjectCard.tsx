"use client";

import { Project } from "@/types";
import { MouseEventHandler } from "react";
import Card from "@/components/Elements/Card";

type ProjectCardProps = {
  project: Project;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function ProjectCard({
  project: { name, description, logoUrl, projectUrl },
}: ProjectCardProps) {
  function onCardClick() {
    window.open(projectUrl, "_blank");
  }

  return (
    <Card
      logo={{ url: logoUrl, alt: `${name} logo`, width: 285, height: 140 }}
      onClick={onCardClick}
    >
      <h3 className="text-xl text-white font-bold mb-2">{name}</h3>
      <p className="text-md text-gray-300">{description}</p>
    </Card>
  );
}
