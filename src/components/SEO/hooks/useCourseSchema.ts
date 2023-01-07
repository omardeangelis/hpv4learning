import React from "react"
import isArray from "lodash/isArray"
import isEmpty from "lodash/isEmpty"
import useSeoData from "./useSeoData"
import useHasMounted from "../../../hook/useHasMounted"
import { CourseSchemsProps, Review } from "../types"

const createReviews = (reviews: readonly Review[]) =>
  reviews.map((review) => ({
    "@type": `Review`,
    author: {
      "@type": `Person`,
      name: review.userName,
    },
    reviewBody: review.content,
    reviewRating: {
      "@type": `Rating`,
      bestRating: `5`,
      ratingValue: review.rating,
      worstRating: `1`,
    },
  }))

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
  reviews,
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

  const hasReview = reviews && !isEmpty(reviews)

  const courseJson = React.useMemo(
    () => ({
      "@type": `Course`,
      publisher: {
        "@type": `Organization`,
        "@id": `${siteMetadata.siteUrl}#organization`,
        name: siteMetadata.author,
        sameAs: siteMetadata.siteUrl,
      },
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
      review: hasReview ? createReviews(reviews) : undefined,
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
      reviews,
      hasReview,
    ]
  )
  return courseJson
}

export default useCourseSchema
