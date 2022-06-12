import React from "react";
import { IconTypeProps } from "../../../types";

type Props = {
  text: string;
  link: null | string;
  icon: IconTypeProps;
};

export const useNavigationLink = () => {
  const links: Props[] = React.useMemo(
    () => [
      {
        text: "Home",
        link: "/",
        icon: "home",
      },
      {
        text: "Corsi",
        link: null,
        icon: "dropdown",
      },

      {
        text: "Chi siamo",
        link: "/about/",
        icon: "about",
      },
      {
        text: "Progetti",
        link: "/",
        icon: "project",
      },
    ],
    []
  );

  return links;
};
