import { uniqBy } from "lodash";
import { InstructorDataResponse, ParsedInstructorDataResponse, TaughtCourse, VisibleInstructor } from "../types";

export const parseInstructorData = (response: InstructorDataResponse):ParsedInstructorDataResponse[] => {
  const instructors: VisibleInstructor[] = [];
  response.results.map((course: TaughtCourse) => {
    course.visible_instructors.map((instructor: VisibleInstructor) => {
      instructors.push(instructor);
    })
  })  
  const parsedInstructorData = uniqBy(parseUniqueInstructors(response, instructors), "id")
  return parsedInstructorData;
}

const parseUniqueInstructors = (response:InstructorDataResponse ,instructors:VisibleInstructor[]):ParsedInstructorDataResponse[] => {
    const uniqueInstructors: VisibleInstructor[] = Array.from(new Set(instructors)); 
    const parsedUniqueInstructors = uniqueInstructors.map((uniqueInstructor) => {
    let rating = 0;
    let counter = 0;
    response.results.forEach((course:TaughtCourse) => {
      course.visible_instructors.forEach((inst:VisibleInstructor) => {
        if (inst.title === uniqueInstructor.title && course.rating > 0) {
           rating += course.rating;
           counter++;
        }
      })
    })
       rating = rating / counter;
      return {id: uniqueInstructor.id, title: uniqueInstructor.title, rating}
  })
  return parsedUniqueInstructors;
}