import { ENGINEERING_HIGHLIGHTS } from '../../data/portfolioData';

export function EngineeringHighlights() {
  return (
    <section id="engineering" className="border-y border-slate-800 bg-[#07090e] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Engineering expertise</h2>
        <p className="mb-8 mt-3 max-w-2xl leading-relaxed text-slate-300">
          Nearly five years of building frontend applications for client teams have shaped how I approach architecture, performance, and everyday usability.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ENGINEERING_HIGHLIGHTS.map(item => (
            <article key={item.title} className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-[#0c101a] p-5">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="leading-relaxed text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
