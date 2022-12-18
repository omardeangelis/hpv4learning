import { COURSES_IDS } from "../constants"
import {
  parseAllPaidCoursesStats,
  parseSingleCourseReviews,
  parseSingleCourseStats,
  parseInstructorData,
} from "./parsers"
import {
  GetAllCourseStatsResponse,
  GetSingleCourseStatsResponse,
  ResponseError,
  SingleCourseReviewsResponse,
  SingleCourseStatsResponse,
  SingleReview,
  InstructorDataResponse,
  ParsedInstructorDataResponse,
} from "./types"
import { udemyFetch } from "./utils"

export * from "./api/getAllPaidCourses"

export const getSingleCourseStatsById = async (
  id: number
): Promise<GetSingleCourseStatsResponse | ResponseError> => {
  try {
    const res = await udemyFetch(
      `https://www.udemy.com/api-2.0/courses/${id}/?page=1&page_size=32&ordering=-create&skip_caching=true&fields[course]=title,num_subscribers,num_subscribers_recent,rating,content_length_video,num_lectures,num_reviews`
    )
    const response = (await res.json()) as SingleCourseStatsResponse
    return parseSingleCourseStats(response)
  } catch (error) {
    return {
      error,
      message: `Please, control if the course ID exist or it's passed correctly!`,
    }
  }
}

export const getAllPaidAggregateCoursesStats = async (): Promise<
  GetAllCourseStatsResponse | ResponseError
> => {
  try {
    const promisesArray = COURSES_IDS.map((id) => getSingleCourseStatsById(id))
    const res = (await Promise.all(
      promisesArray
    )) as SingleCourseStatsResponse[]
    return parseAllPaidCoursesStats(res)
  } catch (error) {
    return { error }
  }
}

export const getSingleCourseReviewsById = async (
  id: number
): Promise<SingleReview[] | ResponseError> => {
  try {
    const res = await udemyFetch(
      `https://www.udemy.com/api-2.0/courses/${id}/reviews/?page=1&page_size=100`
    )
    const response = (await res.json()) as SingleCourseReviewsResponse
    return parseSingleCourseReviews(response)
  } catch (error) {
    return {
      error,
      message: `Please, control if the course ID exist or it's passed correctly!`,
    }
  }
}

export const getAllReview = async (): Promise<
  SingleReview[] | ResponseError
> => {
  try {
    const promisesArray = COURSES_IDS.map((id) =>
      getSingleCourseReviewsById(id)
    )
    const res = (await Promise.all(promisesArray)) as SingleReview[][]
    const allReviews: SingleReview[] = res.flat(1)
    return allReviews
  } catch (error) {
    return { error }
  }
}

export const getInstructorsData = async (): Promise<
  ParsedInstructorDataResponse[] | ResponseError
> => {
  try {
    const res = await udemyFetch(
      `https://www.udemy.com/instructor-api/v1/taught-courses/courses/?fields[course]=visible_instructors,rating`
    )
    const response = (await res.json()) as InstructorDataResponse
    const parsedResponse: ParsedInstructorDataResponse[] =
      parseInstructorData(response)
    return parsedResponse
  } catch (error) {
    return { error }
  }
}
