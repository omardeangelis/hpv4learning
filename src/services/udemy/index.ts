import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const udemySlice = createApi({
  reducerPath: "udemy",
  baseQuery: fetchBaseQuery({
    headers: {
      "content-type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    getAllCourseStats: builder.query<
      { totalSubscribers: number; totalRating: number; coursesHours: number },
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
  }),
});

export const { useGetAllCourseStatsQuery, useGetSingleCourseStatsByIdQuery } =
  udemySlice;
