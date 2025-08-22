// components/AboutSection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, BadgeCheck, Users } from 'lucide-react'

type Stat = { label: string; value: string }
type Props = {
  name: string
  role: string
  bio: string
  photoUrl: string
  phone?: string
  email?: string
  stats?: Stat[]
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: 'easeOut', delay },
  viewport: { once: true, amount: 0.4 },
})

export default function AboutSection({
  name = 'Oliver Scott',
  role = 'Développeur React.js',
  bio = "Je conçois des expériences web performantes et accessibles en Next.js, avec une exigence de qualité, de communication et de respect des délais.",
  photoUrl = 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop',
  phone = '(000) 000-0000',
  email = 'example@gmail.com',
  stats = [
    { label: 'Projets complétés', value: '750+' },
    // { label: 'Secteurs couverts', value: '25+' },
    { label: "Années d'expérience", value: '16+' },
  ],
}: Props) {
  return (
    <section className="relative">
      <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
        {/* Bloc gauche : Photo + fond arrondi orange */}
        <motion.div
          {...fadeUp(0)}
          className="relative "
          aria-hidden="false"
        >
          <div className="relative mx-auto w-full">
            {/* Contour style “sticker” */}
            <div className="absolute -inset-[.35rem] rounded-2xl border-white/70 shadow-[0_0_0_8px_rgba(255,255,255,0.8)] pointer-events-none" />

            {/* Carte “Total Customer” */}
            <div className="absolute left-4 top-4 z-10">
              <div className="flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Users className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs text-gray-500">Client</p>
                  <p className="font-semibold text-black">4</p>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="relative z-0 rounded-xl aspect-square">
              <Image
                src={photoUrl}
                alt={`Photo de ${name}`}
                fill
                className="w-full h-full relative z-10 rounded-xl object-cover"
                priority
              />
            </div>

            {/* Badge rôle */}
            <div className="absolute -bottom-8 left-6 z-10">
              <div className="flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-lg">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white">
                  <BadgeCheck className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-black">{role}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bloc droit : Titre / Bio / Stats / Contact */}
        <div className="order-1 space-y-7 lg:order-2">
          <motion.div {...fadeUp(0.05)} className="space-y-6">
            <p className="text-sm font-medium text-orange-600">A propos de moi</p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Qui est <span className="text-orange-600">{name}</span> ?
            </h2>
            <p className="max-w-2xl text-md text-gray-600 dark:text-gray-300 leading-relaxed">
              {bio}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.1)}
            className="grid grid-cols-2 gap-4 sm:gap-6 md:max-w-md"
            role="list"
            aria-label="Chiffres clés"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border bg-white/70 p-4 text-center shadow-sm dark:bg-white/5"
                role="listitem"
              >
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="mt-1 text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Boutons contact */}
          <motion.div
            {...fadeUp(0.15)}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-3 rounded-full border bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/10"
              aria-label="Appeler"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Phone className="h-4 w-4" />
              </span>
              {phone}
            </a>

            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 rounded-full border bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/10"
              aria-label="Envoyer un email"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Mail className="h-4 w-4" />
              </span>
              {email}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}