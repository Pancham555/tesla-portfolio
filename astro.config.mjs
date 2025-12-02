// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import vercel from "@astrojs/vercel";

import keystatic from '@keystatic/astro'

// https://astro.build/config
export default defineConfig({
   output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(),react(), keystatic()],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },

  adapter: vercel()
});