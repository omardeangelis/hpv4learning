import { Box } from "@mui/system";
import React from "react";
import { CardsSection, Hero, IconSection } from "../consulenze/components";

export const ConsulenzeLayout = () => {
  return (
    <>
      <Box mt='-72px'>
        <Hero />
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 48.96%, #FFFFFF 100%)",
          }}
        >
          <Box
            sx={{
              mt: {
                xs: "48px",
                lg: "144px",
              },
            }}
          >
            <IconSection />
          </Box>
          <Box
            sx={{
              mt: {
                xs: "48px",
                lg: "144px",
              },
            }}
          >
            <CardsSection />
          </Box>
        </Box>
      </Box>
    </>
  );
};
