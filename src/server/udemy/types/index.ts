export type SingleCourseStatsResponse = { 
  title: string
  rating: number
  num_subscribers: number
  content_length_video: number
  totalSubscribers: number
  courseHours: number
}

export type GetAllCourseStatsResponse = { 
  totalSubscribers: number
  averageRating: number
  coursesHours: number
}

export type GetSingleCourseStatsResponse = {
  title: string
  rating: number
  totalSubscribers: number
  courseHours: number
}

export type SingleCourseReview = { 
  content: string
  rating: number
  user: { name: string }
}

export type SingleCourseReviewsResponse = { 
  results: SingleCourseReview[]
}

export type SingleReview = { userName: string; rating: number; content: string }

export type ResponseError = { 
  error: any
  message?: string;
}