import React from "react";
//Material UI
import Container from "@mui/material/Container/Container";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
//Icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//Gatsby
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
//Global Context
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import useDropDown from "../../../hook/useDropDown";
import styled from "@emotion/styled";
import { CategoryMenuProps } from "../../../types/layout";
import { getIcon as getLayoutIcon } from "../utils";
import { getIcon } from "../../../utils/general";
import { useNavigationLink } from "../hooks/useNavigationLink";
import { useSelector } from "react-redux";
import { toggleSidebar } from "../../../store/reducers/uiSlice";
import { RootState } from "../../../store";

type Props = {
  allContentfulCategory: {
    nodes: CategoryMenuProps[];
  };
};

const StyledDrawer = styled(SwipeableDrawer)`
  z-index: 3;
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const Sidebar = () => {
  const data: Props = useStaticQuery(query);
  const { isSidebarOpen } = useSelector((state: RootState) => state.ui);

  const { toggleMenu } = useDropDown(["corsi"]);
  const links = useNavigationLink();

  return (
    <StyledDrawer
      anchor='left'
      open={isSidebarOpen}
      onClose={() => null}
      onOpen={() => null}
      PaperProps={{
        sx: {
          width: "100%",
        },
      }}
      sx={{
        width: "100%",
      }}
    >
      <Box height='72px' />
      <Container maxWidth='lg'>
        <Stack direction='row' justifyContent='flex-start'>
          <Box pt='24px'>
            {links.map(({ text, icon, link }) => {
              if (!link) {
                return (
                  <Box py='18px' key={text}>
                    <Stack
                      direction='row'
                      spacing={2}
                      alignItems='center'
                      onClick={() => toggleMenu("corsi")}
                    >
                      {getLayoutIcon("school", {
                        color: "purple.400",
                      })}
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
                      <ExpandMoreIcon />
                    </Stack>

                    <Box id='corsi-menu' pt='18px' pl='8px'>
                      {data.allContentfulCategory.nodes.map(
                        ({ name, slug }) => {
                          return (
                            <React.Fragment key={name}>
                              {/* @ts-ignore gatsby link as broken type. Update as soon as possible */}
                              <GatsbyLink
                                to={`/corsi/${slug}/`}
                                onClick={toggleSidebar}
                                key={slug}
                              >
                                <Box py='18px'>
                                  <Stack
                                    direction='row'
                                    spacing={2}
                                    alignItems='center'
                                  >
                                    {getIcon(slug)}
                                    <Typography
                                      sx={{
                                        fontSize: "1rem",
                                        lineHeight: "unset",
                                        fontWeight: 500,
                                      }}
                                      color='gray.800'
                                    >
                                      {name}
                                    </Typography>
                                  </Stack>
                                </Box>
                              </GatsbyLink>
                            </React.Fragment>
                          );
                        },
                      )}
                    </Box>
                  </Box>
                );
              }
              return (
                <React.Fragment key={text}>
                  {/* @ts-ignore gatsby link as broken type. Update as soon as possible*/}
                  <GatsbyLink to={link} onClick={toggleSidebar}>
                    <Box py='18px'>
                      <Stack direction='row' spacing={2} alignItems='center'>
                        {getLayoutIcon(icon, {
                          color: "purple.400",
                        })}
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            lineHeight: "unset",
                            fontWeight: 500,
                          }}
                          color='grey.800'
                        >
                          {text}
                        </Typography>
                      </Stack>
                    </Box>
                  </GatsbyLink>
                </React.Fragment>
              );
            })}
          </Box>
        </Stack>
      </Container>
    </StyledDrawer>
  );
};

const query = graphql`
  query SidebarCourseLink {
    allContentfulCategory {
      nodes {
        slug
        name
        seoDescription
        image {
          file {
            url
          }
        }
      }
    }
  }
`;
