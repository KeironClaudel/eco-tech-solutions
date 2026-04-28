import { Network, ShieldCheck, Snowflake, Zap } from "lucide-react";
import logo from "../../assets/images/ecotech-logo.png";
import { brand } from "../../data/brand";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

const highlights = [
  { label: "Sistemas eléctricos", icon: Zap },
  { label: "Soluciones de seguridad", icon: ShieldCheck },
  { label: "Infraestructura de redes", icon: Network },
  { label: "Aire acondicionado", icon: Snowflake },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Soluciones técnicas profesionales en Costa Rica
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Soluciones eléctricas, tecnológicas y de seguridad para hogares y
            negocios.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Brindamos inspecciones eléctricas, instalaciones, mantenimiento
            preventivo, planos eléctricos, servicios de aire acondicionado,
            CCTV, alarmas, cercas eléctricas e infraestructura de redes y
            telecomunicaciones.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl(
                "Hola, quisiera solicitar una cotización para un servicio técnico.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-center font-semibold text-black shadow-lg shadow-cyan-950/40 transition hover:scale-[1.02] hover:opacity-90"
            >
              Solicitar cotización
            </a>

            <a
              href="#services"
              className="rounded-xl border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="animate-fade-up animation-delay-200 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-cyan-950/30">
          <div className="mb-6 flex justify-center">
            <img
              src={logo}
              alt={`${brand.name} logo`}
              className="h-28 w-auto drop-shadow-[0_0_28px_rgba(85,243,255,0.25)]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-[#0b0f17] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-white">{item.label}</h3>
                </div>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
            <p className="text-sm font-medium text-cyan-100">
              {brand.name} brinda soporte técnico integral para entornos
              residenciales, comerciales y empresariales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
