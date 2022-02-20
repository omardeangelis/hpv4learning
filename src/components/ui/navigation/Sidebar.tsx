import React from "react";
//Material UI
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container/Container";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
//Icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CodeIcon from "@mui/icons-material/Code";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BeenhereIcon from "@mui/icons-material/Beenhere";
//Gatsby
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
//Global Context
import { useLayoutContext } from "../../../context/layout";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import useDropDown from "../../../hook/useDropDown";
import styled from "@emotion/styled";
import { CategoryType } from "../../../types/layout";

type Props = {
  allContentfulCorsi: {
    nodes: CategoryType[];
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

  const getIcon = React.useCallback((type: string) => {
    switch (type) {
      case "videomaking":
        return <VideoCallIcon fontSize='small' color='primary' />;
      case "sviluppo web":
        return <CodeIcon fontSize='small' color='primary' />;
      default:
        return <BeenhereIcon fontSize='small' color='primary' />;
    }
  }, []);
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
            <GatsbyLink to='/' onClick={ctx?.toggleSidebar}>
              <Box py='18px'>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <HomeIcon color='primary' />
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
                </Stack>
              </Box>
            </GatsbyLink>

            <Box py='18px'>
              <Stack
                direction='row'
                spacing={2}
                alignItems='center'
                onClick={() => toggleMenu("corsi")}
              >
                <SchoolIcon color='primary' />
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
                <ExpandMoreIcon />
              </Stack>
              <Box id='corsi-menu' pt='18px' pl='8px'>
                {data.allContentfulCorsi.nodes.map((item) => {
                  return (
                    <GatsbyLink to='/' onClick={ctx?.toggleSidebar}>
                      <Box py='18px'>
                        <Stack direction='row' spacing={2} alignItems='center'>
                          {getIcon(item.categoria)}
                          <Typography
                            sx={{
                              fontSize: "1rem",
                              lineHeight: "unset",
                              fontWeight: 500,
                            }}
                            variant='button'
                            color='primary'
                          >
                            {item.categoria}
                          </Typography>
                        </Stack>
                      </Box>
                    </GatsbyLink>
                  );
                })}
              </Box>
            </Box>
            <GatsbyLink to='/' onClick={ctx?.toggleSidebar}>
              <Box py='18px'>
                <Stack direction='row' spacing={2} alignItems='center'>
                  <AssignmentIndIcon color='primary' />
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
                </Stack>
              </Box>
            </GatsbyLink>
          </Box>
        </Stack>
      </Container>
    </StyledDrawer>
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

export default Sidebar;
