import { Star } from "lucide-react";
import { aboutFeatures } from "../../data/about";

const ratingColors = [
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#8b5cf6",
  "#a855f7",
];

function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 text-slate-50">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Confianza
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Respaldo técnico en todo Costa Rica.
          </h2>

          <div className="mt-8">
            <div className="mt-4 flex items-center gap-2">
              {ratingColors.map((color, index) => (
                <Star
                  key={index}
                  size={20}
                  className="drop-shadow-[0_0_10px_rgba(34,211,238,0.14)]"
                  style={{
                    color,
                    fill: color,
                  }}
                />
              ))}
              <span className="ml-2 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-base font-semibold text-transparent">
                5.0
              </span>
              <span className="text-sm font-medium text-slate-300">
                Valoración de clientes
              </span>
            </div>

            <p className="mt-3 text-2xl font-bold text-white">
              Atención formal y respuesta ágil.
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
