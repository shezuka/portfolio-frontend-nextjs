import { ReactNode } from "react";

export interface ChildrenOnlyProps {
  children: ReactNode;
}

interface RecordBase {
  id: number;
  created_at: string;
  updated_at: string;
}

export interface Project extends RecordBase {
  title: string;
  description: string;
  image_id: number;
  project_url?: string;
  frontend_github_url?: string;
  backend_github_url?: string;
}

export interface Skill extends RecordBase {
  title: string;
  skill_category_id: number;
  is_top: boolean;
}

export interface Category extends RecordBase {
  order: number;
  title: string;
  skills: Skill[];
}

export interface Message extends RecordBase {
  name: string;
  email: string;
  message: string;
}
