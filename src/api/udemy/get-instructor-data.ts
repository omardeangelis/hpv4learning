import { HttpMethod } from "../../server/types";
import {
  getInstructorData,
} from "../../server/udemy";

type ReqProps = {
  method: HttpMethod;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method !== "GET") throw new Error("Use GET Method");
  try {
      const response = await getInstructorData();
      res.status(200).json(response);
      console.log(response);
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export default handler;
