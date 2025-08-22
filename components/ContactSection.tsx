// components/ContactSection.tsx
'use client'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import React from "react";
import { Mail, Phone, Facebook, Instagram, GithubIcon, Loader2Icon } from 'lucide-react';
import { toast } from 'sonner'

const schema = Yup.object({
  firstName: Yup.string().min(2, 'Trop court').required('Requis'),
  lastName: Yup.string().min(2, 'Trop court').required('Requis'),
  email: Yup.string().email('Email invalide').required('Requis'),
  message: Yup.string().min(10, 'Minimum 10 caractères').required('Requis'),
})

type Values = Yup.InferType<typeof schema>

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: 'easeOut', delay: d },
  viewport: { once: true, amount: 0.3 },
})

export default function ContactSection() {
  const initialValues: Values = { firstName: '', lastName: '', email: '', message: '' }

  return (
    <section className="relative">
      <motion.div {...fade(0.02)} className="text-center mb-12">
        <p className="text-md lg:text-xl font-medium text-orange-600">Contactez moi</p>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Discutons <span className="text-[#2563eb]">Ensemble</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 lg:gap-12 lg:grid-cols-[1fr,420px]">
        {/* FORM */}
        <motion.div {...fade(0.06)} className="rounded-3xl">
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={async (values, { resetForm, setSubmitting }) => {
              try {
                const res = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(values),
                })
                const json = await res.json()
                if (!res.ok || !json.ok) throw new Error(json.error || 'Envoi impossible')

                resetForm()
                toast.success('✅ Merci ! Votre message a été envoyé.')
              } catch (e: any) {
                toast.error(`❌ Erreur : ${e.message || 'Veuillez réessayer.'}`)
              } finally {
                setSubmitting(false)
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <TextField name="firstName" label="Nom *" placeholder="Ex. John" />
                <TextField name="lastName" label="Prénom *" placeholder="Ex. Doe" />
                <TextField
                  name="email"
                  type="email"
                  label="Email *"
                  placeholder="example@gmail.com"
                  className="sm:col-span-2"
                />
                <TextArea
                  name="message"
                  label="Your Message *"
                  placeholder="Entrer votre message ici.."
                  className="sm:col-span-2"
                  rows={6}
                />

                <div className="sm:col-span-2 pt-2 flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 text-white font-medium shadow-md transition hover:translate-y-[-1px] disabled:opacity-60"
                  >
                    {isSubmitting ? 
                      <div className="flex flex-row items-center gap-4">
                        <Loader2Icon className="h-5 w-5 animate-spin" /> Envoi...
                      </div>
                    : 'Envoyer'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>

        {/* SIDE PANEL */}
        <motion.aside
          {...fade(0.1)}
          className="overflow-hidden rounded-3xl bg-[#2563eb]/10  dark:bg-black/30 text-gray-100 shadow-sm"
        >
          <div className="space-y-8 p-8">
            <SectionBlock title="Adresse" accent>
              <p className="text-black dark:text-gray-300">67Ha Nord-Est,</p>
              <p className="text-black dark:text-gray-300">Antananarivo 101</p>
            </SectionBlock>

            <SectionBlock title="Contact" accent>
              <p className="flex items-center gap-2 text-black dark:text-gray-300">
                <Phone className="h-4 w-4 text-orange-500" />
                +261 32 39 869 63
              </p>
              <p className="flex items-center gap-2 text-black dark:text-gray-300">
                <Mail className="h-4 w-4 text-orange-500" />
                saidalighaleb007@gmail.com
              </p>
            </SectionBlock>
          </div>

          {/* Orange bottom strip with subtle pattern + socials */}
          <div className="p-6">
            <p className="mb-4 text-black dark:text-white font-medium">Restez connecter</p>
            <div className="flex items-center gap-3">
              <Social icon={<Facebook className="h-4 w-4" />} href="https://www.facebook.com/saidali.ghaleb/" />
              {/* <Social icon={<Disco className="h-4 w-4" />} href="#" /> */}
              <Social icon={<Instagram className="h-4 w-4" />} href="https://www.instagram.com/ryuzaki_elaidjia/" />
              <Social icon={<GithubIcon className="h-4 w-4" />} href="https://github.com/Ghaleb10" />
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

/* ---------- Small UI helpers ---------- */
function TextField({
  name,
  label,
  placeholder,
  type = 'text',
  className = '',
}: {
  name: string
  label: string
  placeholder?: string
  type?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-transparent px-4 py-3 text-[15px] outline-none transition focus:border-gray-400"
      />
      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-sm text-red-600"
      />
    </div>
  )
}

function TextArea({
  name,
  label,
  placeholder,
  rows = 5,
  className = '',
}: {
  name: string
  label: string
  placeholder?: string
  rows?: number
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1 block text-sm font-medium">
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-y rounded-xl border bg-transparent px-4 py-3 text-[15px] outline-none transition focus:border-gray-400"
      />
      <ErrorMessage
        name={name}
        component="p"
        className="mt-1 text-sm text-red-600"
      />
    </div>
  )
}

function SectionBlock({
  title,
  children,
  accent = false,
}: {
  title: string
  children: React.ReactNode
  accent?: boolean
}) {
  return (
    <div>
      <p className={`mb-2 text-md font-semibold ${accent ? 'text-orange-500' : 'text-[#2563eb]'}`}>
        {title}
      </p>
      <div className="space-y-4 text-md">{children}</div>
    </div>
  )
}

function Social({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      aria-label="social"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-black shadow hover:-translate-y-0.5 transition"
    >
      {icon}
    </a>
  )
}