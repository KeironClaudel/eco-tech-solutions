import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { brand } from "../../data/brand";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1fr]">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Contacto
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Solicite una visita técnica o una cotización.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Compártenos los detalles de tu proyecto y con gusto te orientamos
              sobre la mejor solución según tu necesidad, ubicación y alcance del
              servicio.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={buildWhatsAppUrl(
                  "Hola, quisiera solicitar una cotización para un servicio de EcotechCR.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
              >
                <MessageCircle className="text-cyan-300" size={24} />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-sm text-slate-300">{brand.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <Phone className="text-cyan-300" size={24} />
                <div>
                  <p className="font-semibold text-white">Teléfono</p>
                  <p className="text-sm text-slate-300">{brand.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <Mail className="text-cyan-300" size={24} />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-slate-300">{brand.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <MapPin className="text-cyan-300" size={24} />
                <div>
                  <p className="font-semibold text-white">Zona de cobertura</p>
                  <p className="text-sm text-slate-300">{brand.coverage}</p>
                  <p className="text-xs text-slate-500">
                    Base operativa en {brand.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="animate-fade-up animation-delay-200 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 md:p-7">
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-white/10 bg-[#0b0f17] px-4 py-2.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm text-slate-300">
                  Número de teléfono
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+506 0000-0000"
                  className="w-full rounded-xl border border-white/10 bg-[#0b0f17] px-4 py-2.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Cuéntanos qué necesitas..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0b0f17] px-4 py-2.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  const form = document.querySelector("form");

                  if (!form) return;

                  const formData = new FormData(form);

                  const name = String(formData.get("name") ?? "").trim();
                  const phone = String(formData.get("phone") ?? "").trim();
                  const message = String(formData.get("message") ?? "").trim();

                  if (!name || !phone || !message) {
                    alert("Por favor, completa todos los campos antes de enviar la solicitud.");
                    return;
                  }

                  const whatsappMessage = `
                    Hola, quisiera solicitar una visita técnica.

                    Nombre: ${name}
                    Teléfono: ${phone}
                    Mensaje: ${message}
                  `.trim();

                  window.open(buildWhatsAppUrl(whatsappMessage), "_blank");
                }}
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2.5 font-semibold text-black shadow-lg shadow-cyan-950/40 transition hover:scale-[1.02] hover:opacity-90"
              >
                Solicitar visita por WhatsApp
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 animate-fade-up overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-xl shadow-black/20">
          <div className="grid gap-0 lg:grid-cols-[0.34fr_0.66fr]">
            <div className="border-b border-white/10 px-6 py-6 lg:border-r lg:border-b-0">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Mapa de cobertura
              </p>
              <h3 className="mt-2 text-3xl font-bold text-white">
                Atención técnica en todo Costa Rica
              </h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                Coordinamos servicios en diferentes zonas del país según el
                tipo de proyecto, alcance técnico y disponibilidad operativa.
              </p>

              <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-sm text-cyan-100">
                Cobertura nacional con base operativa en {brand.location}.
              </div>
            </div>

            <div className="min-h-[360px] lg:min-h-[420px]">
              <iframe
                title="Mapa de cobertura en Costa Rica"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-86.08%2C8.01%2C-82.45%2C11.40&layer=mapnik"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
