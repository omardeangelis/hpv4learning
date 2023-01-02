import React from "react"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import styled from "@emotion/styled"
import Box from "@mui/system/Box"
import { GuideItem } from "./GuideItem"

const StyledStack = styled(Box)({
  "& > *:not(:first-of-type)": {
    marginTop: `16px`,
    "@media screen and (min-width: 768px)": {
      marginTop: `24px`,
    },
  },
})

type Props = {
  projects?: Projects
  courseSlug: string | null
}

export type Projects =
  Queries.GuideQuery["allContentfulGuida"]["nodes"][number]["articoli_e_progetti"]

export const GuidesSection = ({ projects, courseSlug }: Props) => (
  <Stack
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    mt="36px"
  >
    <Typography
      fontWeight={600}
      fontSize={{ xs: `34px`, lg: `39px` }}
      lineHeight={{ xs: `39px`, lg: `54px` }}
      textAlign="center"
      mb={{ xs: `16px`, lg: `18px` }}
    >
      Scopri le nostre mini guide
    </Typography>
    <Typography
      fontWeight={400}
      fontSize={{ xs: `18px`, lg: `21px` }}
      lineHeight="29px"
      textAlign="center"
      maxWidth="756px"
      mb={{ xs: `16px`, lg: `18px` }}
    >
      Per chi volesse entrare nel dettaglio e seguire lezioni mirate abbiamo
      creato una serie di guide incrementali
    </Typography>
    {projects ? (
      <StyledStack>
        {projects.map((project) => (
          <GuideItem
            key={project?.articleTitle as string}
            articleTitle={project?.articleTitle}
            descrizione={project?.descrizione}
            body={project?.body}
            copertina={project?.copertina}
            courseSlug={courseSlug}
            slug={project?.slug as string}
          />
        ))}
      </StyledStack>
    ) : null}
  </Stack>
)
