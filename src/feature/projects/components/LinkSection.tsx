import React from "react";
import styled from "@emotion/styled";
import { Stack, Box, Chip, css } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SeoLink from "../../../components/shared/SeoLink";
import { createSlugFromTitle } from "../utils";

interface Props {
  category?: string | null;
  url?: string | null;
  githubUrl?: string | null;
}

const LinkContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 300;
  color: #e7a7ff;
  margin-right: 18px;

  &:hover {
    color: #8769fe;
    text-decoration: underline;
  }
`;

const StyledChip = styled(Chip)`
  height: 20px;
  font-size: 12px;
  border-radius: 20px;
  border: 1px solid #e9e3ff;
  color: #8769fe;
  cursor: pointer;

  &:hover {
    color: #e7a7ff;
    border-color: #e7a7ff;
  }
`;

const StyledGithubBox = styled(Box)`
  width: 24px;
  height: 24px;
  transition: width 0.01s, height 0.01s;

  &:hover {
    width: 32px;
    height: 32px;
    transition: width 1s, height 1s;
  }
`;

export const LinkSection = ({ category, url, githubUrl }: Props) => {
  const handleLabel = React.useCallback((category?: string | null) => {
    switch (category) {
      case "javascript":
        return "sviluppatori web";
      case "react":
        return "sviluppatori web";
      case "videomaker":
        return "videomakers";
    }
  }, []);

  const label = React.useMemo(() => {
    return handleLabel(category);
  }, []);

  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <SeoLink
        isExternal={false}
        link={`/corsi/${createSlugFromTitle(label)}/`}
      >
        <StyledChip label={label} variant='outlined' />
      </SeoLink>

      <Stack direction='row'>
        {url ? (
          <LinkContainer>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <SeoLink link={url} isExternal target='_blank'>
              Vedi
            </SeoLink>
          </LinkContainer>
        ) : null}

        {githubUrl ? (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          /* @ts-ignore */
          <SeoLink link={githubUrl} isExternal target='_blank'>
            <StyledGithubBox>
              <GitHubIcon
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </StyledGithubBox>
          </SeoLink>
        ) : null}
      </Stack>
    </Stack>
  );
};
