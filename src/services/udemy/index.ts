import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetAllCourseStatsResponse, GetSingleCourseStatsResponse, SingleReview } from "../../server/udemy/types"

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
      GetSingleCourseStatsResponse,
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
