import { BadgeCheck, Clock3, MapPin, MessageCircle } from "lucide-react";
import logo from "../../assets/images/logo/ecotech-logo.png";
import { brand } from "../../data/brand";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

const highlights = [
  { label: "Seguridad electrónica" },
  { label: "Control de acceso" },
  { label: "Redes y cableado" },
  { label: "Aires acondicionados" },
  { label: "Ingeniería eléctrica" },
  { label: "Mantenimiento empresarial" },
];

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-slate-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            {brand.yearsExperience} en ingeniería, seguridad y tecnología
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Soluciones en ingeniería, seguridad y tecnología para hogares,
            negocios y empresas.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Seguridad, redes, climatización e ingeniería eléctrica.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
              <Clock3 size={16} className="text-cyan-300" />
              {brand.yearsExperience} en el mercado
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
              <MapPin size={16} className="text-cyan-300" />
              {brand.coverage}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200">
              <BadgeCheck size={16} className="text-cyan-300" />
              Servicio formal y técnico
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={buildWhatsAppUrl(
                "Hola, quisiera solicitar una visita técnica para un servicio de Ecotech CR.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-center font-semibold text-black shadow-lg shadow-cyan-950/40 transition hover:scale-[1.02] hover:opacity-90"
            >
              Solicite visita técnica hoy
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
          <div className="mb-6 flex justify-center border-b border-white/10 pb-6">
            <img
              src={logo}
              alt={`${brand.name} logo`}
              className="h-24 w-auto"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Servicios principales
            </p>

            <ul className="mt-5 space-y-3">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b0f17] px-4 py-3 text-sm text-slate-200"
                >
                  <span className="size-2 rounded-full bg-cyan-300" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
            <p className="text-sm font-medium text-cyan-100">
              WhatsApp inmediato. Cobertura nacional.
            </p>

            <a
              href={buildWhatsAppUrl(
                "Hola, quisiera información sobre cobertura y disponibilidad para una visita técnica.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-50 transition hover:text-white"
            >
              <MessageCircle size={16} />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
