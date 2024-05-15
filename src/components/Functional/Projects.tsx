"use client";

import ProjectCard from "@/components/Functional/ProjectCard";
import { Project } from "@/types";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

const getProjectsData = async (): Promise<Project[]> => {
  return axios.get(`/projects`).then((response) => response.data);
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjectsData().then(setProjects);
  }, []);

  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
};

export default Projects;
