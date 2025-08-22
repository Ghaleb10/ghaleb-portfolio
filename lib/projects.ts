import { projectsData } from "../app/(data)/projects"


export type Project = typeof projectsData[number]

export function getProjects(): Project[] {
  return projectsData
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug)
}
