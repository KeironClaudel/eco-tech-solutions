import { CheckCircle2 } from "lucide-react";
import { serviceCategories, serviceHighlights } from "../../data/services";

function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Servicios
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Soluciones integrales desde trabajos eléctricos hasta
            infraestructura tecnológica.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            EcotechCR brinda servicios técnicos para entornos residenciales,
            comerciales y empresariales, combinando experiencia eléctrica,
            sistemas de seguridad, aire acondicionado e infraestructura de
            redes.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {serviceHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/40"
              >
                <Icon size={16} />
                {item.label}
              </span>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group animate-fade-up rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05] hover:shadow-cyan-950/30"
              >
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-purple-500/20 text-cyan-200 transition group-hover:scale-105">
                  <Icon size={24} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-slate-300">{category.description}</p>

                <ul className="mt-6 space-y-3">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-1 shrink-0 text-cyan-300"
                      />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
