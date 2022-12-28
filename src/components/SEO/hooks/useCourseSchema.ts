import React from "react"
import isArray from "lodash/isArray"
import useSeoData from "./useSeoData"
import useHasMounted from "../../../hook/useHasMounted"
import { CourseSchemsProps } from "../types"

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
  recensioniRicevute,
}: CourseSchemsProps) => {
  const {
    site: { siteMetadata },
  } = useSeoData()

  const hasMounted = useHasMounted()
  const pathname = React.useMemo(() => {
    if (hasMounted) return window.location.pathname
  }, [hasMounted])
  const courseCreator = React.useMemo(() => {
    if (isArray(creator))
      return creator.map((el) => ({ "@type": `Person`, name: el }))

    return [{ "@type": `Person`, name: creator }]
  }, [creator])

  const courseJson = React.useMemo(
    () => ({
      "@type": `Course`,
      publisher: {
        "@type": `Organization`,
        "@id": `${siteMetadata.siteUrl}#organization`,
        name: siteMetadata.author,
        sameAs: siteMetadata.siteUrl,
      },
      //   "provider": {
      //     "@type": "Organization",
      //     "name": "John Smilga",
      //     "sameAs": "www.udemy.com/user/janis-smilga-3/",
      //   },
      "@id": `${siteMetadata.siteUrl + pathname}#course`,
      name: title,
      description,
      isAccessibleForFree,
      image,
      inLanguage: `it`,
      audience: {
        "@type": `Audience`,
        audienceType,
      },
      about: { name: about },
      creator: courseCreator,
      aggregateRating: rating
        ? {
            "@type": `AggregateRating`,
            ratingValue: rating,
            ratingCount: recensioniRicevute,
            bestRating: 5,
            worstRating: 1,
          }
        : undefined,
      coursePrerequisites: {
        "@type": `AlignmentObject`,
        alignmentType: coursePrerequisites,
      },
    }),
    [
      about,
      audienceType,
      courseCreator,
      coursePrerequisites,
      description,
      image,
      isAccessibleForFree,
      pathname,
      rating,
      recensioniRicevute,
      siteMetadata.author,
      siteMetadata.siteUrl,
      title,
    ]
  )
  return courseJson
}

export default useCourseSchema
