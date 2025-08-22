import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import React from "react"

export const metadata: Metadata = {
  title: 'Portfolio – Dev React.js',
  description: 'Portfolio Next.js 15, Tailwind, Framer Motion – fluide, accessible et SEO-friendly.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Portfolio – Dev React.js',
    description: 'Showcase projets React/Next, skills et contact.',
    type: 'website',
    url: 'https://example.com'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ResponsiveNavbar />
          <main className="px-8 md:px-12 mt-12">{children}</main>
          <footer className="border-t mt-16">
            <div className="container-prose py-6 text-sm text-gray-500">
              © {new Date().getFullYear()} – Fait avec Next.js, Tailwind et Framer Motion
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
