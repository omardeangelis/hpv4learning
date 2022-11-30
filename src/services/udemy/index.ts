import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UDEMY_TOKEN } from "../../server/constants";

type SingleReview = { userName: string; rating: number; content: string };

export const udemySlice = createApi({
  reducerPath: "udemy",
  baseQuery: fetchBaseQuery({
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Authorization": `Bearer ${UDEMY_TOKEN}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }),
  endpoints: (builder) => ({
    getAllCourseStats: builder.query<
      { totalSubscribers: number; averageRating: number; coursesHours: number },
      void
    >({
      query: () => "/api/udemy/get-all-courses-stats",
    }),
    getSingleCourseStatsById: builder.query<
      {
        title: string;
        rating: number;
        totalSubscribers: number;
        coursehours: number;
      },
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
});

export const {
  useGetAllCourseStatsQuery,
  useGetSingleCourseStatsByIdQuery,
  useGetSingleCourseReviewByIdQuery,
  useGetAllReviewsQuery,
} = udemySlice;
