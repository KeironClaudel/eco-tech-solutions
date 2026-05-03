import {
  ClipboardCheck,
  Flame,
  Network,
  Settings2,
  Shield,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";

export const serviceCategories = [
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
      "Monitoreo y respaldo técnico",
    ],
  },
  {
    title: "Alarma contra incendio",
    description: "Detección y protección.",
    icon: Flame,
    accentClass: "text-rose-300",
    iconColorClass: "text-rose-300",
    services: [
      "Sistemas de detección de humo",
      "Alarmas sonoras y visuales",
      "Integración de paneles y sensores",
      "Inspección y mantenimiento preventivo",
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
      "Organización de cuartos técnicos",
    ],
  },
  {
    title: "Aires acondicionados",
    description: "Instalación y mantenimiento.",
    icon: Snowflake,
    accentClass: "text-blue-300",
    iconColorClass: "text-blue-300",
    services: [
      "Instalación de aire acondicionado",
      "Mantenimiento preventivo",
      "Inspección técnica",
      "Limpieza y reparación",
    ],
  },
  {
    title: "Ingeniería eléctrica",
    description: "Diseño y ejecución eléctrica.",
    icon: Zap,
    accentClass: "text-amber-300",
    iconColorClass: "text-amber-300",
    services: [
      "Inspecciones eléctricas",
      "Instalaciones residenciales y comerciales",
      "Mantenimiento preventivo",
      "Planos eléctricos",
      "Solicitudes de medidor y acometida",
      "Certificaciones eléctricas",
      "Revisiones y diagnósticos eléctricos",
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
    title: "Mantenimiento empresarial",
    description: "Soporte y prevención.",
    icon: Wrench,
    accentClass: "text-emerald-300",
    iconColorClass: "text-emerald-300",
    services: [
      "Visitas técnicas programadas",
      "Revisiones preventivas",
      "Diagnóstico de fallas",
      "Soporte para instalaciones y mejoras",
    ],
  },
];

export const serviceHighlights = [
  {
    label: "Seguridad electrónica",
    icon: Shield,
  },
  {
    label: "Alarma contra incendio",
    icon: Flame,
  },
  {
    label: "Redes y cableado",
    icon: Network,
  },
  {
    label: "Aires acondicionados",
    icon: Snowflake,
  },
  {
    label: "Ingeniería eléctrica",
    icon: Zap,
  },
  {
    label: "Ingeniería electromecánica",
    icon: Settings2,
  },
  {
    label: "Mantenimiento empresarial",
    icon: ClipboardCheck,
  },
];
