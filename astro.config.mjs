import { loadEnv } from "vite";
import { defineConfig } from 'astro/config';

const { ASTRO_BASE, ASTRO_SITE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: ASTRO_SITE,
  base: ASTRO_BASE,
});