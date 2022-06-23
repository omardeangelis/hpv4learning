import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { Box, BoxProps, css } from "@mui/system";
import styled from "@emotion/styled";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import { useLayoutContext } from "../../../context/layout";

interface Props {
  courseTitle: string;
}

// const BannerContainer = styled(Box)<BoxProps>(
//   css({
//     position: ["fixed", "relative"],
//     bottom: "0",
//     right: "0",
//     left: "0",
//     height: ["75px", "155px"],
//     width: ["unset", "260px"],
//     boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.1)",
//     border: "1px solid rgba(98, 0, 238, 0.05)",
//     borderRadius: "12px",
//     margin: "15px",
//     paddingLeft: ["12px", "18px"],
//     paddingTop: ["10px", "25px"],
//     background: "#fff",
//   })
// );

const BannerContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 80px;
  box-shadow: 0px 1px 2px 0px #0000001a;
  border: 1px solid rgba(98, 0, 238, 0.05);
  border-radius: 12px;
  margin: 15px;
  padding: 10px;
  background: #fff;
  @media screen and (min-width: 1024px) {
    right: 5%;
    top: 140px;
    left: unset;
    bottom: unset;
    height: 155px;
    width: 260px;
    padding-left: 18px;
    padding-top: 25px;
  }
`;

// const SaleBox = styled(Box)<BoxProps>(
//   css({
//     display: ["none", "flex"],
//     width: "28px",
//     height: "28px",
//     borderRadius: "50%",
//     background: "#8769fe",
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: "8px",
//     alignItems: ["unset", "center"],
//     justifyContent: ["unset", "center"],
//   })
// );

const SaleBox = styled(Box)`
  display: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #8769fe;
  color: #fff;
  font-weight: 600;
  font-size: 8px;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// const CloseButton = styled(Button)<BoxProps>(
//   css({
//     display: ["block", "none"],
//     padding: "0",
//     width: "15px",
//     height: "15px",
//   })
// );

const CloseButton = styled(Button)`
  padding: 0;
  width: 15px;
  height: 15px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ProjectBanner = ({ courseTitle }: Props) => {
  const { isBannerOpen, setIsBannerOpen } = useLayoutContext();

  if (isBannerOpen) {
    return (
      <BannerContainer>
        <Stack direction='column' spacing={{ xs: "unset", lg: "15px" }}>
          <Stack
            direction='row'
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <Typography
              variant='caption'
              fontWeight={500}
              sx={{
                fontSize: { xs: "12px", lg: "14px" },
                color: { xs: "#343A40", lg: "#000" },
                maxWidth: { xs: "220px", lg: "100%" },
                lineHeight: "14px",
              }}
            >
              {courseTitle}
            </Typography>

            <CloseButton onClick={() => setIsBannerOpen(false)}>
              <DoDisturbOnIcon
                sx={{
                  color: "#E4E7EC",
                }}
              />
            </CloseButton>
          </Stack>
          <Stack
            direction={{ xs: "row", lg: "column" }}
            alignItems='start'
            justifyContent='space-between'
            spacing={{ xs: "unset", lg: "15px" }}
          >
            <Stack
              direction='row'
              alignItems={{ xs: "flex-end", lg: "center" }}
              spacing={{ xs: "14px", lg: "32px" }}
            >
              <Typography
                fontWeight={400}
                sx={{
                  fontSize: { xs: "12px", lg: "18px" },
                  color: { xs: "#6C757D", lg: "#000" },
                  textDecoration: "line-through",
                }}
              >
                29.99€
              </Typography>
              <SaleBox>-57%</SaleBox>
              <Typography
                fontWeight={500}
                sx={{
                  fontSize: { xs: "16px", lg: "18px" },
                  color: "#000",
                }}
              >
                19.99€
              </Typography>
            </Stack>
            <Button
              sx={{
                width: "100%",
                maxWidth: { xs: "105px", lg: "unset" },
                height: "27px",
                background: "#8769FE",
                color: "#fff",
                borderRadius: "100px",
              }}
            >
              riscatta
            </Button>
          </Stack>
        </Stack>
      </BannerContainer>
    );
  }
  return null;
};
