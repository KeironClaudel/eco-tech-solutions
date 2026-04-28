import { aboutFeatures } from "../../data/about";
import { brand } from "../../data/brand";

function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 text-slate-50">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Confianza
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Más de una década respaldando proyectos técnicos a lo largo del país.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            En {brand.name} combinamos experiencia, criterio técnico y atención
            profesional para desarrollar soluciones en seguridad, ingeniería,
            climatización e infraestructura tecnológica.
          </p>

          <p className="mt-4 text-slate-400">
            Nuestro compromiso es entregar trabajos seguros, funcionales y
            duraderos, adaptados a la realidad de cada cliente y cada proyecto.
          </p>

          <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Respaldo técnico
            </p>
            <p className="mt-3 text-2xl font-bold text-white">
              Atención formal, respuesta ágil y acompañamiento técnico de
              principio a fin.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {aboutFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group animate-fade-up rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-cyan-950/30"
              >
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300/20">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
