import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styled from "@emotion/styled";
import { data } from "../../../asset/footerdata";
import SeoLink from "../../shared/SeoLink";
import { StaticImage } from "gatsby-plugin-image";
import useDropDownMenu from "../../../hook/useDropDown";

const CustomStack = styled(Box)`
  a:hover {
    p {
      color: var(--grey-800) !important;
    }
  }

  & > *:not(:first-of-type) {
    margin-top: 12px;
  }

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    [id*="menu"] {
      display: block;
    }
    & > *:not(:first-of-type) {
      margin-top: 0px;
    }

    .icon-container {
      display: none;
    }
  }
`;

const Footer = ({ enableFooterPadding }: { enableFooterPadding?: boolean }) => {
  const { toggleMenu } = useDropDownMenu(data.map((el) => el.id));

  return (
    <Box
      component='footer'
      sx={{
        pb: { xs: enableFooterPadding ? "96px" : "32px", lg: "96px" },
        pt: { xs: "64px", lg: "96px" },
      }}
    >
      <Container maxWidth='lg'>
        <CustomStack>
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            <SeoLink isExternal={false} link='/'>
              <Box
                sx={{
                  mb: { xs: "24px", md: "0px" },
                  zIndex: 1,
                }}
              >
                <StaticImage
                  src='../../../images/logo.png'
                  alt='Logo Hpv 4 Learning'
                  placeholder='tracedSVG'
                  layout='fixed'
                  height={70}
                  width={70}
                />
              </Box>
            </SeoLink>
          </Box>
          {data.map((el) => {
            return (
              <Box key={el.id}>
                <Stack
                  direction='row'
                  alignItems='center'
                  justifyContent={["space-between", "flex-start"]}
                  onClick={() => toggleMenu(el.id)}
                  width='100%'
                >
                  <Typography
                    color='grey.700'
                    fontWeight={500}
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {el.title}
                  </Typography>
                  <Box
                    className='icon-container'
                    sx={{
                      display: { xs: "block", lg: "none" },
                    }}
                  >
                    <ExpandMoreIcon
                      fontSize='small'
                      sx={{
                        color: "purple.800",
                      }}
                    />
                  </Box>
                </Stack>
                <Box mt='8px' id={`${el.id}-menu`}>
                  {el.items.map((item) => {
                    return (
                      <Box
                        key={item.slug}
                        sx={{
                          py: {
                            xs: "5px",
                            lg: "6px",
                          },
                        }}
                      >
                        <SeoLink
                          link={item.slug}
                          isExternal={item.isExternal}
                          rel={item.isExternal ? "nofollow" : "internal"}
                          target={item.isExternal ? "_blank" : "self"}
                        >
                          <Typography
                            color='grey.600'
                            fontWeight={300}
                            sx={{
                              fontSize: "12px",
                            }}
                          >
                            {item.title}
                          </Typography>
                        </SeoLink>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </CustomStack>
      </Container>
    </Box>
  );
};

export default Footer;
