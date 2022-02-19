import React, { useState } from "react";
//Material UI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//Context
import { useGlobalContext } from "../../../context";
//Icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
//gatsby
import { Link as GastbyLink, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Stack } from "@mui/material";
import styled from "@emotion/styled";
import CourseMenu from "./CourseMenu";
import { useLayoutContext } from "../../../context/layout";

const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background: white;
  z-index: 99999999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
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

const Navbar = () => {
  const ctx = useLayoutContext();
  return (
    <>
      <StyledNav>
        <Container maxWidth='lg'>
          <Stack direction='row' alignItems='center' spcing={4} height='72px'>
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
            <Stack
              sx={{
                flex: 1,
              }}
              direction='row'
              justifyContent='space-around'
              align='center'
              spacing={2}
            >
              <GastbyLink to='/'>
                <Box role='_link'>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "unset",
                        fontWeight: 500,
                      }}
                      variant='button'
                      color='primary'
                    >
                      Home
                    </Typography>
                    <HomeIcon color='primary' />
                  </Stack>
                </Box>
              </GastbyLink>

              <Box
                role='_link'
                id='course_opener'
                onClick={(e) => {
                  ctx.toggleCourseMenu();
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
                    variant='button'
                    color='primary'
                  >
                    Corsi
                  </Typography>
                  <ArrowDropDownIcon />
                </Stack>
              </Box>
              <GastbyLink to='/'>
                <Box role='_link'>
                  <Stack direction='row' spacing={2} alignItems='center'>
                    <Typography
                      sx={{
                        fontSize: "1rem",
                        lineHeight: "unset",
                        fontWeight: 500,
                      }}
                      variant='button'
                      color='primary'
                    >
                      Chi siamo
                    </Typography>
                    <AssignmentIndIcon color='primary' />
                  </Stack>
                </Box>
              </GastbyLink>
            </Stack>
          </Stack>
        </Container>
      </StyledNav>
      <Box height='72px' width='100px'></Box>
      <CourseMenu />
    </>
  );
};

const query = graphql`
  {
    allContentfulCorsi {
      nodes {
        slug
        categoria
      }
    }
  }
`;

export default Navbar;
