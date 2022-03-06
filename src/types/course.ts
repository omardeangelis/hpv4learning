import { ImageDataLike } from "gatsby-plugin-image";

export type CoursePreviewProps = {
  copertina: ImageDataLike;
  slug: string;
  titolo: string;
  couponLink?: string;
  categoria?: "free" | "udemy";
  riassunto: {
    riassunto: string;
  };
};

export type CourseCategoryProps = {
  name: string;
  slug: string;
  description?: {
    description: string;
  };
};
