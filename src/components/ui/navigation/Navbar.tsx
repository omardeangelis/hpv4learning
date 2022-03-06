import React from "react";
//Material UI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

//Icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
//gatsby
import { Link as GastbyLink } from "gatsby";
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
  border-bottom: 1px solid var(--purple-200);
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

const Navbar = () => {
  const ctx = useLayoutContext();
  return (
    <>
      <StyledNav>
        <Container maxWidth='lg'>
          <Stack direction='row' alignItems='center' height='72px'>
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
            <StyledCenter>
              <Stack
                direction='row'
                justifyContent='space-around'
                alignItems='center'
                spacing={2}
                sx={{
                  flex: 1,
                }}
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
                        color='gray.800'
                      >
                        Home
                      </Typography>
                      <HomeIcon
                        sx={{
                          color: "purple.400",
                        }}
                      />
                    </Stack>
                  </Box>
                </GastbyLink>

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
                      color='gray.800'
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
                        color='gray.800'
                      >
                        Chi siamo
                      </Typography>
                      <AssignmentIndIcon
                        sx={{
                          color: "purple.400",
                        }}
                      />
                    </Stack>
                  </Box>
                </GastbyLink>
              </Stack>
            </StyledCenter>
            <StyledRight>
              <Stack
                direction='row'
                justifyContent='flex-end'
                alignItems='center'
              >
                <IconButton color='default' onClick={ctx?.toggleSidebar}>
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
