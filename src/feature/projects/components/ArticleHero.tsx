import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/system/Box"
import { css } from "@mui/material"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import dayjs from "dayjs"
import { LinkSection } from "./LinkSection"

export const Styledtypography = styled(Typography)(
  css({
    color: `#6C757D`,
    fontSize: `14px`,
    lineHeight: `18px`,
    fontWeight: `300`,
  })
)

const StyledBox = styled(Box)(
  css({
    width: `100%`,
    padding: `15px`,
    borderLeft: `6px solid #1AC99F`,
    marginTop: [`25px`, `36px`],
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    overflowX: `hidden`,
    borderRadius: `0px 8px 8px 0px`,
  })
)

export const ArticleHero = (
  props: Omit<Queries.SingleProjectQuery["project"], "id">
) => {
  const {
    meta_title,
    url,
    createdAt,
    metaDescription,
    project_category,
    linkGithub,
    body,
  } = props as NonNullable<Queries.SingleProjectQuery["project"]>

  return (
    <div>
      <LinkSection
        category={project_category?.[0]?.slug}
        url={url}
        githubUrl={linkGithub}
      />
      <Box mx="auto" sx={{ marginTop: `10px` }}>
        <Typography
          component="h1"
          fontWeight={600}
          sx={{
            fontSize: { xs: `36px`, lg: `48px` },
            lineHeight: { xs: `44px`, lg: `56px` },
          }}
        >
          {meta_title}
        </Typography>
      </Box>

      <Stack direction="row" spacing="20px" alignItems="center" mt="10px">
        <Styledtypography variant="caption">By Hpv4Learning</Styledtypography>
        {body?.childMarkdownRemark?.timeToRead ? (
          <Styledtypography
            variant="caption"
            sx={{
              display: `flex`,
              alignItems: `center`,
              gap: `7px`,
            }}
          >
            <AccessTimeIcon /> {body?.childMarkdownRemark?.timeToRead} min
          </Styledtypography>
        ) : null}
        {createdAt ? (
          <Styledtypography variant="caption">
            {dayjs(createdAt).format(`DD/MM/YYYY`)}
          </Styledtypography>
        ) : null}
      </Stack>

      {metaDescription && (
        <StyledBox
          sx={{
            backgroundColor: `grey.100`,
          }}
        >{`"${metaDescription}"`}</StyledBox>
      )}
    </div>
  )
}
