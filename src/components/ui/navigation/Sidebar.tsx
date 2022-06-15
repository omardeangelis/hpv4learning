import React from "react";
//Material UI
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container/Container";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
//Icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//Gatsby
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
//Global Context
import { useLayoutContext } from "../../../context/layout";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import useDropDown from "../../../hook/useDropDown";
import styled from "@emotion/styled";
import { CategoryMenuProps } from "../../../types/layout";
import { getIcon as getLayoutIcon } from "../../../feature/navigation/utils";
import { getIcon } from "../../../utils/general";
import { useNavigationLink } from "../../../feature/navigation/hooks/useNavigationLink";

type Props = {
  allContentfulCategory: {
    nodes: CategoryMenuProps[];
  };
};

const useStyles = makeStyles(() => ({
  paper: {
    width: "100%",
  },
}));

const StyledDrawer = styled(SwipeableDrawer)`
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Sidebar = () => {
  const classes = useStyles();
  const data: Props = useStaticQuery(query);
  const ctx = useLayoutContext();

  const { toggleMenu } = useDropDown(["corsi"]);
  const links = useNavigationLink();

  return (
    <StyledDrawer
      anchor='left'
      open={ctx?.isSidebarOpen || false}
      onClose={() => null}
      onOpen={() => null}
      classes={{
        paper: classes.paper,
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
                  <Box py='18px'>
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
                                onClick={ctx?.toggleSidebar}
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
                  <GatsbyLink to={link} onClick={ctx?.toggleSidebar}>
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

export default Sidebar;
