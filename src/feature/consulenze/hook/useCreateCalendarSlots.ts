import React from "react"
import {
  AvailableCalendarResponse,
  useGetAllAvailableCalendarsQuery,
} from "../../../services/calendar"
import { formatDates } from "../utils/helpers"

export const useCreateCalendarSlots = (startDate?: string) => {
  const [slots, setSlots] = React.useState<
    | {
        date: string | undefined
        items: AvailableCalendarResponse[]
      }[]
    | undefined
  >([])
  const { data, isLoading } = useGetAllAvailableCalendarsQuery(startDate)

  const uniqueDates = React.useMemo(() => {
    if (!data || isLoading) return

    const formattedDates = data.map((el) =>
      formatDates(el?.startDate?.dateTime)
    )

    const uniqueDates = [...new Set(formattedDates)]
    return uniqueDates
  }, [data, isLoading])

  const availableDates = React.useMemo(() => {
    if (!uniqueDates) return
    return uniqueDates.map((el) => ({
      date: el,
      items: [] as AvailableCalendarResponse[],
    }))
  }, [uniqueDates])

  React.useEffect(() => {
    if (!data || isLoading) return
    if (!availableDates) return

    data.forEach((calendar) => {
      if (calendar?.startDate?.dateTime) {
        const timeIndex = availableDates.findIndex(
          (x) => x.date === formatDates(calendar?.startDate?.dateTime)
        )
        if (timeIndex >= 0) {
          availableDates[timeIndex].items.push(calendar)
        }
      }
      setSlots(availableDates)
    })
  }, [availableDates, data, isLoading])

  return slots
}
