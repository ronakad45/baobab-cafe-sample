import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ronakad45.github.io',
  base: 'baobab-cafe-sample',
  vite: {
    plugins: [tailwindcss()],
  },
});
