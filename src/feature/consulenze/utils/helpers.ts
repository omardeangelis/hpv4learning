import { calendar_v3 } from "googleapis"

export const getDataFromCalendar = (
  calendarDate: calendar_v3.Schema$Event["start"]
) => {
  if (!calendarDate?.dateTime) return
  const date = new Date(Date.parse(calendarDate.dateTime))
  const formattedDate = new Intl.DateTimeFormat(`it`, {
    day: `numeric`,
    month: `numeric`,
    year: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
  }).format(date)

  const allDates = formattedDate.split(`,`)

  return { day: allDates[0], time: allDates[1] }
}

export const formatDates = (
  date: NonNullable<calendar_v3.Schema$Event["start"]>["dateTime"]
) => {
  if (!date) return
  const aaa = new Date(Date.parse(date))
  const month = aaa.getMonth() + 1
  const day = aaa.getDate()

  return `${day}/${month}`
}
