import { PROJECTS } from '../../data/portfolioData';
import { ProjectCard } from '../projects/ProjectCard';

export function SelectedWork() {
  return (
    <div id="work" className="mx-auto max-w-7xl space-y-16 px-4 py-20 sm:px-6 lg:px-8">
      {[true, false].map(featured => (
        <section key={String(featured)} aria-labelledby={featured ? 'featured' : 'additional'}>
          <h2 id={featured ? 'featured' : 'additional'} className="mb-7 text-3xl font-bold sm:text-4xl">
            {featured ? 'Featured work' : 'Additional projects'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.filter(project => project.featured === featured).map(project => (
              <div key={project.id} className="grid"><ProjectCard project={project} /></div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
