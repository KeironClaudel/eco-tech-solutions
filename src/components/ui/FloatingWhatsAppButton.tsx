import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

function FloatingWhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(
        "Hola, quisiera solicitar información sobre los servicios de EcotechCR.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact by WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-2xl shadow-cyan-950/50 transition hover:scale-105 hover:opacity-90"
    >
      <MessageCircle size={26} />
    </a>
  );
}

export default FloatingWhatsAppButton;