export type CategoryType = {
  categoria: string;
  slug: string;
};

export type CategoryMenuProps = {
  slug: string;
  name: string;
  seoDescription: string;
  image?: {
    file: {
      url: string;
    };
  };
};
