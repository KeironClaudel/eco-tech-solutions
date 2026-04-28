import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand } from "../../data/brand";
import { navigationItems } from "../../data/navigation";
import { buildWhatsAppUrl } from "../../lib/whatsapp";
import logo from "../../assets/images/ecotech-logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src={logo}
            alt={`${brand.name} logo`}
            className="h-10 w-auto"
          />
          <span className="hidden text-lg font-bold tracking-wide text-white sm:inline">
            {brand.name}
          </span>
        </a>

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

        <a
          href={buildWhatsAppUrl(
            "Hola, quisiera solicitar una cotización de servicios.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 md:inline-flex"
        >
          Contacto
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-white transition hover:border-cyan-300/50 hover:bg-white/5 md:hidden"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#05070a] px-6 py-5 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href={buildWhatsAppUrl(
                "Hola, quisiera solicitar una cotización de servicios.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-3 text-center font-semibold text-black transition hover:opacity-90"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
