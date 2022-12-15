import { HttpMethod } from "../../server/types"
import { getInstructorsData } from "../../server/udemy"

type ReqProps = {
  method: HttpMethod
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handler = async (req: ReqProps, res: any) => {
  if (req.method !== `GET`) throw new Error(`Use GET Method`)
  try {
    const response = await getInstructorsData()
    res.status(200).json(response)
    console.log(response)
  } catch (error) {
    res.status(500).json({
      error,
    })
  }
}

export default handler
