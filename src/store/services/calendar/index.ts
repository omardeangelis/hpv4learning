import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { calendar_v3 } from "googleapis";

type CalendarEventsItems = calendar_v3.Schema$Events["items"];

/**
 * 'https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
 */

export const googleCalendarApi = createApi({
  reducerPath: "calendar",
  baseQuery: fetchBaseQuery(),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllAvailableCalendars: builder.query<
      { id: string; startDate: string; endDate: string }[],
      string | void
    >({
      query: (startDate) =>
        "/api/calendar/get-all-calendars" +
        (startDate ? `?startDate=${startDate}` : ""),
      transformResponse: (data: CalendarEventsItems) => {
        if (data)
          return data.map((item) => ({
            id: item.id,
            startDate: item.start,
            endDate: item.end,
          })) as { id: string; startDate: string; endDate: string }[];
        return [];
      },
      keepUnusedDataFor: 60 * 60 * 24,
    }),

    getAppointmentByMail: builder.query<
      { id: string; startDate: string; endDate: string }[],
      string | void
    >({
      query: (mail) =>
        "/api/calendar/get-appointment-by-mail" + (mail ? `?mail=${mail}` : ""),
      transformResponse: (data: CalendarEventsItems) => {
        if (data)
          return data.map((item) => ({
            id: item.id,
            startDate: item.start,
            endDate: item.end,
          })) as { id: string; startDate: string; endDate: string }[];
        return [];
      },
      keepUnusedDataFor: 60 * 60 * 24,
    }),

    // createNewResource: builder.mutation<
    //   any,
    //   { title: string; body: string; userId: number }
    // >({
    //   query: ({ title, body, userId }) => ({
    //     url: "https://jsonplaceholder.typicode.com/posts",
    //     method: "POST",
    //     body: {
    //       title: title,
    //       body: body,
    //       userId: userId,
    //     },
    //   }),
    // }),
  }),
});

export const {
  useGetAllAvailableCalendarsQuery,
  useGetAppointmentByMailQuery,
  //   useCreateNewResourceMutation,
} = googleCalendarApi;
