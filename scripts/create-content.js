#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  red: '\x1b[31m'
};

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  title: (msg) => console.log(`${colors.bright}${msg}${colors.reset}`)
};

// Content type configurations
const contentTypes = {
  blog: {
    path: 'src/usr/contents/blog',
    template: `---
title: "Your blog post title here"
img: ./placeholder.svg
date: {{DATE}}
description: "A brief description of this blog post"
tags:
  - Tag1
  - Tag2
  - Tag3
---

# Your Blog Post Title

Write your blog post content here using Markdown or MDX syntax.

## Section 1

Your content...

## Section 2

More content...
`
  },
  notizie: {
    path: 'src/usr/contents/notizie',
    template: `---
title: "Your news title here"
img: ./placeholder.svg
date: {{DATE}}
description: "A brief description of this news item"
tags:
  - Evento
  - Notizia
  - Tag3
---

# Your News Title

Write your news content here using Markdown or MDX syntax.

## Details

Your content...
`
  },
  ricerca: {
    path: 'src/usr/contents/ricerca',
    template: `---
title: "Your research project title here"
img: ./placeholder.svg
date: {{DATE}}
description: "A brief description of this research project"
tags:
  - Ricerca
  - Progetto
  - Tag3
---

# Your Research Project Title

Write your research project description here using Markdown or MDX syntax.

## Objectives

Your content...

## Methodology

More content...

## Results

Results and findings...
`
  }
};

// Function to create a simple SVG placeholder
function createPlaceholder(imagePath, type) {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0066cc"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="48" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">
    ${type.toUpperCase()} - Placeholder Image
  </text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="24" fill="#e0e0e0" text-anchor="middle" dominant-baseline="middle">
    Replace with your own image
  </text>
</svg>`;
  
  fs.writeFileSync(imagePath.replace('.jpg', '.svg'), svg, 'utf8');
}

// Main function
async function createContent() {
  log.title('\n📝 LAD Content Creator\n');

  // Parse command line arguments
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    log.error('Missing arguments!');
    console.log('\nUsage: npm run create-content <type> <folder-name>');
    console.log('\nTypes:');
    console.log('  - blog      Create a blog post');
    console.log('  - notizie   Create a news item');
    console.log('  - ricerca   Create a research project');
    console.log('\nExample:');
    console.log('  npm run create-content blog my-new-post');
    console.log('  npm run create-content notizie 2025-11-18-event-name');
    console.log('  npm run create-content ricerca project-name\n');
    process.exit(1);
  }

  const [type, folderName] = args;

  // Validate content type
  if (!contentTypes[type]) {
    log.error(`Invalid content type: ${type}`);
    console.log('\nValid types: blog, notizie, ricerca\n');
    process.exit(1);
  }

  // Validate folder name
  if (!folderName) {
    log.error('Folder name is required!');
    console.log('\nExample: npm run create-content blog my-new-post\n');
    process.exit(1);
  }

  const config = contentTypes[type];
  const contentPath = path.join(process.cwd(), config.path, folderName);
  const indexPath = path.join(contentPath, 'index.mdx');
  const imagePath = path.join(contentPath, 'placeholder.svg');

  // Check if folder already exists
  if (fs.existsSync(contentPath)) {
    log.error(`Content already exists: ${contentPath}`);
    process.exit(1);
  }

  try {
    // Create directory
    log.info(`Creating directory: ${config.path}/${folderName}`);
    fs.mkdirSync(contentPath, { recursive: true });
    log.success('Directory created');

    // Generate content with current date
    const today = new Date().toISOString().split('T')[0];
    const content = config.template.replace('{{DATE}}', today);

    // Write index.mdx
    log.info('Creating index.mdx...');
    fs.writeFileSync(indexPath, content, 'utf8');
    log.success('index.mdx created');

    // Create placeholder image
    log.info('Creating placeholder image...');
    createPlaceholder(imagePath, type);
    log.success('Placeholder image created');

    // Success message
    log.title('\n✨ Content created successfully!\n');
    console.log(`📁 Location: ${colors.bright}${config.path}/${folderName}${colors.reset}`);
    console.log(`📄 File: ${colors.bright}index.mdx${colors.reset}`);
    console.log(`🖼️  Image: ${colors.bright}placeholder.svg${colors.reset}`);
    console.log(`\n${colors.yellow}Next steps:${colors.reset}`);
    console.log(`  1. Edit ${config.path}/${folderName}/index.mdx`);
    console.log(`  2. Replace placeholder.svg with your own image (JPG, PNG, etc.)`);
    console.log(`  3. Update the frontmatter (title, description, tags, etc.)\n`);

  } catch (error) {
    log.error(`Failed to create content: ${error.message}`);
    
    // Cleanup on error
    if (fs.existsSync(contentPath)) {
      fs.rmSync(contentPath, { recursive: true, force: true });
    }
    
    process.exit(1);
  }
}

// Run the script
createContent();
