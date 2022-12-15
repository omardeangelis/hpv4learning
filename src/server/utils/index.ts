import { mailValidationRegex, sendGridAuthSender } from "../constants"

export function isValidMail(email: string) {
  return String(email).toLowerCase().match(mailValidationRegex)
}

export function createCalendarConfirmationMail(
  email: string,
  link: string,
  startDate: string
) {
  const formattedDate = new Intl.DateTimeFormat(`it`, {
    day: `numeric`,
    month: `numeric`,
    year: `numeric`,
    hour: `numeric`,
    minute: `numeric`,
  }).format(Date.parse(startDate))

  const message = {
    from: sendGridAuthSender as string,
    to: email,
    subject: `Consulenza Confermata`,
    html: `<h2>Consulenza Confrmata</h2></br>
    <p>Le confermiamo che la call è confermata al girono ${formattedDate}</p>
    <p>Link per la videocall: <a href='${link}'>${link}</a><p>
    `,
  }

  return message
}
