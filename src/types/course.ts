import { ImageDataLike } from "gatsby-plugin-image";

export type CoursePreviewProps = {
  copertina: ImageDataLike & {
    file?: {
      url: string;
    };
  };
  slug: string;
  titolo: string;
  couponLink?: string;
  categoria?: "free" | "udemy";
  riassunto: {
    riassunto: string;
  };
};

export type SingleCourseProps = CoursePreviewProps &
  CourseInfoProps & {
    category: {
      name: string;
    }[];
    prezzo: number;
    sottotitolo: string;
    insegnante: InsegnanteProps[];
    slug: string;
    idCorso: number;
    udemyUrl: string;
    videoLink: string;
    target: string[];
    oreDiLezione: number;
    couponCorso?: string;
    concetti: string[];
    requisiti: string[];
    descrizione: RemarkType;
    introduzioneProgetti: RemarkType;
    progetti?: ProjectProps[];
    updatedAt: Date;
    recensioniRicevute: number;
  };

export type CourseCategoryProps = {
  name: string;
  slug: string;
  description?: {
    description: string;
  };
};

export type RemarkType = {
  childMarkdownRemark: {
    html: string;
  };
};

export type InsegnanteProps = {
  nome: string;
  professione: string;
  img: ImageDataLike;
  cognome: string;
  bio: {
    bio: string;
    childMarkdownRemark: {
      html: string;
    };
  };
  corsi: {
    titolo: string;
    slug: string;
    category: {
      slug: string;
    }[];
  }[];
};

export type ProjectProps = {
  titolo: string;
  descrizione: RemarkType;
  ordine?: number;
  copertina: ImageDataLike;
  url?: string;
  metaDescription?: string;
  body: ProjectBodyProps;
};

export type ProjectBodyProps = {
  body: string;
  childMarkdownRemark: {
    headings: object[];
    html: string;
    rawMarkdownBody: string;
  };
};

export type CourseInfoProps = {
  livello: string;
  lezioni: number;
  durata: number;
  progetti: number;
  recensioni: number;
  categoria: string;
  tipologia: "free" | "udemy";
  lastUpdate: string;
};

export type ResponsiveInfoProps = {
  livello: string;
  lezioni: number;
  durata: number;
  progetti: number;
  tipologia: "free" | "udemy";
  recensioni: number;
};
