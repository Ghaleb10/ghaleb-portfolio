'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null
  const current = theme === 'system' ? systemTheme : theme

  return (
    <button
      aria-label="Basculer le thème"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 border hover:bg-gray-50 dark:hover:bg-gray-800"
    >
      {current === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      {/* <span className="hidden sm:inline">{current === 'dark' ? 'Clair' : 'Sombre'}</span> */}
    </button>
  )
}
