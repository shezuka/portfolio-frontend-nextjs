import ProjectCard from "@/components/Functional/ProjectCard";
import { Project } from "@/types";
import axios from "@/lib/axios";

export const dynamic = "force-dynamic";

const getProjectsData = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`projects`);
    if (response.status !== 200) {
      throw new Error("failed to fetch projects");
    }
    return response.data as Project[];
  } catch (error) {
    console.error(error);
    return [] as Project[];
  }
};

const Projects = async () => {
  const projects = await getProjectsData();
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
};

export default Projects;
