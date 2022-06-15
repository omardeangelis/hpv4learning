import React from "react";
import styled from "@emotion/styled";
import { Stack, Box, css } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface Props {
  category: string;
  url?: string;
}

const CategoryChip = styled(Box)(
  css({
    width: ["120px", "130px"],
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    border: "1px solid #E9E3FF",
    color: "#8769FE",
    fontSize: "12px",
  })
);

const LinkStack = styled(Stack)(css({}));

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

const LinkSection = ({ category, url }: Props) => {
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
      <CategoryChip>{label}</CategoryChip>

      <LinkStack direction='row'>
        {url && (
          <LinkContainer>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              Vedi
            </a>
          </LinkContainer>
        )}

        <a href={url} target='_blank' rel='noopener noreferrer'>
          <GitHubIcon />
        </a>
      </LinkStack>
    </Stack>
  );
};

export default LinkSection;
