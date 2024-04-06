import { defineConfig } from 'astro/config';

const {
  ASTRO_BASE,
  ASTRO_SITE,
} = import.meta.env;

// https://astro.build/config
export default defineConfig({
  site: ASTRO_SITE,
  base: ASTRO_BASE,
});