/**
 * User Configuration File
 * 
 * This file allows you to override core settings and customize your site.
 * Edit this file to configure your site's metadata, integrations, and more.
 * 
 * The settings here will be merged with the core configuration in astro.config.mjs
 */

export const userConfig = {
  // Site URL (required for sitemap and canonical URLs)
  site: 'https://lad-sapienza.it',
  
  // Base path (if deploying to a subdirectory)
  // base: '/my-site',
  
  // Additional integrations (will be merged with core integrations)
  integrations: [
    // Add your custom integrations here
  ],
  
  // Custom Vite configuration
  vite: {
    // Your custom Vite config
  },
  
  // Markdown configuration overrides
  markdown: {
    // Your custom markdown config
  },
};

/**
 * Site Metadata
 * 
 * These values are used throughout the site for SEO, social media cards,
 * and general site information.
 */
export const siteMetadata = {
  title: 'LAD @Sapienza',
  titleTemplate: '%s | LAD',
  description: 'Laboratorio di Archeologia Digitale alla SapienzaStatic Content Management System developed by LAD: Laboratorio di Archeologia Digitale alla Sapienza',
  author: 'Julian Bogdani <julian.bogdani@uniroma1.it>',
  siteName: 'LAD: Laboratorio di Archeologia Digitale alla Sapienza',
  defaultImage: '/images/lad-square.png',
  twitter: '@JulianBogdani',
};
