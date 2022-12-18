/* eslint-disable no-control-regex */
// eslint-disable-next-line prefer-regex-literals
export const mailValidationRegex = new RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
)

// eslint-disable-next-line prefer-regex-literals
export const gmailEmailValidation = new RegExp(
  /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
)
export const calendarId = process.env.GATSBY_GOOGLE_CALENDAR_ID
export const calendar_key = process.env.GATSBY_GOOGLE_CALENDAR_API_KEY
export const testingMail = `omar.hpvfilm@gmail.com`

export const sendGridAuthSender = process.env.GATSBY_SENDGRID_AUTH_SENDER

export const COURSES_IDS = [3192370, 3999702, 4355860, 4786146, 4703710]
export const UDEMY_TOKEN = process.env.GATSBY_UDEMY_TEACHER_TOKEN_AUTH
