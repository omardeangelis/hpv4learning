import { ImageDataLike } from "gatsby-plugin-image";

export type CoursePreviewProps = {
  category: CourseCategoryProps[];
  copertina: ImageDataLike;
  slug: string;
  titolo: string;
  riassunto: {
    riassunto: string;
  };
};

export type CourseCategoryProps = {
  name: string;
  slug: string;
};
