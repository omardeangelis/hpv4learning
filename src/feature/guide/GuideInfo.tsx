import React from "react"
import styled from "@emotion/styled"
import Box from "@mui/material/Box"
import { Info } from "../home"

type Props = {
  projects?: Queries.GuideQuery["allContentfulGuida"]["nodes"][number]["articoli_e_progetti"]
  courseMinutes?: number | null
  price?: number | null
}

export const PureCssStack = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > *:not(:first-of-type) {
    margin-top: 16px;
  }
  @media screen and (min-width: 767px) {
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > * {
      margin-top: 0px;
      &:not(:first-of-type) {
        margin-top: 0px;
        margin-left: 48px;
      }
    }
  }
`

export const GuideInfo = ({ projects, courseMinutes, price }: Props) => (
  <PureCssStack>
    {projects ? (
      <Info title={projects.length} subtitle="Articoli e Guide pratiche" />
    ) : null}
    {courseMinutes ? (
      <Info
        title={courseMinutes / 60}
        subtitle="Minuti di videocorso pratico"
      />
    ) : null}
    {price ? (
      <Info title={`${price / 100} €`} subtitle="Prezzo del corso completo" />
    ) : null}
  </PureCssStack>
)
