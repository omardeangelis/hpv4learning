import { GetAllCourseStatsResponse, GetSingleCourseStatsResponse, SingleCourseReviewsResponse, SingleCourseStatsResponse, SingleReview } from "../types";

export const parseSingleCourseStats = (response:SingleCourseStatsResponse):GetSingleCourseStatsResponse => {
    const courseStats = {
      title: response.title,
      rating: Number(response.rating.toFixed(1)),
      totalSubscribers: response.num_subscribers,
      courseHours: Math.ceil(response.content_length_video / 3600),
    };

    return courseStats; 
} 

export const parseAllPaidCoursesStats = (response:SingleCourseStatsResponse[]):GetAllCourseStatsResponse => {
    let totalSubscribers = 0;
    let totalRating = 0;
    let numberOfRating = 0;
    let coursesHours = 0;
    response.forEach((el) => {
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
}

export const parseSingleCourseReviews = (response:SingleCourseReviewsResponse):SingleReview[] => {
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
}