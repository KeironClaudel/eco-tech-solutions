import { CheckCircle2, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { serviceCategories } from "../../data/services";
import logo from "../../assets/images/logo/ecotech-logo.png";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

const serviceThemes = [
  "text-cyan-300",
  "text-emerald-300",
  "text-sky-300",
  "text-blue-300",
  "text-amber-300",
  "text-fuchsia-300",
];

const wheelPillOrbitCenterX = 930;
const wheelPillOrbitCenterY = 352;
const wheelPillOrbitRadiusX = 400;
const wheelPillOrbitRadiusY = 360;
const wheelPillAngles = [138, 158, 178, 198, 220, 244];
const wheelPillDisplayOrder = [2, 3, 4, 5, 0, 1];

function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!autoplayEnabled || isHovered || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % serviceCategories.length);
    }, 5600);

    return () => window.clearInterval(intervalId);
  }, [autoplayEnabled, isHovered, prefersReducedMotion]);

  const activeService = serviceCategories[activeIndex];
  const activeAccent = serviceThemes[activeIndex % serviceThemes.length];
  const ActiveIcon = activeService.icon;

  const handleSelectService = (index: number) => {
    setActiveIndex(index);
    setAutoplayEnabled(false);
  };

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? serviceCategories.length - 1 : current - 1,
    );
    setAutoplayEnabled(false);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % serviceCategories.length);
    setAutoplayEnabled(false);
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-28 text-slate-50 xl:px-10"
    >
      <div className="mx-auto max-w-[1680px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(980px,1.34fr)_minmax(420px,0.66fr)] xl:gap-14">
          <div className="animate-fade-up max-w-[1180px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Servicios
          </p>

          <h2 className="max-w-[22ch] text-3xl font-bold tracking-tight sm:max-w-[24ch] md:max-w-[26ch] md:text-[3.35rem] md:leading-[1.02]">
            Soluciones especializadas para cada necesidad tecnica.
          </h2>

          <p className="mt-5 max-w-[560px] text-lg leading-8 text-slate-300">
            Seleccione un servicio para revisar su alcance tecnico y las
            soluciones que ofrecemos.
          </p>

          <div className="mt-10 lg:hidden">
            <div className="w-full rounded-[30px] border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20">
              <div className="flex justify-center">
                <img
                  src={logo}
                  alt="Ecotech CR"
                  className="h-24 w-auto object-contain"
                />
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Servicios principales
                </p>

                <div className="mt-5 grid gap-3">
                  {serviceCategories.map((service, index) => (
                    <button
                      key={`${service.title}-mobile-list`}
                      type="button"
                      onClick={() => handleSelectService(index)}
                      aria-pressed={index === activeIndex}
                      className={`flex items-center gap-4 rounded-[18px] border px-4 py-4 text-left transition ${
                        index === activeIndex
                          ? "border-cyan-300/40 bg-cyan-300/10 shadow-[0_0_24px_rgba(85,243,255,0.12)]"
                          : "border-white/10 bg-[#0b0f17] hover:border-cyan-300/20 hover:bg-white/5"
                      }`}
                    >
                      <span className="size-2.5 shrink-0 rounded-full bg-cyan-300" />
                      <span className="text-base font-medium text-white">
                        {service.title}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-[22px] border border-cyan-300/20 bg-cyan-300/10 p-5">
                  <p className="max-w-[18ch] text-xl font-semibold leading-tight text-white">
                    WhatsApp inmediato. Cobertura nacional.
                  </p>

                  <a
                    href={buildWhatsAppUrl(
                      `Hola, quisiera más información sobre ${activeService.title}.`,
                    )}
                    className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-white transition hover:text-cyan-100"
                  >
                    <span className="text-lg">◔</span>
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 hidden w-full max-w-[1035px] rounded-[30px] border border-slate-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.72),rgba(2,6,23,0.88))] px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-8 sm:py-8 lg:block">
            <div
              key={activeService.title}
              className="animate-fade-up grid gap-7 lg:grid-cols-[minmax(390px,0.9fr)_minmax(450px,1.02fr)] lg:items-stretch"
            >
              <div className="flex min-h-[280px] flex-col">
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.24em] ${activeAccent}`}
                >
                  Servicio seleccionado
                </p>

                <div className="mt-4">
                  <h3 className="max-w-[12ch] text-[clamp(2.25rem,8vw,4rem)] font-bold leading-[0.95] tracking-tight text-white sm:max-w-[10ch]">
                    {activeService.title}
                  </h3>

                  <p className="mt-5 max-w-[30ch] text-base leading-7 text-slate-300 md:text-lg">
                    {activeService.description}
                  </p>
                </div>
              </div>

              <div className="grid min-h-[280px] auto-rows-fr gap-3 sm:grid-cols-2">
                {activeService.services.slice(0, 4).map((service) => (
                  <div
                    key={service}
                    className="flex min-h-[96px] items-start gap-3 rounded-[18px] border border-slate-400/15 bg-slate-900/70 px-4 py-4 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40"
                  >
                    <CheckCircle2
                      size={16}
                      className={`mt-0.5 shrink-0 ${activeAccent}`}
                    />
                    <span className="min-w-0 text-sm leading-5 text-balance">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
              <button
                type="button"
                onClick={handlePrev}
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/10"
                aria-label="Servicio anterior"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/30 hover:bg-white/10"
                aria-label="Siguiente servicio"
              >
                <ChevronRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => setAutoplayEnabled(true)}
                disabled={autoplayEnabled || prefersReducedMotion}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Play size={15} />
                Auto
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/15"
              >
                Mas informacion
              </a>
            </div>

          </div>
          </div>

          <div className="hidden min-h-[720px] lg:block" aria-hidden="true" />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[64vw] min-w-[1120px] max-w-[1280px] lg:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full w-full">
          <div className="absolute inset-y-0 right-0 w-full overflow-hidden bg-transparent">
            <div className="service-wheel-ambient absolute inset-y-[4%] right-[-8%] w-[88%]" />

            <div className="absolute right-0 top-1/2 h-[780px] w-[1120px] -translate-y-1/2 overflow-hidden bg-transparent">
            <div className="service-wheel-background service-wheel-ring service-wheel-ring-primary absolute left-[532px] top-1/2 h-[760px] w-[760px] -translate-y-1/2 rounded-full">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_26%_50%,rgba(85,243,255,0.055),transparent_44%),radial-gradient(circle_at_34%_78%,rgba(168,85,247,0.05),transparent_36%)]" />
            </div>

            <div className="service-wheel-background service-wheel-ring service-wheel-ring-secondary absolute left-[602px] top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full">
              <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_52%,rgba(85,243,255,0.04),transparent_46%)]" />
            </div>

            <div className="absolute inset-0">
              <div
                className="pointer-events-none absolute z-10 flex w-[330px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
                style={{
                  left: "868px",
                  top: "382px",
                }}
              >
                <div className="flex size-[122px] items-center justify-center rounded-full border border-cyan-300/30 bg-[radial-gradient(circle_at_30%_26%,rgba(85,243,255,0.22),transparent_38%),radial-gradient(circle_at_74%_74%,rgba(168,85,247,0.2),transparent_40%),rgba(8,13,22,0.68)] text-white shadow-[0_0_28px_rgba(85,243,255,0.12)]">
                  <ActiveIcon size={86} strokeWidth={1.8} />
                </div>

                <p className={`mt-5 text-[0.72rem] font-bold uppercase tracking-[0.24em] ${activeAccent}`}>
                  Categoria activa
                </p>

                <h4 className="mt-3 max-w-[10ch] text-[3rem] font-bold leading-[0.94] tracking-tight text-white">
                  {activeService.title}
                </h4>

                <p className="mt-4 whitespace-nowrap text-[1.05rem] leading-8 text-slate-300">
                  {activeService.description}
                </p>
              </div>

              {serviceCategories.map((service, index) => {
                const Icon = service.icon;
                const isActive = index === activeIndex;
                const slotIndex = wheelPillDisplayOrder.indexOf(index);
                const angle = wheelPillAngles[slotIndex] ?? wheelPillAngles[0];
                const radians = (angle * Math.PI) / 180;
                const pillX =
                  wheelPillOrbitCenterX + Math.cos(radians) * wheelPillOrbitRadiusX;
                const pillY =
                  wheelPillOrbitCenterY - Math.sin(radians) * wheelPillOrbitRadiusY;
                const leftNudge =
                  slotIndex === wheelPillAngles.length - 1
                    ? 34
                    : slotIndex === wheelPillAngles.length - 2
                      ? 20
                      : 0;

                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => handleSelectService(index)}
                    className={`service-wheel-pill pointer-events-auto absolute z-20 flex min-h-[78px] w-[212px] items-center gap-4 rounded-full border px-4 py-3 text-left transition-[border-color,background-color,box-shadow,transform,opacity,left,top] duration-300 ${
                      isActive
                        ? "service-wheel-pill-active"
                        : "service-wheel-pill-idle"
                    }`}
                    style={{
                      left: `${pillX - leftNudge}px`,
                      top: `${pillY}px`,
                      transform: `translate(-50%, -50%) scale(${isActive ? 1 : 0.88})`,
                      opacity: isActive ? 1 : 0.42,
                      zIndex: isActive ? 30 : 20 - slotIndex,
                    }}
                    aria-pressed={isActive}
                    >
                      <div
                        className={`service-wheel-icon flex size-14 shrink-0 items-center justify-center rounded-full border ${
                        isActive
                          ? "service-wheel-icon-active"
                          : "service-wheel-icon-idle"
                      }`}
                    >
                      <Icon size={24} />
                      </div>

                      <span className="block max-w-[110px] text-sm font-semibold leading-[1.2] text-white">
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
