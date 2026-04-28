import { brand } from "../../data/brand";
import { navigationItems } from "../../data/navigation";

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-white">{brand.name}</p>
          <p className="mt-1 text-sm">{brand.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-4">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm">
          © {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
