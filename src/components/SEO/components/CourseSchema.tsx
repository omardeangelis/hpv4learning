import React from "react"
import useBreadcrumbSchema from "../hooks/useBreadcrumbSchema"
import useCourseSchema from "../hooks/useCourseSchema"
import useWebPageSchema from "../hooks/useWebPageSchema"
import { breadCrumbProps, CourseSchemsProps } from "../types"

type Props = CourseSchemsProps & {
  imageAltText: string
  breadcrumbs: breadCrumbProps[]
}

const CourseSchema = ({
  imageAltText,
  breadcrumbs,
  title,
  description,
  image,
  about,
  audienceType,
  creator,
  isAccessibleForFree,
  rating,
  coursePrerequisites,
  recensioniRicevute,
  reviews,
}: Props) => {
  const schema = useWebPageSchema({ title, description, image, imageAltText })

  const breadcrumbSchema = useBreadcrumbSchema(breadcrumbs)
  const courseSchema = useCourseSchema({
    title,
    description,
    image,
    about,
    audienceType,
    creator,
    isAccessibleForFree,
    rating,
    coursePrerequisites,
    recensioniRicevute,
    reviews,
  })

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        ...schema,
        "@graph": [...schema[`@graph`], breadcrumbSchema, courseSchema],
      })}
    </script>
  )
}

export default CourseSchema
