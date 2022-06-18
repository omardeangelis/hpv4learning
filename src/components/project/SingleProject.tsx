import React from "react";
import { ProjectBox, ProjectCard } from "../layout";
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
