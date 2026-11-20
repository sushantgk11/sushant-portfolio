import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import App from './src/App';
import type { Plugin } from 'vite';
import { CaseStudy } from './src/components/projects/CaseStudy';
import { PROJECTS } from './src/data/portfolioData';
import type { Project } from './src/types';

const origin = 'https://sushant-portfolio-phi.vercel.app';
const projectPath = (project: Project) => '/projects/' + project.id + '/';

function projectPage(project: Project, stylesheet: string) {
  const url = origin + projectPath(project);
  const title = project.name + ' | Sushant Kulkarni · Frontend Case Study';
  return '<!doctype html>' + renderToStaticMarkup(
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title><meta name="description" content={project.description} />
        <link rel="canonical" href={url} /><meta property="og:url" content={url} />
        <meta property="og:type" content="article" /><meta property="og:title" content={title} />
        <meta property="og:description" content={project.description} /><meta property="og:image" content={origin + project.thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: project.title,
          description: project.description,
          author: { '@type': 'Person', name: 'Sushant Kulkarni', url: origin },
          url, image: origin + project.thumbnail,
        }).replace(/</g, '\\u003c') }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={stylesheet} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" />
      </head>
      <body><CaseStudy project={project} /></body>
    </html>
  );
}

export function portfolioPages(): Plugin {
  return {
    name: 'portfolio-pages',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = (req.url || '').split('?')[0].replace(/\/$/, '');
        if (!path.startsWith('/projects/')) return next();
        const project = PROJECTS.find(item => path === '/projects/' + item.id);
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.statusCode = project ? 200 : 404;
        res.end(project ? projectPage(project, '/src/index.css') : '<h1>Project not found</h1><a href="/#work">Browse projects</a>');
      });
    },
    generateBundle(_, bundle) {
      const home = bundle['index.html'];
      if (home?.type !== 'asset') throw new Error('Missing portfolio homepage');
      const stylesheet = String(home.source).match(/<link[^>]+rel="stylesheet"[^>]+href="(\/assets\/[^"]+\.css)"/)?.[1];
      if (!stylesheet) throw new Error('Missing compiled portfolio stylesheet');
      home.source = String(home.source).replace(
        '<div id="root"></div>',
        '<div id="root">' + renderToString(<App />) + '</div>',
      );
      for (const project of PROJECTS) {
        this.emitFile({type: 'asset', fileName: 'projects/' + project.id + '/index.html', source: projectPage(project, stylesheet)});
      }
      const paths = ['/', ...PROJECTS.map(projectPath)];
      this.emitFile({type: 'asset', fileName: 'sitemap.xml', source: '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + paths.map(path => '<url><loc>' + origin + path + '</loc></url>').join('') + '</urlset>'});
      this.emitFile({type: 'asset', fileName: 'robots.txt', source: 'User-agent: *\nAllow: /\nSitemap: ' + origin + '/sitemap.xml\n'});
    },
  };
}
