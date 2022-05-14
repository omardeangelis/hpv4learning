import React from "react";
import useSeoData from "./useSeoData";
import useHasMounted from "../../../hook/useHasMounted";
import { isArray } from "lodash";
import { CourseSchemsProps } from "../types";

const useCourseSchema = ({
  title,
  description,
  image,
  isAccessibleForFree,
  audienceType,
  about,
  creator,
  rating,
  coursePrerequisites,
}: CourseSchemsProps) => {
  const {
    site: { siteMetadata },
  } = useSeoData();

  const hasMounted = useHasMounted();
  const pathname = React.useMemo(() => {
    if (hasMounted) return window.location.pathname;
  }, [hasMounted]);
  const courseCreator = React.useMemo(() => {
    if (isArray(creator))
      return creator.map((el) => ({ "@type": "Person", "name": el }));

    return [{ "@type": "Person", "name": creator }];
  }, [creator]);

  const courseJson = React.useMemo(() => {
    return {
      "@type": "Course",
      "publisher": {
        "@type": "Organization",
        "@id": siteMetadata.siteUrl + "#organization",
        "name": siteMetadata.author,
        "sameAs": siteMetadata.siteUrl,
      },
      //   "provider": {
      //     "@type": "Organization",
      //     "name": "John Smilga",
      //     "sameAs": "www.udemy.com/user/janis-smilga-3/",
      //   },
      "@id": siteMetadata.siteUrl + pathname + "#course",
      "name": title,
      "description": description,
      "isAccessibleForFree": isAccessibleForFree,
      "image": image,
      "inLanguage": "it",
      "audience": {
        "@type": "Audience",
        "audienceType": audienceType,
      },
      "about": { "name": about },
      "creator": courseCreator,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "bestRating": 5,
        "worstRating": 1,
      },
      "coursePrerequisites": {
        "@type": "AlignmentObject",
        "alignmentType": coursePrerequisites,
      },
    };
  }, []);
  return courseJson;
};

export default useCourseSchema;
