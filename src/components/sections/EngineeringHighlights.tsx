import { ENGINEERING_HIGHLIGHTS, PROJECTS } from '../../data/portfolioData';

export function EngineeringHighlights() {
  return (
    <section id="engineering" className="border-y border-slate-800 bg-[#07090e] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Engineering expertise</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ENGINEERING_HIGHLIGHTS.map(item => (
            <article key={item.title} className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-[#0c101a] p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="flex-1 text-slate-300">{item.description}</p>
              <a className="text-sm text-cyan-300 underline underline-offset-4" href={'/projects/' + item.projectId + '/#' + item.section}>
                {PROJECTS.find(project => project.id === item.projectId)?.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
