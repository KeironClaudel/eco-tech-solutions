import type { CSSProperties } from "react";
import {
  brandCategories,
  brandFlexibleCategories,
} from "../../data/brands";

function BrandsSection() {
  return (
    <section id="brands" className="px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-[1680px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Marcas y tecnologías
            </p>

            <h2 className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
              Equipos confiables para distintas necesidades técnicas.
            </h2>
          </div>

          <div className="animate-fade-up animation-delay-100 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 shadow-xl shadow-cyan-950/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Selección por proyecto
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              Trabajamos con marcas reconocidas según el alcance técnico y la
              disponibilidad de cada instalación.
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          {brandCategories.map((category) => {
            const Icon = category.icon;
            const marqueeBrands = Array.from({ length: 6 }, () => category.brands).flat();

            return (
              <article
                key={category.title}
                className="animate-fade-up rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-purple-500/20 text-cyan-200">
                      <Icon size={24} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        Categoría
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500">
                    Deslizamiento continuo de derecha a izquierda
                  </p>
                </div>

                <div className="brand-marquee-mask mt-6">
                  <div
                    className="brand-marquee-track"
                    style={
                      {
                        "--marquee-duration": "42s",
                      } as CSSProperties
                    }
                  >
                    {marqueeBrands.map((item, index) => (
                      <div
                        key={`${category.title}-${item.name}-${index}`}
                        className={`flex h-28 w-[156px] shrink-0 flex-col justify-center rounded-[24px] border border-white/10 bg-white px-4 text-center text-slate-900 shadow-sm shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 sm:h-32 sm:w-[190px] sm:rounded-[26px] sm:px-5 ${item.tileClassName ?? ""}`}
                      >
                        <div className="flex h-14 w-full items-center justify-center rounded-xl bg-white p-2 sm:h-16">
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

                        <p className="mt-2 text-xs font-medium text-slate-700 sm:mt-3 sm:text-sm">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
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
