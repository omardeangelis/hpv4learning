import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";
import { Stack, Box, Chip, css } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface Props {
  category?: string | null;
  url?: string | null;
  githubUrl?: string | null;
}

const LinkContainer = styled(Box)(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "300",
    color: "#E7A7FF",
    marginRight: "18px",
  }),
);

export const LinkSection = ({ category, url, githubUrl }: Props) => {
  const handleLabel = React.useCallback((category?: string | null) => {
    switch (category) {
      case "javascript":
        return "sviluppatori web";
      case "react":
        return "sviluppatori web";
      case "videomaker":
        return "videomaker";
    }
  }, []);

  const label = React.useMemo(() => {
    return handleLabel(category);
  }, []);

  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <Chip
        label={label}
        variant='outlined'
        sx={{
          height: "20px",
          fontSize: "12px",
          borderRadius: "20px",
          border: "1px solid #E9E3FF",
          color: "#8769FE",
        }}
      />

      <Stack direction='row'>
        {url ? (
          <LinkContainer>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <GatsbyLink to={url} target='_blank'>
              Vedi
            </GatsbyLink>
          </LinkContainer>
        ) : null}

        {githubUrl ? (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          /* @ts-ignore */
          <GatsbyLink to={githubUrl} target='_blank'>
            <GitHubIcon />
          </GatsbyLink>
        ) : null}
      </Stack>
    </Stack>
  );
};
