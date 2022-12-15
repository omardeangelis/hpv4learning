import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { calendar_v3 } from "googleapis"

type CalendarEventsItem = calendar_v3.Schema$Event
type CalendarBookedResponse = Pick<
  CalendarEventsItem,
  "start" | "hangoutLink"
> & { mailSanded: boolean }
type CalendarBookRequestProps = {
  email: string
  eventId: string
  nome?: string
  cognome?: string
  professione?: string
  description?: string
  shouldSendMail?: boolean
}

export type AvailableCalendarResponse = {
  id: string
  startDate: calendar_v3.Schema$Event["start"]
  endDate: calendar_v3.Schema$Event["end"]
  appointemntStatus: "booked" | "free"
}

export const googleCalendarApi = createApi({
  reducerPath: `calendar`,
  baseQuery: fetchBaseQuery(),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllAvailableCalendars: builder.query<
      {
        id: string
        startDate: calendar_v3.Schema$Event["start"]
        endDate: calendar_v3.Schema$Event["end"]
      }[],
      string | void
    >({
      query: (startDate) =>
        `/api/calendar/get-all-calendars${
          startDate ? `?startDate=${startDate}` : ``
        }`,
      transformResponse: (
        data: (CalendarEventsItem & { appointemntStatus: "booked" | "free" })[]
      ) => {
        if (data)
          return data.map((item) => ({
            id: item.id,
            startDate: item.start,
            endDate: item.end,
            appointemntStatus:
              item.extendedProperties?.private?.appointemntStatus || `free`,
          })) as AvailableCalendarResponse[]
        return []
      },
      keepUnusedDataFor: 60 * 60 * 24,
    }),

    getAppointmentByMail: builder.query<
      { id: string; startDate: string; endDate: string }[],
      string
    >({
      query: (mail) => `/api/calendar/get-appointment-by-mail?email=${mail}`,
      transformResponse: (data: CalendarEventsItem[]) => {
        if (data)
          return data.map((item) => ({
            id: item.id,
            startDate: item.start,
            endDate: item.end,
          })) as { id: string; startDate: string; endDate: string }[]
        return []
      },
      keepUnusedDataFor: 60 * 60 * 24,
    }),
    bookAppointment: builder.mutation<
      CalendarBookedResponse,
      CalendarBookRequestProps
    >({
      query: (props) => ({
        method: `PUT`,
        url: `/api/calendar/book-appointment?eventId=${props.eventId}`,
        body: JSON.stringify({
          ...props,
        }),
      }),
    }),
    deleteAppointment: builder.mutation<boolean, string>({
      query: (eventId) => ({
        url: `/api/calendar/delete-appointment?eventId=${eventId}`,
        method: `DELETE`,
      }),
    }),
  }),
})

export const {
  useGetAllAvailableCalendarsQuery,
  useGetAppointmentByMailQuery,
  useDeleteAppointmentMutation,
  useBookAppointmentMutation,
} = googleCalendarApi
