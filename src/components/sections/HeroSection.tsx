import { BadgeCheck, Clock3, MapPin } from "lucide-react";
import logo from "../../assets/images/logo/ecotech-logo.png";
import { brand } from "../../data/brand";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

type CircuitColor = "cyan" | "purple";

type HeroCircuitRun = {
  id: string;
  color: CircuitColor;
  delayClass: string;
  path: string;
  endX: number;
  endY: number;
};

const heroCircuitBackRuns: HeroCircuitRun[] = [
  {
    id: "back-left-top",
    color: "cyan",
    delayClass: "hero-circuit-delay-0",
    path: "M 30 70 H 150 V 125 H 170",
    endX: 170,
    endY: 125,
  },
  {
    id: "back-right-bottom",
    color: "purple",
    delayClass: "hero-circuit-delay-2",
    path: "M 530 215 H 405 V 235 H 355",
    endX: 355,
    endY: 235,
  },
];

const heroCircuitFrontRuns: HeroCircuitRun[] = [
  {
    id: "front-left-bottom",
    color: "purple",
    delayClass: "hero-circuit-delay-1",
    path: "M 45 275 H 80 V 220 H 210",
    endX: 210,
    endY: 220,
  },
  {
    id: "front-right-top",
    color: "cyan",
    delayClass: "hero-circuit-delay-3",
    path: "M 515 90 H 400 V 145 H 355",
    endX: 355,
    endY: 145,
  },
];

const heroCircuitDecorativeRuns: HeroCircuitRun[] = [
  {
    id: "decor-left-top",
    color: "cyan",
    delayClass: "hero-circuit-delay-0",
    path: "M 10 55 H 90 V 90 H 135",
    endX: 135,
    endY: 90,
  },
  {
    id: "decor-left-mid",
    color: "purple",
    delayClass: "hero-circuit-delay-2",
    path: "M 25 175 H 115 V 145 H 155",
    endX: 155,
    endY: 145,
  },
  {
    id: "decor-left-bottom",
    color: "cyan",
    delayClass: "hero-circuit-delay-1",
    path: "M 35 315 H 145 V 285 H 185",
    endX: 185,
    endY: 285,
  },
  {
    id: "decor-right-top",
    color: "purple",
    delayClass: "hero-circuit-delay-3",
    path: "M 545 60 H 455 V 95 H 420",
    endX: 420,
    endY: 95,
  },
  {
    id: "decor-right-mid",
    color: "cyan",
    delayClass: "hero-circuit-delay-1",
    path: "M 535 180 H 470 V 215 H 425",
    endX: 425,
    endY: 215,
  },
  {
    id: "decor-right-bottom",
    color: "purple",
    delayClass: "hero-circuit-delay-0",
    path: "M 520 320 H 430 V 290 H 395",
    endX: 395,
    endY: 290,
  },
];

type HeroLogoArtworkProps = {
  className?: string;
};

function HeroLogoArtwork({ className = "" }: HeroLogoArtworkProps) {
  return (
    <div className={`hero-logo-stage ${className}`.trim()}>
      <svg
        className="hero-circuit hero-circuit-back"
        viewBox="0 0 560 360"
        aria-hidden="true"
      >
        {heroCircuitDecorativeRuns.map((run) => (
          <g key={run.id} className="hero-circuit-decorative">
            <path
              className={`hero-circuit-path hero-circuit-path-${run.color} ${run.delayClass}`}
              pathLength="100"
              d={run.path}
            />

            <circle
              cx={run.endX}
              cy={run.endY}
              r="5.5"
              className={`hero-circuit-terminal hero-circuit-path-${run.color} ${run.delayClass}`}
            />
          </g>
        ))}

        {heroCircuitBackRuns.map((run) => (
          <g key={run.id}>
            <path
              className={`hero-circuit-path hero-circuit-path-${run.color} ${run.delayClass}`}
              pathLength="100"
              d={run.path}
            />

            <circle
              cx={run.endX}
              cy={run.endY}
              r="6.5"
              className={`hero-circuit-terminal hero-circuit-path-${run.color} ${run.delayClass}`}
            />
          </g>
        ))}
      </svg>

      <div className="hero-logo-card">
        <div className="hero-logo-reactive-glow" />
        <img src={logo} alt={`${brand.name} logo`} className="hero-logo-mark" />
      </div>

      <svg
        className="hero-circuit hero-circuit-front"
        viewBox="0 0 560 360"
        aria-hidden="true"
      >
        {heroCircuitFrontRuns.map((run) => (
          <g key={run.id}>
            <path
              className={`hero-circuit-path hero-circuit-path-${run.color} ${run.delayClass}`}
              pathLength="100"
              d={run.path}
            />

            <circle
              cx={run.endX}
              cy={run.endY}
              r="6.5"
              className={`hero-circuit-terminal hero-circuit-path-${run.color} ${run.delayClass}`}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-[1680px]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] lg:gap-16">
          <div className="max-w-4xl animate-fade-up">
            <div className="mb-8 lg:hidden">
              <HeroLogoArtwork className="hero-logo-stage-mobile mx-auto h-[220px] max-w-[340px] animate-fade-in" />
            </div>

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

            <div className="mt-8 grid gap-4 lg:max-w-3xl lg:grid-cols-2">
              <article className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-300">
                  Misión
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-[0.95rem]">
                  Brindar soluciones inteligentes en ingeniería, seguridad y
                  tecnología con rapidez, calidad y compromiso total en cada
                  proyecto.
                </p>
              </article>

              <article className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-cyan-300">
                  Visión
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-[0.95rem]">
                  Ser líderes en soluciones integrales de ingeniería,
                  seguridad y tecnología, destacando por nuestra calidad
                  humana, excelencia operativa e innovación constante.
                </p>
              </article>
            </div>

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
              <HeroLogoArtwork className="absolute inset-0 flex items-center justify-center overflow-visible" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
