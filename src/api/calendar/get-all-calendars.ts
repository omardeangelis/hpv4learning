import { calendarId } from "../../server/constants";
import { HttpMethod } from "../../server/types";
import { auth, calendar } from "../../server/utils/api";

type ReqProps = {
  method: HttpMethod;
  body: {
    email: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method !== "GET") throw new Error("Use GET Method");
  getAllAvialableConsulenze()
    .then((response) => res.status(200).json(response.data.items))
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
