import ProjectCard from "@/components/Functional/ProjectCard";
import { Project } from "@/types";
import axios from "@/lib/axios";
import { unstable_noStore } from "next/cache";

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
  unstable_noStore();
  const projects = await getProjectsData();
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
};

export default Projects;
