import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { calendar_v3 } from "googleapis";

type CalendarEventsItems = calendar_v3.Schema$Events["items"];
type CalendarBookedResponse = Pick<
  calendar_v3.Schema$Event,
  "start" | "hangoutLink"
> & { mailSanded: boolean };
type CalendarBookRequestProps = {
  email: string;
  eventId: string;
  nome?: string;
  cognome?: string;
  professione?: string;
  description?: string;
  shouldSendMail?: boolean;
};

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
      query: (mail) => `/api/calendar/get-appointment-by-mail?email=${mail}`,
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
    bookAppointment: builder.mutation<
      CalendarBookedResponse,
      CalendarBookRequestProps
    >({
      query: (props) => ({
        method: "PUT",
        url: `/api/calendar/get-appointment-by-mail?eventId=${props.eventId}`,
        body: JSON.stringify({
          ...props,
        }),
      }),
    }),
    deleteAppointment: builder.mutation<boolean, string>({
      query: (eventId) => ({
        url: `/api/calendar/get-appointment-by-mail?eventId=${eventId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllAvailableCalendarsQuery,
  useGetAppointmentByMailQuery,
  useDeleteAppointmentMutation,
  useBookAppointmentMutation,
} = googleCalendarApi;
