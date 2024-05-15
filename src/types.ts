import { ReactNode } from "react";

export type ChildrenOnlyProps = {
  children: ReactNode;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image_id: number;
  project_url: string;
};

export type Skill = {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  skill_category_id: number;
  is_top: boolean;
};

export type Category = {
  id: number;
  created_at: string;
  updated_at: string;
  order: number;
  title: string;
  skills: Skill[];
};
