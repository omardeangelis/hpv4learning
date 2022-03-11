import React from "react";
import { SocialBar } from "../../../utils/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "primary.main",
          minHeight: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth='lg'>
          <Stack justifyContent='center' alignItems='center'>
            <SocialBar />
          </Stack>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
