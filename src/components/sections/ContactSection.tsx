import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { brand } from "../../data/brand";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 text-slate-50">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.9fr_1fr]">
        <div className="animate-fade-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Contacto
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Solicita una cotización para tu próximo servicio técnico.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Cuéntanos qué necesitas y te ayudaremos con trabajos eléctricos,
            aire acondicionado, sistemas de seguridad o infraestructura de
            redes.
          </p>

          <div className="mt-8 space-y-4">
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
                <p className="font-semibold text-white">Ubicación</p>
                <p className="text-sm text-slate-300">{brand.location}</p>
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
                  Hola, quisiera solicitar una cotización.

                  Nombre: ${name}
                  Teléfono: ${phone}
                  Mensaje: ${message}
                `.trim();

                window.open(buildWhatsAppUrl(whatsappMessage), "_blank");
              }}
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2.5 font-semibold text-black shadow-lg shadow-cyan-950/40 transition hover:scale-[1.02] hover:opacity-90"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
