// components/ProjectHero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { TechPills } from '../../../components/TechPills'
import { ChevronLeft } from 'lucide-react'

type Props = {
  title: string
  description: string
  stack: string[]
  role?: string
  demoUrl?: string
  image: string
}

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', delay: d } },
})

export default function ProjectHero({
  title,
  description,
  stack,
  role,
  demoUrl,
  image,
}: Props) {
  const router = useRouter()

  return (
    <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Bouton retour */}
      <button
        onClick={() => router.back()}
        className="m-4 inline-flex items-center gap-2 text-md text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      >
        <ChevronLeft /> Retour
      </button>

      {/* décor subtil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10"
      />

      <div className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-8 lg:p-12">
        {/* Colonne texte */}
        <div className="relative z-10">
          <motion.h1 {...fade(0.02)} className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {title}
          </motion.h1>

          <motion.p {...fade(0.08)} className="mt-3 max-w-xl text-base text-gray-600 dark:text-gray-300">
            {description}
          </motion.p>

          <motion.div {...fade(0.12)} className="mt-5 space-y-3">
            <TechPills stack={stack} />
            {role && (
              <span className="inline-flex items-center rounded-full border bg-white/70 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm backdrop-blur dark:bg-white/10 dark:text-gray-200">
                Rôle : {role}
              </span>
            )}
          </motion.div>

          {demoUrl && (
            <motion.div {...fade(0.16)} className="mt-7">
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
              >
                Voir la démo
              </a>
            </motion.div>
          )}
        </div>

        {/* Visuel */}
        <motion.div {...fade(0.1)} className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40" />
        </motion.div>
      </div>
    </section>
  )
}