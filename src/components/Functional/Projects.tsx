import ProjectCard from "@/components/Functional/ProjectCard";
import { Project } from "@/types";
import axios from "@/lib/axios";

const getProjectsData = async (): Promise<Project[]> => {
  return axios.get(`/projects`).then((response) => response.data);
};

export const dynamic = "force-dynamic";

const Projects = async () => {
  const projects = await getProjectsData();

  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
};

export default Projects;
