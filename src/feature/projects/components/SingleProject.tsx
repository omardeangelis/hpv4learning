import React from "react";
import { ProjectCard, ProjectBox } from "./ProjectCard";
export const SingleProject = ({
  isMobileOnly,
  children,
  ...rest
}: ProjectBox) => {
  return (
    <ProjectCard isMobileOnly={isMobileOnly} {...rest}>
      {children}
    </ProjectCard>
  );
};
