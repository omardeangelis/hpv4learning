import { calendar, auth } from "../../server/utils/api";
import { calendarId, testingMail } from "../../server/constants";
import { isEmpty } from "lodash";
import { isValidMail } from "../../server/utils";
import { HttpMethod } from "../../server/types";

type ReqProps = {
  method: HttpMethod;
  body: {
    mail: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = (req: ReqProps, res: any) => {
  if (req.method !== "POST" && process.env.NODE_ENV === "production")
    throw new Error("Use POST Method");

  if (!isValidMail(req?.body?.mail)) {
    if (process.env.NODE_ENV === "production") throw new Error("Invalid Mail");
  }

  const userMail =
    process.env.NODE_ENV === "production" ? req.body.mail : testingMail;

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

  return isEmpty(appointemnt.data.items) ? [] : appointemnt.data.items;
}

export default handler;
