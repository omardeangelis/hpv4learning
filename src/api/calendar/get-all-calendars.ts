import { google, calendar_v3 } from "googleapis";

const CREDENTIALS = JSON.parse(
  process.env.GATSBY_GOOGLE_CALENDAR_CREDENTIALS as string,
);
const calendarId = process.env.GATSBY_GOOGLE_CALENDAR_ID;
const SCOPES = "https://www.googleapis.com/auth/calendar";
const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  undefined,
  CREDENTIALS.private_key,
  SCOPES,
);
const calendar: calendar_v3.Calendar = google.calendar("v3");

const handler = (req: any, res: any) => {
  getAllAvialableConsulenze()
    .then((response) => res.status(200).json(response.data))
    .catch((error) =>
      res.status(500).json({
        error: error,
      }),
    );
};

async function getAllAvialableConsulenze() {
  return calendar.events.list({
    calendarId: calendarId,
    q: "#consulenze",
    auth,
    timeMin: new Date(Date.now()).toISOString(),
    timeMax: new Date(Date.now() + 1000 * 60 * 60 * 24 * 21).toISOString(),
  });
}

export default handler;
