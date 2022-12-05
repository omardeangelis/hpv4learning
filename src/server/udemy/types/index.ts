export type SingleCourseReviews = {
  content: string;
  rating: number;
  user: { name: string };
};

export type SingleCourseReviewsResponse = {
  results: SingleCourseReviews[];
};

export type SingleCourseStatsResponse = {
  title: string;
  rating: number;
  num_subscribers: number;
  content_length_video: number;
  totalSubscribers: number;
  courseHours: number;
};

export type VisibleInstructor = {
  _class: string;
  id: string;
  title: string;
  name: string;
  locale: string;
}

export type TaughtCourse = {
  _class: string;
  id: string;
  visible_instructors: VisibleInstructor[];
  rating: number;
}

export type InstructorDataResponse = {
  count: number;
  next?: any;
  previous?: any;
  results: TaughtCourse[];
}

export type ParsedInstructorDataResponse = {
  id: string,
  title: string,
  rating: number
}
