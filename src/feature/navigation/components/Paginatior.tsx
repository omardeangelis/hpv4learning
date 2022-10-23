import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import Box, { BoxProps } from "@mui/system/Box";
import React from "react";
import SeoLink from "../../../components/shared/SeoLink";

type Props = {
  pages: number;
  link: string;
  currentPage: number;
};

interface PageBox extends BoxProps {
  isActive: boolean;
}

const StyledBox = styled(Box)<PageBox>(({ isActive }) => ({
  backgroundColor: isActive ? "#E9E3FF" : "#E4E7EC",
  color: "black",
  fontWeight: 500,
  borderRadius: "50%",
  width: "24px",
  height: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Paginatior = ({ pages, link, currentPage }: Props) => {
  const pageArray = React.useMemo(
    () => Array.from({ length: pages }, (_, index) => index + 1),
    [],
  );

  const spliceStart = React.useMemo(() => {
    if (pages > 3) {
      const start = currentPage < 3 ? 0 : currentPage - 1;
      const end = currentPage > pages - 3 ? pages - 3 : currentPage - 1;
      return start > end ? end : start;
    }
    return 0;
  }, []);

  const partialArray = React.useMemo(() => {
    return [...pageArray].splice(spliceStart, 3);
  }, [pageArray, spliceStart]);

  return (
    <Stack
      spacing='6px'
      direction='row'
      alignItems='center'
      justifyContent='center'
    >
      {currentPage >= 3 ? (
        <React.Fragment key={"first-paginator"}>
          <SeoLink isExternal={false} link={`/${link}/`}>
            <StyledBox isActive={false}>
              <Typography fontSize='14px' lineHeight='18px'>
                {pageArray[0]}
              </Typography>
            </StyledBox>
          </SeoLink>
          <span>...</span>
        </React.Fragment>
      ) : null}
      {partialArray.map((page, index) => {
        return (
          <SeoLink
            key={"paginator-box" + index}
            isExternal={false}
            link={page === 1 ? `/${link}/` : `/${link}/${page}/`}
          >
            <StyledBox isActive={currentPage === page}>
              <Typography fontSize='14px' lineHeight='18px'>
                {page}
              </Typography>
            </StyledBox>
          </SeoLink>
        );
      })}
      {currentPage + 3 <= pageArray[pageArray.length - 1] ? (
        <React.Fragment key={"last-pagiator"}>
          <span>...</span>
          <SeoLink
            isExternal={false}
            link={`/${link}/${pageArray[pageArray.length - 1]}/`}
          >
            <StyledBox
              isActive={currentPage === pageArray[pageArray.length - 1]}
            >
              <Typography fontSize='14px' lineHeight='18px'>
                {pageArray[pageArray.length - 1]}
              </Typography>
            </StyledBox>
          </SeoLink>
        </React.Fragment>
      ) : null}
    </Stack>
  );
};

export default Paginatior;
