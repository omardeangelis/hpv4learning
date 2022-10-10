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
  body: string;
};

type ParsedBody = {
  email: string;
  nome?: string;
  cognome?: string;
  professione?: string;
  description?: string;
  shouldSendMail?: boolean;
};

const createCalendarDescription = (props: ParsedBody) => {
  const calendarDescription = `nome: ${props.nome ? props.nome : ""} cognome: ${
    props.cognome ? props.cognome : ""
  } descrizione: ${props.description ? props.description : ""} professione: ${
    props.professione ? props.professione : ""
  }`;

  return calendarDescription;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method !== "PUT") throw new Error("Use PUT Method");
  if (!req.query) throw new Error("Mancano i query params nell'URL");
  if (!req.body) throw new Error("Body mancante");
  const body = JSON.parse(req.body) as ParsedBody;
  const description = createCalendarDescription(body);
  const { email } = body;
  const { eventId } = req.query;
  const userMail = email ? email : testingMail;
  if (!isValidMail(userMail)) throw new Error("Email non valida");
  try {
    const { data } = await calendar.events.get({
      calendarId,
      eventId,
      auth,
      timeZone: "Europe/Rome",
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
              displayName: body?.nome,
            },
            {
              email: "omardeangelis.business@gmail.com",
              responseStatus: "accepted",
              displayName: "Omar De Angelis",
            },
            {
              email: "demarco.leonardo2000@gmail.com",
              responseStatus: "accepted",
              displayName: "Leonardo De Marco",
            },
          ],
          description: description || "#booked",
          summary: `Consulenza con ${userMail}`,
          start: data.start,
          end: data.end,
          extendedProperties: {
            private: {
              appointemntStatus: "booked",
            },
          },
        },
      });

      const { start, hangoutLink } = responseData;
      let mailSended: boolean | undefined;
      if (body.shouldSendMail)
        try {
          const message = createCalendarConfirmationMail(
            userMail,
            hangoutLink as string,
            new Date(Date.parse(start?.date as string)).toISOString(),
          );
          await sendGrid.send(message);
          mailSended = true;
        } catch (error) {
          res.status(500).json({ message: "Impossibile inviare mail", error });
        }
      res.status(200).json({ start, hangoutLink, mailSended: !!mailSended });
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
