import type { LucideIcon } from "lucide-react";
import {
  Flame,
  MonitorSmartphone,
  Network,
  Shield,
  Snowflake,
  Zap,
} from "lucide-react";
import dahuaLogo from "../assets/images/brands/dahua.svg";
import eatonLogo from "../assets/images/brands/eaton.svg";
import hagroyLogo from "../assets/images/brands/hagroy.svg";
import hikvisionLogo from "../assets/images/brands/hikvision.svg";
import honeywellLogo from "../assets/images/brands/honeywell.svg";
import huaweiLogo from "../assets/images/brands/huawei.png";
import jflLogo from "../assets/images/brands/jfl.svg";
import linksysLogo from "../assets/images/brands/Linksys.svg";
import mikrotikLogo from "../assets/images/brands/mikrotik.svg";
import paradoxLogo from "../assets/images/brands/paradox.png";
import reyeeLogo from "../assets/images/brands/reyee.svg";
import siemensLogo from "../assets/images/brands/siemens.svg";
import simplexLogo from "../assets/images/brands/simplex.png";
import squareDLogo from "../assets/images/brands/square-d.svg";
import ubiquitiLogo from "../assets/images/brands/ubiquiti.svg";
import zktecoLogo from "../assets/images/brands/zkteco.svg";
import fireliteLogo from "../assets/images/brands/firelite.svg";
export type BrandItem = {
  name: string;
  logo?: string;
  logoClassName?: string;
  tileClassName?: string;
};

type BrandCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  brands: BrandItem[];
};

export const brandCategories: BrandCategory[] = [
  {
    title: "Seguridad electrónica",
    description: "Cámaras, alarmas y control.",
    icon: Shield,
    brands: [
      { name: "Hikvision", logo: hikvisionLogo, logoClassName: "max-h-10" },
      { name: "Dahua", logo: dahuaLogo, logoClassName: "max-h-9" },
      { name: "Hagroy", logo: hagroyLogo, logoClassName: "max-h-14" },
      { name: "JFL", logo: jflLogo, logoClassName: "max-h-12" },
      { name: "Paradox", logo: paradoxLogo, logoClassName: "max-h-11" },
      { name: "ZKTeco", logo: zktecoLogo, logoClassName: "max-h-12" },
      { name: "Honeywell", logo: honeywellLogo, logoClassName: "max-h-10" },
    ],
  },
  {
    title: "Redes y conectividad",
    description: "Redes y telecom.",
    icon: Network,
    brands: [
      { name: "Reyee", logo: reyeeLogo, logoClassName: "max-h-10" },
      { name: "Ubiquiti", logo: ubiquitiLogo, logoClassName: "max-h-11" },
      { name: "MikroTik", logo: mikrotikLogo, logoClassName: "max-h-10" },
      { name: "Linksys", logo: linksysLogo, logoClassName: "max-h-9" },
      { name: "Huawei", logo: huaweiLogo, logoClassName: "max-h-12" },
    ],
  },
  {
    title: "Material eléctrico",
    description: "Equipos y componentes.",
    icon: Zap,
    brands: [
      { name: "Eaton", logo: eatonLogo, logoClassName: "max-h-10" },
      { name: "Square D", logo: squareDLogo, logoClassName: "max-h-9" },
      { name: "Siemens", logo: siemensLogo, logoClassName: "max-h-10" },
    ],
  },
  {
    title: "Alarmas contra incendio",
    description: "Detección y protección.",
    icon: Flame,
    brands: [
      { name: "Fire-Lite", logo: fireliteLogo, logoClassName: "max-h-11" },
      { name: "Simplex", logo: simplexLogo, logoClassName: "max-h-11" },
    ],
  },
];

export const brandFlexibleCategories: BrandCategory[] = [
  {
    title: "Aire acondicionado",
    description: "Marcas según proyecto.",
    icon: Snowflake,
    brands: [
      { name: "Marcas variadas" },
      { name: "Equipos residenciales" },
      { name: "Equipos comerciales" },
    ],
  },
  {
    title: "Equipos de cómputo",
    description: "Componentes según necesidad.",
    icon: MonitorSmartphone,
    brands: [
      { name: "Componentes variados" },
      { name: "Equipos de oficina" },
      { name: "Soluciones a medida" },
    ],
  },
];
