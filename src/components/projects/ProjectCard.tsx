import { Project } from '../../types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0c101a]">
      <img
        src={'/assets/images/cards/' + project.id + '.webp'}
        alt={project.imageAlt}
        width={960}
        height={432}
        loading="lazy"
        className="block aspect-[20/9] w-full flex-none object-cover"
      />
      <div className="flex flex-1 flex-col items-start gap-3 p-5">
        <p className="eyebrow">{project.category}</p>
        <h3 className="text-xl font-bold">{project.name}</h3>
        <span className="rounded-full border border-cyan-800 px-3 py-1 text-xs text-cyan-200">{project.ownership}</span>
        <p className="text-slate-300">{project.description}</p>
        {project.featured && <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300 marker:text-cyan-400">
          {project.highlights.map(item => <li key={item}>{item}</li>)}
        </ul>}
        <ul aria-label="Technologies" className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.technologies.slice(0, 4).map(tech => <li className="tech-tag" key={tech}>{tech}</li>)}
        </ul>
        <div className="mt-2 flex w-full flex-wrap justify-between gap-3 border-t border-slate-800 pt-4 text-sm font-semibold">
          <a className="text-cyan-300" href={'/projects/' + project.id + '/'} aria-label={'View case study for ' + project.name}>View case study</a>
          <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" aria-label={'View live project for ' + project.name}>View live project</a>
        </div>
      </div>
    </article>
  );
}
