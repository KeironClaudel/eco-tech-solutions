import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { brand } from "../../data/brand";
import { buildWhatsAppUrl, openWhatsApp } from "../../lib/whatsapp";

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 text-slate-50">
      <div className="mx-auto max-w-[1680px]">
        <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1fr]">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Contacto
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Solicite una visita técnica o una cotización.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Escríbanos y coordinamos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
              href={buildWhatsAppUrl(
                "Hola, quisiera solicitar una cotización para un servicio de EcotechCR.",
              )}
              className="flex items-center gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
            >
                <MessageCircle className="text-cyan-300" size={24} />
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-sm text-slate-300">{brand.phone}</p>
                </div>
              </a>

              <a
                href={`tel:${brand.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.05]"
              >
                <Phone className="text-cyan-300" size={24} />
                <div>
                  <p className="font-semibold text-white">Teléfono</p>
                  <p className="text-sm text-slate-300">{brand.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.05]"
              >
                <Mail className="text-cyan-300" size={24} />
                <div>
                  <p className="font-semibold text-white">Correo electrónico</p>
                  <p className="text-sm text-slate-300">{brand.email}</p>
                </div>
              </a>

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
                  inputMode="tel"
                  required
                  placeholder="Tu número"
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

                  openWhatsApp(whatsappMessage);
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

              <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-sm text-cyan-100">
                Cobertura nacional con base operativa en {brand.location}.
              </div>
            </div>

            <div className="min-h-[360px] lg:min-h-[420px]">
              <iframe
                title="Mapa de cobertura en Costa Rica"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-86.08%2C8.01%2C-82.45%2C11.40&layer=mapnik"
                className="pointer-events-none h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
