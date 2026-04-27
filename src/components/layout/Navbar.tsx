import { navigationItems } from "../../data/navigation";
import { brand } from "../../data/brand";
import { buildWhatsAppUrl } from "../../lib/whatsapp";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo / Nombre */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-wide">
            {brand.name}
          </span>
        </div>

        {/* Navegación */}
        <nav className="hidden gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA WhatsApp */}
        <a
          href={buildWhatsAppUrl(
            "Hola, quisiera solicitar una cotización de servicios.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export default Navbar;