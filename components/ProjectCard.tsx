'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TechPills } from './TechPills'

export type Project = {
  slug: string
  titre: string
  resume: string
  stack: string[]
  lienDemo?: string
  lienCode?: string
  images?: string[]
  role?: string
  defis?: string[]
  solutions?: string[]
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const img = project.images?.[0] ??
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group rounded-2xl overflow-hidden border border-zinc-200/20 bg-white dark:bg-gray-900 hover:shadow-lg"
    >
      <Link href={`/projets/${project.slug}`} aria-label={`Voir le projet ${project.titre}`}>
        <div className="relative aspect-[16/9]">
          <Image
            src={img}
            alt={project.titre}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index < 2}
          />
        </div>
        <div className="p-4 space-y-4">
          <h3 className="text-lg font-semibold">{project.titre}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{project.resume}</p>
          <TechPills stack={project.stack} />
          <div className="pt-1 text-sm text-blue-600">Voir le cas d&apos;étude →</div>
        </div>
      </Link>
    </motion.article>
  )
}
