import React from "react";
import styled from "@emotion/styled";
import { Stack, Box, Chip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import SeoLink from "../../../components/shared/SeoLink";

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
    background-color: #e9e3ff;
  }
`;

const StyledGithubBox = styled(Box)`
  width: 24px;
  height: 24px;
`;

export const LinkSection = ({ category, url, githubUrl }: Props) => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <SeoLink isExternal={false} link={`/progetti/${category}/`}>
        <StyledChip label={category} variant='outlined' />
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
