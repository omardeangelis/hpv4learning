import { Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { ReviewBox } from "../../../components/box";
import { text } from "../utils/constants";

const AndreaImage = React.memo(() => (
  <StaticImage src='../images/andrea.jpeg' alt='Andrea' placeholder='blurred' />
));
const MartinaImage = React.memo(() => (
  <StaticImage
    src='../images/martina.jpeg'
    alt='Martina'
    placeholder='blurred'
  />
));
const RenatoImage = React.memo(() => (
  <StaticImage src='../images/renato.jpeg' alt='Andrea' placeholder='blurred' />
));

export const ReviewSection = () => {
  const { reviews } = text;
  const getReviewImage = React.useCallback((name: string) => {
    switch (name.toLowerCase()) {
      case "renato":
        return <RenatoImage />;
      case "andrea":
        return <AndreaImage />;
      default:
        return <MartinaImage />;
    }
  }, []);
  return (
    <Container maxWidth='lg'>
      <Typography
        component='h2'
        fontWeight={600}
        textAlign='center'
        sx={{
          fontSize: { xs: "34px", lg: "48px" },
          lineHeight: { xs: "39px", lg: "56px" },
        }}
      >
        Cosa dicono di noi ?
      </Typography>
      <Stack
        justifyContent='space-between'
        sx={{
          mt: { xs: "24px", lg: "48px" },
          flexDirection: { xs: "column", lg: "row" },
          alignItems: { xs: "center", lg: "stretch" },
          "& >*": {
            "&:not(:last-of-type)": {
              mb: { xs: "24px", lg: "0px" },
            },
          },
        }}
      >
        {reviews.map((review) => {
          return (
            <ReviewBox
              sx={{
                background: "white",
                maxWidth: { xs: "unset", lg: "346px" },
                width: "100%",
              }}
              key={review.title}
              image={getReviewImage(review.title)}
              {...review}
            />
          );
        })}
      </Stack>
    </Container>
  );
};
