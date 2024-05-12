import { ReactNode } from "react";

export type ChildrenOnlyProps = {
  children: ReactNode;
};

export type Project = {
  name: string;
  description: string;
  logoUrl: string;
  projectUrl: string;
};
