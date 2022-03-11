import React from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";

const CustomStack = styled.div`
  & > *:not(:last-of-type) {
    margin-bottom: 24px;
  }

  transition: all 125ms ease;

  .banner-action {
    display: flex;
    justify-content: center;
    align-items: center;
    & > *:not(:last-of-type) {
      margin-right: 12px;
    }
  }

  .banner-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media screen and (min-width: 767px) {
    & > *:not(:last-of-type) {
      margin-bottom: 0px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    .banner-action {
      justify-content: flex-start;
      margin-right: auto;
      button:hover {
        background: #121212;
      }
    }

    .banner-left {
      flex-direction: column;
      justify-content: flex-start;
      align-items: initial;
      text-align: left;
      transition: all 125ms ease;
    }
  }
`;

const DiscordBanner = () => {
  const [type, setType] = React.useState<"discord" | "youtube">("discord");
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundColor: type === "youtube" ? "red.300" : "purple.800",
      }}
    >
      <Box
        sx={{
          py: { xs: "26px", lg: "55px" },
        }}
      >
        <Container maxWidth='lg'>
          <Box>
            <CustomStack>
              <Box className='banner-left'>
                <Box className='banner-action'>
                  <Button
                    size={sm ? "small" : "medium"}
                    sx={{
                      background: "#000",
                      color: "blue.400",
                      borderRadius: "100px",
                    }}
                    onClick={() => setType("discord")}
                  >
                    Discord
                  </Button>

                  <Button
                    size={sm ? "small" : "medium"}
                    sx={{
                      background: "#000",
                      color: "red.300",
                      borderRadius: "100px",
                    }}
                    onClick={() => setType("youtube")}
                  >
                    Youtube
                  </Button>
                </Box>

                <Box
                  sx={{
                    mt: { xs: "18px", lg: "48px" },
                    maxWidth: { xs: "312px", lg: "442px" },
                  }}
                >
                  <Typography
                    fontWeight={500}
                    color={type === "youtube" ? "white" : "purple.400"}
                    sx={{
                      fontSize: { xs: "24px", lg: "36px" },
                      lineHeight: { xs: "30px", lg: "44px" },
                    }}
                  >
                    Unisciti all Community
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: { xs: "12px", lg: "24px" },
                    maxWidth: { xs: "312px", lg: "374px" },
                  }}
                >
                  <Typography
                    fontWeight={400}
                    color={type === "youtube" ? "white" : "purple.400"}
                    sx={{
                      fontSize: { xs: "14px", lg: "18px" },
                      lineHeight: { xs: "18px", lg: "22px" },
                    }}
                  >
                    {`Unisciti al nostro canale ${type} per rimanere sempre aggiornato sui nostri contenuti, sconti ed iniziative.`}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: { xs: "12px", lg: "24px" },
                    mx: { xs: "auto", sm: "unset" },
                  }}
                >
                  <a
                    rel='noopener'
                    target='_blank'
                    href={
                      type === "discord"
                        ? "https://discord.gg/pNhjB78F"
                        : "https://www.youtube.com/c/HPVfilm"
                    }
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant='contained'
                      color='primary'
                      endIcon={
                        <ArrowRightAltSharpIcon
                          sx={{
                            color: type === "youtube" ? "red.300" : "black",
                          }}
                        />
                      }
                      size={sm ? "medium" : "large"}
                      sx={{
                        borderColor: "#000",
                        borderRadius: "100px",
                        color: type === "youtube" ? "red.300" : "black",
                        background: type === "youtube" ? "white" : "pruple.400",
                      }}
                    >
                      Unisciti
                    </Button>
                  </a>
                </Box>
              </Box>
              <Box
                sx={{
                  mx: { xs: "auto", sm: "unset" },
                  maxWidth: { xs: "182px", lg: "358px" },
                  maxHeight: { xs: "182px", lg: "358px" },
                  height: "100%",
                  width: "100%",
                  display: "flex",
                }}
              >
                <img
                  style={{ width: "100%" }}
                  src={`/${type}-img.png`}
                  alt={`banner ${type}`}
                />
              </Box>
            </CustomStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DiscordBanner;
