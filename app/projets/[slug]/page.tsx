// app/projets/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getProjectBySlug, getProjects } from '../../../lib/projects'
import ProjectHero from './ProjectHero'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params) {
  const project = getProjectBySlug((await params).slug)
  if (!project) return {}
  return {
    title: `${project.titre} – Projet`,
    description: project.resume,
  }
}

export default async function ProjectPage({ params }: Params) {
  const slug = (await params).slug
  const project = getProjectBySlug(slug)
  if (!project) return notFound()

  const img =
    project.images?.[0] ??
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'

  return (
    <article className="space-y-8 mt-28">
      <ProjectHero
        title={project.titre}
        description={project.resume}
        stack={project.stack}
        role={project.role}
        demoUrl={project.lienDemo}
        image={img}
      />
    </article>
  )
}