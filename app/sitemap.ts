import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  return [
    { url: base + '/', lastModified: new Date() },
    { url: base + '/projets', lastModified: new Date() },
    { url: base + '/a-propos', lastModified: new Date() },
    { url: base + '/contact', lastModified: new Date() }
  ]
}
