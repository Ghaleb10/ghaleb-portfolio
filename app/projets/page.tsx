import { ProjectGrid } from "../../components/ProjectGrid"
import { getProjects } from "../../lib/projects"

export const metadata = {
  title: 'Projets – Portfolio'
}

export default function ProjetsPage() {
  const projects = getProjects()
  return (
    <div className="space-y-12 mt-28">
      <h1 className="text-3xl font-bold">Tous les projets</h1>
      <ProjectGrid projects={projects} />
    </div>
  )
}
