import React from "react";
import useBreadcrumbSchema from "../hooks/useBreadcrumbSchema";
import useWebPageSchema from "../hooks/useWebPageSchema";
import { breadCrumbProps, WebPageType } from "../types";

type Props = {
  breadcrumbs: breadCrumbProps[];
  title?: string;
  description?: string;
  type?: WebPageType;
};

const WebPageSchema = ({ breadcrumbs, title, description, type }: Props) => {
  const schema = useWebPageSchema({ title, description, type });
  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbs);
  return (
    <script type='application/ld+json'>
      {JSON.stringify({
        ...schema,
        ["@graph"]: [...schema["@graph"], breadcrumbSchema],
      })}
    </script>
  );
};

export default WebPageSchema;
