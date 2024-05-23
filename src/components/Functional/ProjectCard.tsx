"use client";

import { Project } from "@/types";
import { MouseEventHandler, ReactNode } from "react";
import Card from "@/components/Elements/Card";
import { getImageUrl } from "@/lib/hostname";
import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const linksContainerMotionVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const descriptionVariants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: 1,
  },
};

const linkVariants = {
  offscreen: {
    rotateY: 60,
    scale: 0,
    x: 60,
  },
  onscreen: {
    rotateY: 0,
    scale: 1,
    x: 0,
  },
};

interface ProjectLinkProps {
  href: string;
  children?: ReactNode;
  icon?: IconDefinition;
}

const ProjectLink = (props: ProjectLinkProps) => {
  return (
    <motion.a
      href={props.href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-2 decoration-0 hover:decoration-2 unreline-none hover:underline underline-offset-4"
      variants={linkVariants}
    >
      {props.icon && <FontAwesomeIcon icon={props.icon} />}
      {props.children}
    </motion.a>
  );
};

type ProjectCardProps = {
  project: Project;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const ProjectCard = ({
  project: {
    id,
    title,
    description,
    image_id,
    project_url,
    frontend_github_url,
    backend_github_url,
  },
}: ProjectCardProps) => {
  return (
    <Card
      title={title}
      logo={{
        url: getImageUrl(image_id),
        alt: `${title} logo`,
        width: 285,
        height: 140,
      }}
    >
      <motion.div
        className="p-4"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={linksContainerMotionVariants}
      >
        <motion.div
          variants={descriptionVariants}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="py-4 pb-0 flex flex-col gap-2">
          {project_url && (
            <ProjectLink icon={faArrowUpRightFromSquare} href={project_url}>
              Visit project
            </ProjectLink>
          )}
          {frontend_github_url && (
            <ProjectLink icon={faGithub} href={frontend_github_url}>
              Frontend Code
            </ProjectLink>
          )}
          {backend_github_url && (
            <ProjectLink icon={faGithub} href={backend_github_url}>
              Backend Code
            </ProjectLink>
          )}
        </div>
      </motion.div>
    </Card>
  );
};

export default ProjectCard;
