import React from "react";
import { Helmet } from "react-helmet";
import useBreadcrumbSchema from "../hooks/useBreadcrumbSchema";
import useWebPageSchema from "../hooks/useWebPageSchema";
import { breadCrumbProps } from "../types";

type Props = {
  breadcrumbs: breadCrumbProps[];
  title?: string;
  description?: string;
};

const WebPageSchema = ({ breadcrumbs, title, description }: Props) => {
  const schema = useWebPageSchema({ title, description });
  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbs);
  return (
    <Helmet>
      <script type='application/ld+json'>
        {JSON.stringify({
          ...schema,
          ["@graph"]: [...schema["@graph"], breadcrumbSchema],
        })}
      </script>{" "}
    </Helmet>
  );
};

export default WebPageSchema;
