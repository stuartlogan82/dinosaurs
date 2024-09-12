import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'bfkgtcoi',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-09-12',
      studioBasePath: '/studio',
  }), 
  react(),
]
});