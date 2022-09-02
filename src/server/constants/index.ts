/* eslint-disable no-control-regex */
export const mailValidationRegex = new RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
);
export const calendarId = process.env.GATSBY_GOOGLE_CALENDAR_ID;
export const calendar_key = process.env.GATSBY_GOOGLE_CALENDAR_API_KEY;
export const testingMail = "omar.hpvfilm@gmail.com";
