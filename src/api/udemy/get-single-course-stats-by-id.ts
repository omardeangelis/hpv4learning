import { HttpMethod } from "../../server/types";
import {
  getSingleCourseStatsById,
} from "../../server/udemy";

type ReqProps = {
  method: HttpMethod;
  query: {
    id?: number;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method !== "GET") throw new Error("Use GET Method");
  try {
    if (req.query.id) {
      const response = await getSingleCourseStatsById(req.query.id);
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
};

export default handler;
