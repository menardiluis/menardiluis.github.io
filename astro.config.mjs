import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://menardiluis.github.io',
  base: '/',
  output: 'static',
  integrations: [react()],
  build: {
    assets: '_assets'
  }
});
