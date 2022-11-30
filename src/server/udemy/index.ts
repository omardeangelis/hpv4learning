import fetch from "node-fetch";
import { COURSES_IDS } from "../constants";

export const getSingleCourseStatsById = async (id: number) => {
  try {
    const res = await fetch(
      `https://www.udemy.com/api-2.0/courses/${id}/?page=1&page_size=32&ordering=-create&skip_caching=true&fields[course]=title,num_subscribers,num_subscribers_recent,rating,content_length_video`,
    );
    const response = await res.json();
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
    const res = await Promise.all(promisesArray);

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
    const res = await fetch(
      `https://www.udemy.com/api-2.0/courses/${id}/reviews/?page=1&page_size=100`,
    );
    const response = await res.json();
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