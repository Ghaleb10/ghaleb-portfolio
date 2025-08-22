import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import ResponsiveNavbar from '../components/ResponsiveNavbar'
import React from "react"
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Ghaleb - Portfolio – Dev React.js',
  description: 'Portfolio Next.js 15, Tailwind, Framer Motion – fluide, accessible et SEO-friendly.',
  metadataBase: new URL('https://ghaleb-portfolio.vercel.app/'),
  openGraph: {
    title: 'Ghaleb - Portfolio – Dev React.js',
    description: 'Showcase projets React/Next, skills et contact.',
    type: 'website',
    url: 'https://ghaleb-portfolio.vercel.app/',
    images: [
      {
        url: '/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Ghaleb - Portfolio – Dev React.js',
      },
    ],
  },
  icons: {
    icon: '/ico/favicon.ico',
    shortcut: '/ico/favicon.ico',
    apple: '/ico/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio – Dev React.js',
    description: 'Showcase projets React/Next, skills et contact.',
    images: ['/me.jpg'],
  },
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
              © {new Date().getFullYear()} – Ghaleb Saïd Ali Mohamed
            </div>
          </footer>
        </ThemeProvider>

        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
