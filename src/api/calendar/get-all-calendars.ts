import { calendarId } from "../../server/constants"
import { HttpMethod } from "../../server/types"
import { auth, calendar } from "../../server/utils/api"

type ReqProps = {
  method: HttpMethod
  query?: {
    startDate: string
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method !== `GET`) throw new Error(`Use GET Method`)
  getAllAvialableConsulenze(req?.query?.startDate)
    .then((response) => res.status(200).json(response.data.items))
    .catch((error) =>
      res.status(500).json({
        error,
      })
    )
}

async function getAllAvialableConsulenze(date?: string) {
  const startDate = date ? Date.parse(date) : Date.now()

  return calendar.events.list({
    calendarId,
    auth,
    q: `consulenza`,
    timeMin: new Date(startDate).toISOString(),
    timeMax: new Date(startDate + 1000 * 60 * 60 * 24 * 21).toISOString(),
    timeZone: `Europe/Rome`,
    singleEvents: true,
    orderBy: `startTime`,
  })
}

export default handler
