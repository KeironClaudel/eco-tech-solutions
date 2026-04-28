import {
  ClipboardCheck,
  DoorClosed,
  Network,
  Shield,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";

export const serviceCategories = [
  {
    title: "Seguridad electrónica",
    description: "Protección para hogares, negocios e instalaciones.",
    icon: Shield,
    services: [
      "Cámaras de seguridad CCTV",
      "Alarmas de seguridad",
      "Cercas eléctricas",
      "Sistemas de alarma contra incendios",
    ],
  },
  {
    title: "Control de acceso",
    description: "Sistemas para control, ingreso y monitoreo de usuarios.",
    icon: DoorClosed,
    services: [
      "Control de acceso peatonal",
      "Equipos biométricos y lectores",
      "Integración con cámaras y alarmas",
      "Soporte para accesos empresariales",
    ],
  },
  {
    title: "Redes y cableado",
    description: "Infraestructura para conectividad, telecom y orden técnico.",
    icon: Network,
    services: [
      "Cableado estructurado",
      "Infraestructura de red y telefonía",
      "Racks, tuberías y puntos de red",
      "Organización de cuartos técnicos",
    ],
  },
  {
    title: "Aires acondicionados",
    description: "Instalación, mantenimiento y soporte técnico especializado.",
    icon: Snowflake,
    services: [
      "Instalación de aire acondicionado",
      "Mantenimiento preventivo",
      "Inspección técnica",
      "Limpieza y reparación",
    ],
  },
  {
    title: "Ingeniería eléctrica",
    description: "Soluciones eléctricas residenciales, comerciales y técnicas.",
    icon: Zap,
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
    title: "Mantenimiento empresarial",
    description: "Acompañamiento técnico para continuidad operativa y prevención.",
    icon: Wrench,
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
    label: "Control de acceso",
    icon: DoorClosed,
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
    label: "Mantenimiento empresarial",
    icon: ClipboardCheck,
  },
];
