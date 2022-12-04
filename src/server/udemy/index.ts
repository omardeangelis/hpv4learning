import { COURSES_IDS, UDEMY_TOKEN } from "../constants";
import { InstructorDataResponse, ParsedInstructorDataResponse, SingleCourseReviewsResponse, SingleCourseStatsResponse, TaughtCourse, VisibleInstructor } from "./types";
import { udemyFetch } from "./utils";
import uniqBy from "lodash/uniqBy"

export const getSingleCourseStatsById = async (id: number) => {
  try {
    const res = await udemyFetch(
      `https://www.udemy.com/api-2.0/courses/${id}/?page=1&page_size=32&ordering=-create&skip_caching=true&fields[course]=title,num_subscribers,num_subscribers_recent,rating,content_length_video`,
    );
    const response = await res.json() as SingleCourseStatsResponse;
    const courseStats = {
      title: response.title,
      rating: Number(response.rating.toFixed(1)),
      totalSubscribers: response.num_subscribers,
      courseHours: Math.ceil(response.content_length_video / 3600),
    };

    return courseStats;
  } catch (error) {
    return { error: error, message: "Please, control if the course ID exist or it's passed correctly!" };
  }
};

export const getAllPaidCoursesStats = async () => {
  try {
    const promisesArray = COURSES_IDS.map((id) => getSingleCourseStatsById(id));
    const res = await Promise.all(promisesArray) as SingleCourseStatsResponse[];

    let totalSubscribers = 0;
    let totalRating = 0;
    let numberOfRating = 0;
    let coursesHours = 0;

    res.forEach((el) => {
      totalSubscribers = totalSubscribers + el.totalSubscribers;
      totalRating = totalRating + el.rating;
      numberOfRating = el.rating !== 0 ? numberOfRating + 1 : numberOfRating;
      coursesHours = coursesHours + el.courseHours;
    });

    return {
      totalSubscribers: totalSubscribers,
      averageRating: Number((totalRating / numberOfRating).toFixed(1)),
      coursesHours: coursesHours,
    };
  } catch (error) {
    return { error: error };
  }
};

export const getSingleCourseReviewsById = async (id: number) => {
  try {
    const res = await udemyFetch(
      `https://www.udemy.com/api-2.0/courses/${id}/reviews/?page=1&page_size=100`,
    );
    const response = await res.json() as SingleCourseReviewsResponse;
    console.log(response);

    const contentReviews = response.results.filter(
      (el) => el.content !== "" && el.rating >= 4,
    );
    return contentReviews.map((el) => {
      return {
        userName: el.user.name,
        rating: el.rating,
        content: el.content,
      };
    });
  } catch (error) {
     return { error: error, message: "Please, control if the course ID exist or it's passed correctly!" };
  }
};

export const getAllReview = async () => {
  try {
    const promisesArray = COURSES_IDS.map((id) =>
      getSingleCourseReviewsById(id),
    );
    const res = await Promise.all(promisesArray);
    return res.flat(1);
  } catch (error) {
    return { error: error };
  }
};


export const getInstructorData = async () => {
  try {
     const res = await udemyFetch(
      `https://www.udemy.com/instructor-api/v1/taught-courses/courses/?fields[course]=visible_instructors,rating`
    );
    const response = await res.json() as InstructorDataResponse;
    const parsedResponse = parseInstructorData(response)
    return uniqBy(parsedResponse, "id")

  } catch (error) {
    return { error: error }
  }
};

const parseInstructorData = (response: InstructorDataResponse):ParsedInstructorDataResponse[] => {
  const instructors: VisibleInstructor[] = [];
  response.results.map((course: TaughtCourse) => {
    course.visible_instructors.map((instructor: VisibleInstructor) => {
      instructors.push(instructor);
    })
  })
  console.log(instructors, "instructors");
  
  const uniqueInstructors: VisibleInstructor[] = Array.from(new Set(instructors)); 

  console.log(uniqueInstructors, "unique");
  

  return uniqueInstructors.map((uniqueInstructor) => {
    let rating = 0;
    let counter = 0;
    response.results.forEach((course) => {
      course.visible_instructors.forEach((inst) => {
        if (inst.title === uniqueInstructor.title && course.rating > 0) {
           rating += course.rating;
           counter++;
        }
      })
    })
       rating = rating / counter;
      return {id: uniqueInstructor.id, title: uniqueInstructor.title, rating}
  })
  
}
