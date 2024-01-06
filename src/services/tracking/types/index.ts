import { HomePageEvents } from "../constant/homepage"
import { NavigationEvents } from "../constant/navigation"
import { WebAgencyEvents } from "../constant/web_agency"

type EventName = NavigationEvents | WebAgencyEvents | HomePageEvents

export type Event = {
  eventName: EventName
  payload?: Record<string, number | string | null>
}
