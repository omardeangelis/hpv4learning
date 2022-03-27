export type SeoDefaultData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      image: string;
      slogan: string;
      imageWidth: number;
      imageHeight: number;
      youtube: string;
      author: string;
    };
  };
};

export type MetaDecoratorProps = {
  metaTitle: string;
  metaDescription: string;
  author?: string;
  image: string;
  imageWidth?: number | string;
  imageHeight: number | string;
  disableSlogan?: true;
  extraMetaTags?: {
    property: string;
    content: string;
  }[];
};
