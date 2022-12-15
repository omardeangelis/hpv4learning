import isEmpty from "lodash/isEmpty"
import { calendarId, calendar_key } from "../../server/constants"
import { HttpMethod } from "../../server/types"
import { calendar, auth } from "../../server/utils/api"

type ReqProps = {
  method: HttpMethod
  query: {
    [x: string]: string
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method !== `DELETE`) throw new Error(`Use DELETE method`)
  if (isEmpty(req.query)) throw new Error(`Pass eventId as query param`)

  const { eventId } = req.query

  try {
    const { data } = await calendar.events.get({
      calendarId,
      eventId,
      auth,
      timeZone: `Europe/Rome`,
    })

    try {
      await calendar.events.update({
        calendarId,
        eventId,
        auth,
        key: calendar_key,
        requestBody: {
          summary: `Consulenza Libera`,
          description: `#consulenze`,
          attendees: [],
          start: data.start,
          end: data.end,
        },
      })
      res.status(200).json(true)
    } catch (error) {
      res.status(500).json({
        message: `Errore durante l'eliminazione dell'appuntamento. Riprova`,
        error,
      })
    }
  } catch (error) {
    res
      .status(404)
      .json({ message: `Non esistono calendar con id: ${eventId}`, error })
  }
}

export default handler
