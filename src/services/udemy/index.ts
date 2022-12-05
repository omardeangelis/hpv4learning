import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type SingleReview = { userName: string; rating: number; content: string }
type GetAllCourseStatsResponse = {
  totalSubscribers: number
  averageRating: number
  coursesHours: number
}
type GetSingleCourseReviewResponse = {
  title: string
  rating: number
  totalSubscribers: number
  coursehours: number
}

export const udemySlice = createApi({
  reducerPath: "udemy",
  baseQuery: fetchBaseQuery({
    headers: {
      "content-type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllCourseStats: builder.query<GetAllCourseStatsResponse, void>({
      query: () => "/api/udemy/get-all-courses-stats",
      keepUnusedDataFor: 60 * 1000 * 60 * 6,
    }),
    getSingleCourseStatsById: builder.query<
      GetSingleCourseReviewResponse,
      number
    >({
      query: (id) => `/api/udemy/get-single-course-stats-by-id?id=${id}`,
    }),
    getSingleCourseReviewById: builder.query<SingleReview[], number>({
      query: (id) => `/api/udemy/get-review-by-id?id=${id}`,
    }),
    getAllReviews: builder.query<SingleReview[], void>({
      query: () => "/api/udemy/get-all-review",
    }),
  }),
})

export const {
  useGetAllCourseStatsQuery,
  useGetSingleCourseStatsByIdQuery,
  useGetSingleCourseReviewByIdQuery,
  useGetAllReviewsQuery,
} = udemySlice
