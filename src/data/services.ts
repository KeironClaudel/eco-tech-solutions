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
    description: "Protección y monitoreo.",
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
    description: "Ingreso y control.",
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
    description: "Conectividad e infraestructura.",
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
    description: "Instalación y mantenimiento.",
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
    description: "Diseño y ejecución eléctrica.",
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
    description: "Soporte y prevención.",
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
