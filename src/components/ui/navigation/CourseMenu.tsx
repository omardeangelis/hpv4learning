import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import useHasMounted from "../../../hook/useHasMounted";
import { useLayoutContext } from "../../../context/layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import { CategoryMenuProps } from "../../../types/layout";

const StyledBox = styled(Box)`
  & [role="_hover"] {
    cursor: pointer;
    transition: all 125ms ease;
    border: 1px solid transparent;
    &:hover {
      background: rgba(98, 0, 238, 0.025);
      border: 1px solid rgba(98, 0, 238, 0.05);
      box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.04);
    }
  }
`;

const StyledImage = styled.img`
  max-width: 91px;
  height: 100%;
  width: 100%;
`;

const MenuContainer = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

type Props = {
  allContentfulCategory: {
    nodes: CategoryMenuProps[];
  };
};

const CourseMenu = () => {
  const anchorRef = React.useRef<HTMLDivElement | undefined>();
  const hasMounted = useHasMounted();

  const ctx = useLayoutContext();

  const handleOutSideClick = React.useCallback((e: MouseEvent) => {
    if (!anchorRef.current && !anchorRef) {
      return;
    }

    const isOutSideClick =
      e.target !== anchorRef.current ||
      !Array.from(anchorRef.current.childNodes).some((x) => x === e.target);

    if (isOutSideClick) {
      ctx?.handleClickAway();
    }
  }, []);
  const data: Props = useStaticQuery(query);

  React.useEffect(() => {
    if (hasMounted && ctx?.isCourseMenuOpen) {
      document.addEventListener("click", handleOutSideClick);
      return () => document.removeEventListener("click", handleOutSideClick);
    }
  }, [hasMounted, ctx?.isCourseMenuOpen]);

  return (
    <MenuContainer>
      {ctx?.isCourseMenuOpen ? (
        <Box ref={anchorRef}>
          <StyledBox
            position='fixed'
            top='96px'
            left='0px'
            right='0px'
            width='100%'
            zIndex={99}
          >
            <Container maxWidth='lg'>
              <Box
                px='24px'
                py='36px'
                borderRadius='16px'
                sx={{
                  border: "1px solid",
                  borderColor: "purple.200",
                  background: "white",
                }}
              >
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  {data.allContentfulCategory.nodes.map(
                    ({ name, slug, image, seoDescription }) => {
                      return (
                        <Link to={`/corsi/${slug}/`} key={slug}>
                          <Box
                            px='16px'
                            py='24px'
                            maxWidth='343px'
                            width='100%'
                            role='_hover'
                            borderRadius='16px'
                          >
                            <Stack
                              direction='row'
                              alignItems='center'
                              spacing={4}
                            >
                              <Box
                                height='91px'
                                maxWidth='91px'
                                width='100%'
                                borderRadius='12px'
                                sx={{
                                  backgroundColor: "purple.300",
                                  flexGrow: 1,
                                }}
                              >
                                <StyledImage
                                  src={image && image.file.url}
                                  alt='category image'
                                />
                              </Box>
                              <Box>
                                <Typography variant='subtitle1'>
                                  {name}
                                </Typography>
                                <Box lineHeight='12px'>
                                  <Typography variant='caption'>
                                    {seoDescription}
                                  </Typography>
                                </Box>
                              </Box>
                            </Stack>
                          </Box>
                        </Link>
                      );
                    }
                  )}
                </Stack>
              </Box>
            </Container>
          </StyledBox>
        </Box>
      ) : null}
    </MenuContainer>
  );
};

const query = graphql`
  {
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

export default CourseMenu;
