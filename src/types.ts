import React from "react";

export type ChildrenOnlyProps = {
  children: React.ReactNode;
};

export type Project = {
  name: string;
  description: string;
  logoUrl: string;
  projectUrl: string;
};
