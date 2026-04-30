import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex animate-fade-up flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Trabajos realizados
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Experiencia aplicada en instalaciones, seguridad e infraestructura.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Ejemplos del tipo de trabajo que realizamos.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition duration-300 hover:border-cyan-300/50 hover:bg-white/5"
          >
            Solicitar un trabajo similar
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group animate-fade-up overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-cyan-950/30"
            >
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    {project.category}
                  </span>

                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {project.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 rounded-2xl border border-dashed border-white/10 bg-[#0b0f17] px-4 py-3 text-sm text-slate-400">
                  Fotos reales pronto.
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
