'use client'

import { useMemo, useState } from 'react'
import { ProjectCard, type Project } from './ProjectCard'
import { motion } from 'framer-motion'

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const allTags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.stack?.forEach((s) => set.add(s)))
    return ['Tous', ...Array.from(set)]
  }, [projects])

  const [filter, setFilter] = useState('Tous')

  const filtered = useMemo(() => {
    if (filter === 'Tous') return projects
    return projects.filter((p) => p.stack?.includes(filter))
  }, [filter, projects])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-3 py-1 rounded-full border text-sm ${
              filter === tag ? 'bg-blue-600 text-white border-blue-600' : 'bg-white/60 dark:bg-white/10'
            }`}
            aria-pressed={filter === tag}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </motion.div>
    </div>
  )
}
