import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "@emotion/styled";
import { Stack, Box, Chip, css } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface Props {
  category: string;
  url?: string;
  githubUrl: string;
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
  })
);

const LinkSection = ({ category, url, githubUrl }: Props) => {
  const handleLabel = React.useCallback((category: string) => {
    let label;
    switch (category) {
      case "javascript":
        return (label = "sviluppatori web");
      case "react":
        return (label = "sviluppatori web");
      case "videomaker":
        return (label = "videomaker");
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
        {url && (
          <LinkContainer>
            {/* @ts-ignore */}
            <GatsbyLink to={url} target='_blank'>
              Vedi
            </GatsbyLink>
          </LinkContainer>
        )}

        {githubUrl && (
          /* @ts-ignore */
          <GatsbyLink to={githubUrl} target='_blank'>
            <GitHubIcon />
          </GatsbyLink>
        )}
      </Stack>
    </Stack>
  );
};

export default LinkSection;
