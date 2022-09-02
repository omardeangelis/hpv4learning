import { calendarId, calendar_key, testingMail } from "../../server/constants";
import { calendar, auth, sendGrid } from "../../server/utils/api";
import { HttpMethod } from "../../server/types";
import {
  isValidMail,
  createCalendarConfirmationMail,
} from "../../server/utils";

type ReqProps = {
  method: HttpMethod;
  query: {
    [x: string]: string;
  };
  body: {
    email: string;
    nome?: string;
    cognome?: string;
    professione?: string;
    description?: string;
    shouldSendMail?: boolean;
  };
};

const createCalendarDescription = (props: ReqProps["body"]) => {
  let calendarDescription: string | undefined;
  for (const key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      const element = props[key as keyof ReqProps["body"]];

      if (element) {
        if (key === "email" || key === "shouldSendMail") continue;
        calendarDescription += ` ${element}`;
      }
    }
  }
  return calendarDescription;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method === "PUT" && process.env.NODE_ENV === "production")
    throw new Error("Use PUT Method");
  if (!req.query) throw new Error("Mancano i query params nell'URL");
  if (!req.body && process.env.NODE_ENV === "production")
    throw new Error("Body mancante");
  const description = createCalendarDescription(req.body);
  const { email } = req.body;
  const { eventId } = req.query;
  const userMail = process.env.NODE_ENV === "production" ? email : testingMail;
  if (!isValidMail(userMail)) throw new Error("Email non valida");
  try {
    const { data } = await calendar.events.get({
      calendarId,
      eventId,
      auth,
    });

    try {
      const { data: responseData } = await calendar.events.update({
        calendarId,
        sendUpdates: "all",
        eventId,
        auth,
        key: calendar_key,

        requestBody: {
          attendees: [
            {
              email: userMail,
              responseStatus: "accepted",
              displayName: req.body?.nome,
            },
          ],
          description: description || "#booked",
          summary: `Consulenza con ${userMail}`,

          start: data.start,
          end: data.end,
        },
      });

      const { start, hangoutLink } = responseData;
      if (req.body.shouldSendMail)
        try {
          const message = createCalendarConfirmationMail(
            userMail,
            hangoutLink as string,
            new Date(Date.parse(start?.date as string)).toISOString(),
          );
          await sendGrid.send(message);
        } catch (error) {
          res.status(500).json({ message: "Impossibile inviare mail", error });
        }
      res.status(200).json({ start, hangoutLink, mailSended: true });
    } catch (error) {
      res.status(400).json({ error });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "C'è stato un errore, riprova più tardi", error });
  }
};

export default handler;
