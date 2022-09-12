import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
  isGMail: boolean;
  onClick: () => void;
};

const StyledTab = styled(Box)<{ isGMail: boolean }>(({ isGMail }) => ({
  width: "153px",
  height: "153px",
  borderRadius: "8px",
  border: "1px solid var(--gray-300)",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  cursor: "pointer",

  flexDirection: isGMail ? "column" : "column-reverse",
  padding: isGMail ? "10px" : "10px 0px",
}));

const ImageBox = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 72px;
  height: 72px;
`;

export const ModalTab = ({ isGMail, onClick }: Props) => {
  return (
    <StyledTab isGMail={isGMail} onClick={onClick}>
      {isGMail ? (
        <>
          <Typography
            fontSize='10px'
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
            fontSize='12px'
            lineHeight='18px'
            fontWeight={400}
            color='var(--gray-500)'
          >
            Usa Account Google
          </Typography>
        </>
      ) : (
        <>
          <ImageBox>
            <StaticImage
              src='./images/form-line.png'
              alt='Form'
              placeholder='tracedSVG'
            />
          </ImageBox>
          <Typography
            fontSize='12px'
            lineHeight='18px'
            fontWeight={400}
            color='var(--gray-500)'
            align='center'
          >
            Compila manualmente
          </Typography>
        </>
      )}
    </StyledTab>
  );
};
