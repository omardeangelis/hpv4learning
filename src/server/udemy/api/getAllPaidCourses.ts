import { getSingleCourseStatsById } from "../index"
import { COURSES_IDS } from "../../constants"
import { SingleCourseStatsResponse } from "../types"

export const getAllPaidCourses = async () => {
  const promisesArray = COURSES_IDS.map((id) => getSingleCourseStatsById(id))
  return (await Promise.all(promisesArray)) as SingleCourseStatsResponse[]
}
