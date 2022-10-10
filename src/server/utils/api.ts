import { google, calendar_v3 } from "googleapis";
import sendGrid from "@sendgrid/mail";

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
  "hpv4learning@hpvfilm.it",
);

if (process.env.GATSBY_SENDGRID_API_KEY)
  sendGrid.setApiKey(process.env.GATSBY_SENDGRID_API_KEY);

export { sendGrid };

export const calendar: calendar_v3.Calendar = google.calendar({
  version: "v3",
  auth,
});
