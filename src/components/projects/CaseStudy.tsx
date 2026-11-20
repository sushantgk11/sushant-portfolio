import React from 'react';
import { engineeringNotes } from '../../data/engineeringNotes';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types';

export function CaseStudy({ project }: { project: Project }) {
  const index = PROJECTS.indexOf(project);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const previous = PROJECTS[(index + PROJECTS.length - 1) % PROJECTS.length];
  const note = engineeringNotes[project.id];
  const imageBase = '/assets/images/studies/' + project.id;
  const largeWidth = Math.min(project.imageWidth, 1680);
  return (
    <>
    <a href="#case-content" className="skip-link">Skip to case study</a>
    <header className="border-b border-slate-800">
      <nav aria-label="Portfolio" className="study-nav mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-4 px-5 py-2 sm:px-8">
        <a href="/" className="flex items-center gap-2"><strong aria-hidden="true" className="text-xl">SK</strong> Back to Portfolio</a>
        <div className="flex flex-wrap items-center gap-x-4">
          <a href="/#work">Projects</a>
          <a href="/assets/pdf/Sushant_Kulkarni_CV.pdf" download>Download Resume</a>
        </div>
      </nav>
    </header>
    <main id="case-content" tabIndex={-1} className="study mx-auto max-w-4xl px-5 py-8 sm:px-8">
      <nav aria-label="Breadcrumb"><a href="/#work">All projects</a> / <span aria-current="page">{project.name}</span></nav>
      <header className="my-10 space-y-4">
        <p className="eyebrow">{project.category} · {project.name}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="text-lg text-slate-300">{project.description}</p>
        <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">View live project</a>
      </header>
      <img src={project.thumbnail}
        srcSet={imageBase + '-800.webp 800w, ' + imageBase + '-' + largeWidth + '.webp ' + largeWidth + 'w'}
        sizes="(min-width: 896px) 832px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
        width={project.imageWidth} height={project.imageHeight}
        alt={project.imageAlt} className="h-auto w-full rounded-xl border border-slate-700" />
      <section>
        <p className="eyebrow">{project.ownership}</p>
        <h2>My responsibilities</h2>
        <p>{project.responsibilities}</p>
        <ul aria-label="Technology stack" className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map(tech => <li className="tech-tag" key={tech}>{tech}</li>)}
        </ul>
      </section>
      <section><h2>The user problem</h2><p>{project.problem}</p></section>
      <section id="architecture">
        <h2>Architecture</h2>
        <p>{project.architecture}</p>
        {note && <ArchitectureDiagram caption={note.caption} flows={note.flows} />}
      </section>
      <section id="features">
        <h2>Key features</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          {project.highlights.map(feature => <li key={feature}>{feature}</li>)}
        </ul>
      </section>
      <section id="implementation">
        <h2>{note ? 'Engineering Challenges & Decisions' : project.challenge}</h2>
        {note && <h3>{project.challenge}</h3>}
        <p>{project.solution}</p>
        {note && <p className="mt-3">{note.tradeoff}</p>}
      </section>
      <details><summary>Performance and reliability</summary><p>{project.reliability}</p></details>
      <details><summary>Responsive design and accessibility</summary><p>{project.interfaceNotes}</p></details>
      {note && <section className="takeaway"><h2>Key takeaway</h2><p>{note.takeaway}</p></section>}
      <nav aria-label="More projects" className="my-10 flex flex-wrap justify-between gap-4">
        <a rel="prev" href={'/projects/' + previous.id + '/'}>Previous · {previous.name}</a>
        <a rel="next" href={'/projects/' + next.id + '/'}>Next · {next.name}</a>
      </nav>
    </main>
    </>
  );
}
