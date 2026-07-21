import type { MetadataRoute } from 'next';

/**
 * Função geradora do sitemap do site.
 * O Next.js executa esta função para criar o arquivo sitemap.xml automaticamente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://estudio-efrata.netlify.app/';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
