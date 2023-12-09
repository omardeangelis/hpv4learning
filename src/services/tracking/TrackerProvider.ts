export abstract class TrackerProvider<T> {
  abstract sendEvent(event: T): void

  abstract sendMultipleEvents(events: T[]): void
}
