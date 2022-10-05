import React from "react";
import { Stack, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import { useLayoutContext } from "../../../context/layout";
import SeoLink from "../../../components/shared/SeoLink";
import { createRowText } from "../../../utils/helpers";
import { triggerGACustomEvent } from "../../../utils/tracking";

interface Props {
  courseTitle?: string | null;
  prezzo?: number | null;
  couponLink?: string | null;
}

const BannerContainer = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0px 1px 2px 0px #0000001a;
  border-radius: 12px;
  margin: 15px;
  padding: 10px;
  background: #fff;
  z-index: 2;
  @media screen and (min-width: 1024px) {
    position: sticky;
    right: 5%;
    top: 140px;
    left: unset;
    bottom: unset;
    width: 260px;
    padding-left: 18px;
    padding-top: 25px;
    padding-bottom: 12px;
  }
`;

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

const CloseButton = styled(Button)`
  padding: 0;
  width: 15px;
  height: 15px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ProjectBanner = ({ courseTitle, prezzo, couponLink }: Props) => {
  const context = useLayoutContext();

  if (context?.isBannerOpen) {
    return (
      <BannerContainer sx={{ border: "1px solid", borderColor: "purple.200" }}>
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
                lineHeight: { xs: "16px", lg: "18px" },
              }}
            >
              {createRowText(courseTitle as string)}
            </Typography>

            <CloseButton onClick={() => context?.setIsBannerOpen(false)}>
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
                {prezzo ? `${(prezzo / 100).toFixed(2)}€` : null}
              </Typography>
              <SaleBox>
                {prezzo
                  ? `-${Math.ceil(100 - (12.99 * 100) / (prezzo / 100)).toFixed(
                      0,
                    )}%`
                  : null}
              </SaleBox>
              <Typography
                fontWeight={500}
                sx={{
                  fontSize: { xs: "16px", lg: "18px" },
                  color: "#000",
                }}
              >
                12.99€
              </Typography>
            </Stack>
            {couponLink ? (
              <Box sx={{ width: { xs: "unset", lg: "100%" } }}>
                <SeoLink isExternal={true} link={couponLink} rel='noopener'>
                  <Button
                    color='primary'
                    variant='contained'
                    onClick={triggerGACustomEvent(
                      { event: "click_to_udemy" },
                      { hasLocation: true },
                    )}
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
                </SeoLink>
              </Box>
            ) : null}
          </Stack>
        </Stack>
      </BannerContainer>
    );
  }
  return null;
};
