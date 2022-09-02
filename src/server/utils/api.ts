import { google, calendar_v3 } from "googleapis";

const CREDENTIALS = JSON.parse(
  process.env.GATSBY_GOOGLE_CALENDAR_CREDENTIALS as string,
);
const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];
export const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  undefined,
  CREDENTIALS.private_key,
  SCOPES,
);

export const calendar: calendar_v3.Calendar = google.calendar({
  version: "v3",
  auth,
});
