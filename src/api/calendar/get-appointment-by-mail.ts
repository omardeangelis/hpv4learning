import { calendar, auth } from "../../server/utils/api";
import { calendarId, testingMail } from "../../server/constants";
import { isEmpty } from "lodash";
import { isValidMail } from "../../server/utils";
import { HttpMethod } from "../../server/types";

type ReqProps = {
  method: HttpMethod;
  query: {
    email: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method !== "GET" && process.env.NODE_ENV === "production")
    throw new Error("Use GET Method");
  const userMail =
    process.env.NODE_ENV === "production" || req.query.email
      ? req.query.email
      : testingMail;
  if (!isValidMail(userMail)) {
    if (process.env.NODE_ENV === "production") throw new Error("Invalid Mail");
  }

  userHasApointment(userMail)
    .then((response) => res.status(200).json(response))
    .catch((error) =>
      res
        .status(500)
        .json({ message: "C'è stato un problema, riprova", error }),
    );
};

async function userHasApointment(email: string) {
  const appointemnt = await calendar.events.list({
    calendarId: calendarId,
    q: email.toLocaleLowerCase(),
    auth,
    timeMin: new Date(Date.now()).toISOString(),
  });

  return isEmpty(appointemnt.data.items)
    ? []
    : appointemnt.data.items?.filter((item) => ({
        eventId: item.id,
        start: item.start,
        end: item.end,
      }));
}

export default handler;
