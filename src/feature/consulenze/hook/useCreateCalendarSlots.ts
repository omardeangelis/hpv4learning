import React from "react";
import {
  AvailableCalendarResponse,
  useGetAllAvailableCalendarsQuery,
} from "../../../services/calendar";
import { formatDates } from "../utils/helpers";

export const useCreateCalendarSlots = () => {
  const { data, isLoading } = useGetAllAvailableCalendarsQuery();

  const uniqueDates = React.useMemo(() => {
    if (!data || isLoading) return;

    const formattedDates = data.map((el) => {
      return formatDates(el?.startDate?.dateTime);
    });

    const uniqueDates = [...new Set(formattedDates)];
    return uniqueDates;
  }, [data, isLoading]);

  const availableDates = React.useMemo(() => {
    if (!uniqueDates) return;
    return uniqueDates.map((el) => ({
      [`${el}`]: [] as AvailableCalendarResponse[],
    }));
  }, [uniqueDates]);

  React.useEffect(() => {
    if (!data || isLoading) return;
    if (!availableDates) return;

    data.forEach((calendar) => {
      if (calendar?.startDate?.dateTime) {
        const timeIndex = Object.keys(availableDates).findIndex(
          (x) => formatDates(x) === formatDates(calendar?.startDate?.dateTime)
        );
        if (timeIndex >= 0 && formatDates(calendar?.startDate?.dateTime)) {
          if (
            availableDates[timeIndex][
              formatDates(calendar?.startDate?.dateTime) as string
            ]
          )
            availableDates[timeIndex][
              formatDates(calendar?.startDate?.dateTime) as string
            ]?.push(calendar);
        }
      }
    });
  }, [availableDates, data, isLoading]);

  return availableDates;
};
