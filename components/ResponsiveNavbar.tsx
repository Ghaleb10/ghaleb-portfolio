// components/ResponsiveNavbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { createPortal } from 'react-dom'

const nav = [
  { href: '/projets', label: 'Projets' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

function useLockBody(lock: boolean) {
  useEffect(() => {
    if (!lock) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [lock])
}

export default function ResponsiveNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

  return (
    <header className="fixed left-0 w-full top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/40">
      <div className="mx-auto flex w-full items-center justify-between px-6 py-3 md:px-12">
        {/* Logo / Title */}
        <Link href="/" className="text-base font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Ghaleb
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-xl px-3 py-2 text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 -z-10 rounded-xl bg-gray-900/5 dark:bg-white/10"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="pl-2">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white/70 text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-100"
          >
            {/* Hamburger */}
            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet via Portal (hors header) */}
      <MobileSheet open={open} onClose={() => setOpen(false)}>
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-semibold">Menu</span>
          <button
            aria-label="Fermer le menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-white text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-100"
          >
            {/* X */}
            <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="grid gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive(item.href)
                  ? 'bg-gray-900/5 text-gray-900 dark:bg-white/10 dark:text-white'
                  : 'text-gray-700 hover:bg-gray-900/5 dark:text-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6 rounded-xl border p-3 text-xs text-gray-600 dark:border-white/10 dark:text-gray-400">
          <p>© {new Date().getFullYear()} — Mon Portfolio</p>
        </div>
      </MobileSheet>
    </header>
  )
}

function MobileSheet({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  useLockBody(open)

  if (typeof document === 'undefined') return null
  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/40 md:hidden"
          onClick={onClose}
        >
          <motion.aside
            key="sheet"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="ml-auto h-full w-[82%] max-w-xs overflow-auto border-l border-white/10 bg-white/95 p-5 shadow-xl backdrop-blur dark:bg-zinc-900/95"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}