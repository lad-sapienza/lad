import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import rehypeSlug from 'rehype-slug';
import { unified } from '@astrojs/markdown-remark';
import { userConfig } from './src/user.config.mjs';
import { scms } from '@lad-sapienza/scms-core/scms';

const coreAlias = {
  '@user': fileURLToPath(new URL('./src', import.meta.url)),
  '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
  '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
  '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
};

const {
  rehypePlugins: userRehypePlugins,
  remarkPlugins: userRemarkPlugins,
  remarkRehype: userRemarkRehype,
  ...userMarkdownConfig
} = userConfig.markdown || {};

// Pre-i18n URLs were flat (no locale prefix). These are all static sources
// redirecting to a destination produced by the [locale] dynamic route — Astro's
// native `redirects` handles this fine (only a *dynamic* source, e.g. per-slug
// article URLs, needs the RedirectPage/getStaticPaths recipe instead — see
// src/pages/{blog,notizie,ricerca,didattica}/[...slug].astro).
const redirects = {
  '/chi-siamo/': '/it/chi-siamo/',
  '/sviluppo/': '/it/sviluppo/',
  '/blog/': '/it/blog/',
  '/notizie/': '/it/notizie/',
  '/ricerca/': '/it/ricerca/',
  '/didattica/': '/it/didattica/',
};

export default defineConfig({
  site: userConfig.site ?? 'https://lad-sapienza.it',
  output: 'static',
  redirects,

  markdown: {
    ...userMarkdownConfig,
    processor: unified({
      remarkPlugins: [...(userRemarkPlugins || [])],
      rehypePlugins: [rehypeSlug, ...(userRehypePlugins || [])],
      ...(userRemarkRehype ? { remarkRehype: userRemarkRehype } : {}),
    }),
  },

  integrations: [
    ...scms(),
    ...(userConfig.integrations || []),
  ],

  vite: {
    ...(userConfig.vite || {}),
    esbuild: {
      target: 'es2022',
      ...(userConfig.vite?.esbuild || {}),
    },
    resolve: {
      ...(userConfig.vite?.resolve || {}),
      alias: {
        ...coreAlias,
        ...(userConfig.vite?.resolve?.alias || {}),
      },
    },
  },
});
