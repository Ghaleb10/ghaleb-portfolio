// components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: d } },
})

export function Hero() {
  return (
    <section className="w-full h-screen overflow-hidden text-white">
      {/* décor de fond */}
      <div
        aria-hidden
        className="pointer-events-none fixed -left-20 -top-28 h-96 w-96 rounded-full bg-[#0ea5e9]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-24 top-24 h-[420px] w-[420px] rounded-[2rem] bg-[#10b981]/20 opacity-50"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute right-10 top-10 hidden h-24 w-24 text-black/20 drop-shadow sm:block"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M50 5l35 20v50L50 95 15 75V25L50 5Z" stroke="currentColor" strokeWidth="6" />
      </svg>

      <div className="py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Col texte */}
          <div className="relative z-10 mb-0 lg:mb-32">
            <motion.p {...fadeUp(0.05)} className="mb-6 text-xs font-medium tracking-widest text-black dark:text-white/60">
              Bonjour, Je suis
            </motion.p>

            <motion.h1
              {...fadeUp(0.1)}
              className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl flex-row gap-4"
            >
              {/* <span className="text-white">UI &amp; UX </span> */}
              <span className="bg-gradient-to-r from-[#2563eb] to-[#34d399] bg-clip-text text-transparent">
                Développeur <span className="text-black dark:text-white">React / Next Js</span>
              </span>
              
            </motion.h1>

            <motion.p
              {...fadeUp(0.18)}
              className="mt-12 max-w-xl text-md lg:text-lg text-balance text-black dark:text-white/70"
            >
              Je conçois des interfaces fluides avec Next.js, Tailwind et Framer Motion.
              Performance, accessibilité et DX au cœur.
            </motion.p>

            <motion.div
              {...fadeUp(0.26)}
              className="mt-12 flex flex-wrap gap-3"
            >
              <Link
                href="/projets"
                className="rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5"
              >
                Voir mes projets
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border border-[#ea580c] dark:border-white/20 px-5 py-3 text-sm font-semibold text-[#ea580c] dark:text-white/90 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/5"
              >
                Me contacter
              </Link>
            </motion.div>
          </div>

          {/* Col visuel (photo + carte verte) */}
          <motion.div
            {...fadeUp(0.18)}
            className="relative mx-auto w-full max-w-md md:max-w-lg"
          >
            {/* “carte” verte derrière la photo */}
            <div className="absolute right-0 top-6 -z-10 hidden h-[85%] w-[72%] rounded-[1.5rem] bg-[#10b981] md:block" />
            {/* texture de points */}
            <div
              aria-hidden
              className="absolute right-6 top-10 -z-10 hidden h-24 w-24 bg-[radial-gradient(currentColor_2px,transparent_2px)] from-black/10 to-black/10 [background-size:12px_12px] md:block"
            />

            <div className="relative overflow-hidden rounded-[1.75rem] bg-black/30 ring-1 ring-white/10">
              <Image
                src="/me.jpg"
                alt="Portrait"
                width={850}
                height={950}
                priority
                className="h-full w-full object-cover"
              />
              {/* léger dégradé en bas */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}