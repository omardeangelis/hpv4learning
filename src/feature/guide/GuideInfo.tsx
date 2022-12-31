import React from "react"
import { Info, PureCssStack } from "../home"
import { Project } from "./GuidesSection"

type Props = {
  projects: Project[] | null
  courseMinutes: number | null
  price: number | null
}

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
