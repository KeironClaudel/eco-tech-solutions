import {
  ClipboardCheck,
  Code2,
  Flame,
  Network,
  Settings2,
  Shield,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceFeature =
  | string
  | {
      title: string;
      details?: string[];
    };

export type ServiceCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass?: string;
  iconColorClass?: string;
  services: ServiceFeature[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Seguridad electrónica",
    description: "Protección y monitoreo.",
    icon: Shield,
    accentClass: "text-cyan-300",
    iconColorClass: "text-cyan-300",
    services: [
      "Cámaras de seguridad CCTV",
      "Alarmas de seguridad",
      "Cercas eléctricas",
    ],
  },
  {
    title: "Alarmas contra incendio",
    description: "Detección y protección.",
    icon: Flame,
    accentClass: "text-rose-300",
    iconColorClass: "text-rose-300",
    services: [
      "Sistemas de detección de humo",
      "Alarmas sonoras y visuales",
      "Integración de paneles y sensores",
      "Inspección, mantenimiento y reparación",
    ],
  },
  {
    title: "Redes y cableado",
    description: "Conectividad e infraestructura.",
    icon: Network,
    accentClass: "text-sky-300",
    iconColorClass: "text-sky-300",
    services: [
      "Cableado estructurado",
      "Infraestructura de red y telefonía",
      "Racks, tuberías y puntos de red",
      "Organización de centros de datos",
    ],
  },
  {
    title: "Climatización",
    description: "Instalación y mantenimiento.",
    icon: Snowflake,
    accentClass: "text-blue-300",
    iconColorClass: "text-blue-300",
    services: [
      "Instalación de aire acondicionado",
      "Inspección técnica",
      "Mantenimiento preventivo, limpieza y reparación",
    ],
  },
  {
    title: "Ingeniería eléctrica",
    description: "Diseño y ejecución eléctrica.",
    icon: Zap,
    accentClass: "text-amber-300",
    iconColorClass: "text-amber-300",
    services: [
      {
        title: "Inspecciones eléctricas",
        details: ["Certificaciones", "Solicitudes", "Otros trámites"],
      },
      {
        title: "Instalaciones residenciales y comerciales",
        details: ["Mantenimiento preventivo"],
      },
      "Planos eléctricos",
    ],
  },
  {
    title: "Soporte de TI",
    description: "Soporte y prevención.",
    icon: Wrench,
    accentClass: "text-emerald-300",
    iconColorClass: "text-emerald-300",
    services: [
      "Mantenimiento y reparación de equipo de informática",
      {
        title: "Revisiones preventivas",
        details: ["Visitas técnicas programadas", "Diagnóstico de fallas"],
      },
      "Soporte para instalaciones y mejoras",
    ],
  },
  {
    title: "Ingeniería electromecánica",
    description: "Integración técnica y soporte industrial.",
    icon: Settings2,
    accentClass: "text-violet-300",
    iconColorClass: "text-violet-300",
    services: [
      "Montaje de equipos electromecánicos",
      "Integración de sistemas y tableros",
      "Soporte para motores y automatización",
      "Diagnóstico y mantenimiento técnico",
    ],
  },
  {
    title: "Desarrollo de software",
    description: "Soluciones digitales a medida.",
    icon: Code2,
    accentClass: "text-violet-300",
    iconColorClass: "text-violet-300",
    services: [
      "Desarrollo web",
      "Desarrollo de aplicaciones",
      "Automatización de procesos",
      "Integraciones a medida",
    ],
  },
];

export const serviceHighlights = [
  {
    label: "Seguridad electrónica",
    icon: Shield,
  },
  {
    label: "Alarmas contra incendio",
    icon: Flame,
  },
  {
    label: "Redes y cableado",
    icon: Network,
  },
  {
    label: "Climatización",
    icon: Snowflake,
  },
  {
    label: "Ingeniería eléctrica",
    icon: Zap,
  },
  {
    label: "Soporte de TI",
    icon: ClipboardCheck,
  },
  {
    label: "Ingeniería electromecánica",
    icon: Settings2,
  },
  {
    label: "Desarrollo de software",
    icon: Code2,
  },
];
