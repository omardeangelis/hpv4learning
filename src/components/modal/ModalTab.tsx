import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import { StaticImage } from "gatsby-plugin-image";
import { useProviderModalContext } from "../../feature/consulenze/context/providerModalContext";
import { BorderBox } from "../layout";
import { useResponsive } from "../../hook/useResponsive";

type Props = {
  isgmail: boolean;
  onClick: () => void;
};

const StyledTab = styled(BorderBox)<{ isgmail: boolean; ismobile: boolean }>(
  ({ isgmail, ismobile }) => ({
    width: ismobile ? "132px" : "153px",
    height: ismobile ? "132px" : "153px",
    borderRadius: "8px",
    border: "1px solid ",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    cursor: "pointer",

    flexDirection: isgmail ? "column" : "column-reverse",
    padding: isgmail ? "10px" : "10px 0px",
  }),
);

const ImageBox = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 56px;
  height: 56px;

  @media screen and (min-width: 767px) {
    width: 72px;
    height: 72px;
  }
`;

export const ModalTab = ({ isgmail, onClick }: Props) => {
  const { provider } = useProviderModalContext() || {};
  const { isMobile } = useResponsive();

  return (
    <>
      {isgmail ? (
        <StyledTab
          isgmail={isgmail}
          ismobile={isMobile}
          onClick={onClick}
          style={{
            borderColor:
              provider === "gmail" ? "var(--purple-400)" : "var(--gray-300)",
          }}
        >
          <Typography
            fontSize={isMobile ? "8px" : "10px"}
            lineHeight='15px'
            fontWeight={400}
            color='var(--gray-500)'
          >
            Consigliato
          </Typography>
          <ImageBox>
            <StaticImage
              src='./images/google-icon.png'
              alt='Google'
              placeholder='tracedSVG'
            />
          </ImageBox>
          <Typography
            fontSize={isMobile ? "10px" : "12px"}
            lineHeight='18px'
            fontWeight={400}
            color='var(--gray-500)'
          >
            Usa Account Google
          </Typography>
        </StyledTab>
      ) : (
        <StyledTab
          isgmail={isgmail}
          ismobile={isMobile}
          onClick={onClick}
          style={{
            borderColor:
              provider === "manual" ? "var(--purple-400)" : "var(--gray-300)",
          }}
        >
          <ImageBox>
            <StaticImage
              src='./images/form-line.png'
              alt='Form'
              placeholder='tracedSVG'
            />
          </ImageBox>
          <Typography
            fontSize={isMobile ? "10px" : "12px"}
            lineHeight='18px'
            fontWeight={400}
            color='var(--gray-500)'
            align='center'
          >
            Compila manualmente
          </Typography>
        </StyledTab>
      )}
    </>
  );
};
