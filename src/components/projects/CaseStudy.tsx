import React from 'react';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types';

export function CaseStudy({ project }: { project: Project }) {
  const next = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];
  return (
    <main className="study mx-auto max-w-4xl px-5 py-8 sm:px-8">
      <nav aria-label="Breadcrumb"><a href="/#work">All projects</a> / {project.name}</nav>
      <header className="my-10 space-y-4">
        <p className="eyebrow">{project.category} · {project.name}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="text-lg text-slate-300">{project.description}</p>
        <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">View live project</a>
      </header>
      <img src={project.thumbnail} width={project.imageWidth} height={project.imageHeight}
        alt={project.name + ' application interface'} className="h-auto w-full rounded-xl border border-slate-700" />
      <section>
        <p className="eyebrow">{project.ownership}</p>
        <h2>My responsibilities</h2>
        <p>{project.responsibilities}</p>
        <ul aria-label="Technology stack" className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => <li className="tech-tag" key={tech}>{tech}</li>)}
        </ul>
      </section>
      <section><h2>The user problem</h2><p>{project.problem}</p></section>
      <section id="architecture"><h2>Architecture</h2><p>{project.architecture}</p></section>
      <section id="features">
        <h2>Key features</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          {project.highlights.map(feature => <li key={feature}>{feature}</li>)}
        </ul>
      </section>
      <section id="implementation"><h2>{project.challenge}</h2><p>{project.solution}</p></section>
      <details><summary>Performance and reliability</summary><p>{project.reliability}</p></details>
      <details><summary>Responsive design and interaction</summary><p>{project.interfaceNotes}</p></details>
      <nav aria-label="More projects" className="my-10 flex flex-wrap justify-between gap-4">
        <a href="/#work">All projects</a><a href={'/projects/' + next.id + '/'}>Next project · {next.name}</a>
      </nav>
    </main>
  );
}
