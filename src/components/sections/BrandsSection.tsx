import {
  brandCategories,
  brandFlexibleCategories,
} from "../../data/brands";

function BrandsSection() {
  return (
    <section id="brands" className="px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Marcas y tecnologías
            </p>

            <h2 className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
              Trabajamos con marcas reconocidas en la industria para garantizar
              calidad, seguridad y rendimiento en cada proyecto.
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Seleccionamos los equipos adecuados según las necesidades de cada
              cliente, manteniendo flexibilidad técnica sin depender de una
              sola marca.
            </p>
          </div>

          <div className="animate-fade-up animation-delay-100 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-xl shadow-cyan-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Enfoque profesional
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Estas son marcas y tecnologías con las que trabajamos
              habitualmente. No comunicamos distribución oficial; usamos las
              soluciones más adecuadas según el tipo de proyecto, la
              disponibilidad y el objetivo del cliente.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {brandCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group animate-fade-up rounded-[28px] border border-white/10 bg-white/[0.03] p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-cyan-950/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                      Categoría
                    </p>
                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-purple-500/20 text-cyan-200 transition group-hover:scale-105">
                    <Icon size={24} />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {category.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {category.brands.map((item) => (
                    <div
                      key={item.name}
                      className={`rounded-2xl border border-white/10 bg-white px-4 py-4 text-center text-slate-900 shadow-sm shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 ${item.tileClassName ?? ""}`}
                    >
                      <div className="flex h-14 w-full items-center justify-center rounded-lg bg-white p-2">
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={`Logo de ${item.name}`}
                            className={`h-auto w-auto max-w-full object-contain ${item.logoClassName ?? "max-h-10"}`}
                          />
                        ) : (
                          <span className="text-lg font-semibold tracking-wide text-slate-900">
                            {item.name}
                          </span>
                        )}
                      </div>

                      {item.logo ? (
                        <p className="mt-3 text-sm font-medium text-slate-700">
                          {item.name}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {brandFlexibleCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="animate-fade-up rounded-3xl border border-dashed border-white/15 bg-[#0b0f17]/80 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-cyan-200">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Marcas variables
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {category.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {category.brands.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
