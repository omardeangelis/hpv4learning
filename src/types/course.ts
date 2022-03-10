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

export type InsegnanteProps = {
  nome: string;
  professione: string;
  img: ImageDataLike;
  cognome: string;
  bio: {
    bio: string;
  };
  corsi: {
    titolo: string;
    slug: string;
    category: {
      slug: string;
    }[];
  }[];
};
