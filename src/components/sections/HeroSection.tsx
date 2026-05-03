import { BadgeCheck, Clock3, MapPin } from "lucide-react";
import logo from "../../assets/images/logo/ecotech-logo.png";
import { brand } from "../../data/brand";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import HeroLogoParticlesCanvas from "../home/HeroLogoParticlesCanvas";

function HeroSection() {
  return (
    <section className="px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-[1680px]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] lg:gap-16">
          <div className="max-w-4xl animate-fade-up">
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              {brand.yearsExperience} en ingeniería, seguridad y tecnología
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Soluciones técnicas para hogares, negocios y empresas.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Atención profesional en seguridad, redes, climatización e
              ingeniería eléctrica con cobertura nacional.
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
                Respuesta directa por WhatsApp
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={buildWhatsAppUrl(
                  "Hola, quisiera solicitar una visita técnica y recibir más información sobre sus servicios.",
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

          <div className="relative hidden min-h-[440px] animate-fade-up animation-delay-200 lg:block">
            <div className="hero-logo-stage absolute inset-0 flex items-center justify-center overflow-visible">
              <HeroLogoParticlesCanvas layer="back" />

              <div className="hero-logo-card">
                <div className="hero-logo-glow" />
                <img
                  src={logo}
                  alt={`${brand.name} logo`}
                  className="hero-logo-mark"
                />
              </div>

              <HeroLogoParticlesCanvas layer="front" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
