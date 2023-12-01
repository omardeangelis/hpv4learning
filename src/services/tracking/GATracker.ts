import { TrackerProvider } from "./TrackerProvider"
import { Event } from "./types"
import { isBrowser } from "../../utils/tracking"
import { isDevelopment } from "../../constants"

type Test = Window & {
  dataLayer?: Record<string, any>[]
}

export class GATracker extends TrackerProvider<Event> {
  static uniqueGATracker: GATracker

  public dataLayer = isBrowser ? (window as Test).dataLayer || [] : []

  private trackEvent(event: Event) {
    const { eventName, payload } = event
    if (!this.dataLayer) return // check if we are in browser
    // eslint-disable-next-line no-console
    if (isDevelopment) console.log(`GA Event: `, eventName, payload)
    this.dataLayer.push({
      event: eventName,
      ...payload,
    })
  }

  sendEvent(event: Event) {
    this.trackEvent(event)
  }

  sendMultipleEvents(events: Event[]) {
    if (!this.dataLayer) return // check if we are in browser
    events.forEach((event) => {
      this.trackEvent(event)
    })
  }

  static init() {
    if (!GATracker.uniqueGATracker) {
      GATracker.uniqueGATracker = new GATracker()
    }
    return GATracker.uniqueGATracker
  }
}
