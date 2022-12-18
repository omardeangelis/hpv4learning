import { uniqBy } from "lodash"
import {
  GetAllCourseStatsResponse,
  SingleCourseReviewsResponse,
  SingleCourseStatsResponse,
  SingleReview,
  InstructorDataResponse,
  ParsedInstructorDataResponse,
  TaughtCourse,
  VisibleInstructor,
} from "../types"

export const parseSingleCourseStats = (response: SingleCourseStatsResponse) => {
  const courseStats = {
    title: response.title,
    rating: Number(response.rating.toFixed(1)),
    totalSubscribers: response.num_subscribers,
    courseHours: Math.ceil(response.content_length_video / 3600),
    num_lectures: response.num_lectures,
    num_reviews: response.num_reviews,
    id: response.id,
  }

  return courseStats
}

export type SingleParsedCourse = ReturnType<typeof parseSingleCourseStats>

export const parseAllPaidCoursesStats = (
  response: SingleParsedCourse[]
): GetAllCourseStatsResponse => {
  let totalSubscribers = 0
  let totalRating = 0
  let numberOfRating = 0
  let coursesHours = 0
  response.forEach((el) => {
    totalSubscribers += el.totalSubscribers
    totalRating += el.rating
    numberOfRating = el.rating !== 0 ? numberOfRating + 1 : numberOfRating
    coursesHours += el.courseHours
  })
  return {
    totalSubscribers,
    averageRating: Number((totalRating / numberOfRating).toFixed(1)),
    coursesHours,
  }
}

export const parseSingleCourseReviews = (
  response: SingleCourseReviewsResponse
): SingleReview[] => {
  const contentReviews = response.results.filter(
    (el) => el.content !== `` && el.rating >= 4
  )
  return contentReviews.map((el) => ({
    userName: el.user.name,
    rating: el.rating,
    content: el.content,
    id: el.id,
  }))
}

export const parseInstructorData = (
  response: InstructorDataResponse
): ParsedInstructorDataResponse[] => {
  const instructors: VisibleInstructor[] = []
  response.results.forEach((course: TaughtCourse) => {
    course.visible_instructors.forEach((instructor: VisibleInstructor) => {
      instructors.push(instructor)
    })
  })
  const parsedInstructorData = parseUniqueInstructors(response, instructors)
  const uniqueParsedInstructorData = uniqBy(parsedInstructorData, `id`)
  return uniqueParsedInstructorData
}

const parseUniqueInstructors = (
  response: InstructorDataResponse,
  instructors: VisibleInstructor[]
): ParsedInstructorDataResponse[] => {
  const uniqueInstructors: VisibleInstructor[] = Array.from(
    new Set(instructors)
  )
  const parsedUniqueInstructors = uniqueInstructors.map((uniqueInstructor) => {
    let rating = 0
    let counter = 0
    response.results.forEach((course: TaughtCourse) => {
      course.visible_instructors.forEach((inst: VisibleInstructor) => {
        if (inst.title === uniqueInstructor.title && course.rating > 0) {
          rating += course.rating
          counter++
        }
      })
    })
    rating /= counter
    return { id: uniqueInstructor.id, title: uniqueInstructor.title, rating }
  })
  return parsedUniqueInstructors
}
