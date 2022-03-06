import React from "react";
import { Box, Container } from "@mui/material";

const DiscordBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "purple.800",
      }}
    >
      <Box
        sx={{
          py: { xs: "26px", lg: "55px" },
        }}
      >
        <Container maxWidth='lg'>Banner</Container>
      </Box>
    </Box>
  );
};

export default DiscordBanner;
