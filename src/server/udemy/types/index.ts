export type SingleCourseReviews = {
  content: string
  rating: number
  user: { name: string }
}

export type SingleCourseReviewsResponse = {
  results: SingleCourseReviews[]
}

export type SingleCourseStatsResponse = {
  title: string
  rating: number
  num_subscribers: number
  content_length_video: number
  totalSubscribers: number
  courseHours: number
}
