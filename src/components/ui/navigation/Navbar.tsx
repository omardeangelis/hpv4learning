import React from "react";
//Material UI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
//Icon
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
//gatsby
import { Link as GastbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import CourseMenu from "./CourseMenu";
import { useLayoutContext } from "../../../context/layout";
import { useNavigationLink } from "../../../feature/navigation/hooks/useNavigationLink";
import { getIcon } from "../../../feature/navigation/utils";

const StyledNav = styled(Box)`
  width: 100%;
  /* position: fixed; */
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 99999999;
  [role="_link"] {
    border: 1px solid transparent;
    transition: all 125ms ease;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 100px;
    &:hover {
      background: rgba(98, 0, 238, 0.025);
      border: 1px solid rgba(98, 0, 238, 0.05);
    }
  }
`;

const StyledCenter = styled(Box)`
  display: none;
  flex: 1;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const StyledRight = styled(Box)`
  display: block;
  flex: 1;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Navbar = ({ disableColor }: { disableColor?: true }) => {
  const ctx = useLayoutContext();
  const links = useNavigationLink();
  return (
    <>
      <StyledNav
        component='nav'
        sx={{
          background: disableColor ? "transparent" : "white",
          borderBottom: "1px solid",
          borderBottomColor: disableColor ? "transparent" : "purple.200",
          position: disableColor ? "absolute" : "fixed",
        }}
      >
        <Container maxWidth='lg'>
          <Stack direction='row' alignItems='center' height='72px'>
            {/* @ts-ignore gatsby link as broken type. Update as soon as possible*/}
            <GastbyLink
              to='/'
              style={{
                textDecoration: "none",
              }}
            >
              <Box>
                <StaticImage
                  src='../../../images/logo.png'
                  alt='Logo Hpv 4 Learning'
                  placeholder='tracedSVG'
                  layout='fixed'
                  height={70}
                  width={70}
                />
              </Box>
            </GastbyLink>
            <StyledCenter>
              <Stack
                direction='row'
                justifyContent='space-around'
                alignItems='center'
                sx={{
                  flex: 1,
                }}
              >
                {links.map(({ text, link, icon }) => {
                  if (!link) {
                    return (
                      <Box
                        role='_link'
                        id='course_opener'
                        onClick={(e) => {
                          ctx?.toggleCourseMenu();
                          e.stopPropagation();
                        }}
                      >
                        <Stack direction='row' spacing={2} alignItems='center'>
                          <Typography
                            sx={{
                              fontSize: "1rem",
                              lineHeight: "unset",
                              fontWeight: 500,
                            }}
                            color={disableColor ? "white" : "gray.800"}
                          >
                            {text}
                          </Typography>
                          {getIcon(icon, {
                            color: disableColor ? "white" : "inherit",
                          })}
                        </Stack>
                      </Box>
                    );
                  }
                  return (
                    <>
                      {/* @ts-ignore gatsby link as broken type. Update as soon as possible*/}
                      <GastbyLink to={link}>
                        <Box role='_link'>
                          <Stack
                            direction='row'
                            spacing={2}
                            alignItems='center'
                          >
                            <Typography
                              sx={{
                                fontSize: "1rem",
                                lineHeight: "unset",
                                fontWeight: 500,
                              }}
                              color={disableColor ? "white" : "gray.800"}
                            >
                              {text}
                            </Typography>
                            {getIcon(icon, {
                              color: disableColor ? "white" : "purple.400",
                            })}
                          </Stack>
                        </Box>
                      </GastbyLink>
                    </>
                  );
                })}
              </Stack>
            </StyledCenter>
            <StyledRight>
              <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
              >
                <IconButton
                  color='default'
                  onClick={ctx?.toggleSidebar}
                  sx={{
                    background: disableColor ? "#E9E3FF" : "inherit",
                  }}
                >
                  <MenuRoundedIcon />
                </IconButton>
              </Stack>
            </StyledRight>
          </Stack>
        </Container>
      </StyledNav>
      <Box height='72px' width='100px'></Box>
      <CourseMenu />
    </>
  );
};
export default Navbar;
