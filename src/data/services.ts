import {
  Bell,
  Camera,
  ClipboardCheck,
  FileText,
  Flame,
  Network,
  Phone,
  Shield,
  Snowflake,
  Wrench,
  Zap,
} from "lucide-react";

export const serviceCategories = [
  {
    title: "Servicios eléctricos",
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
    title: "Aire acondicionado",
    description: "Instalación, mantenimiento y reparación de sistemas A/C.",
    icon: Snowflake,
    services: [
      "Instalación de aire acondicionado",
      "Mantenimiento preventivo",
      "Inspección técnica",
      "Limpieza y reparación",
    ],
  },
  {
    title: "Sistemas de seguridad",
    description: "Soluciones de seguridad para hogares, negocios e instalaciones.",
    icon: Shield,
    services: [
      "Cámaras de seguridad CCTV",
      "Alarmas de seguridad",
      "Sistemas de alarma contra incendios",
      "Cercas eléctricas",
    ],
  },
  {
    title: "Infraestructura de redes",
    description: "Cableado estructurado, telecomunicaciones e infraestructura TI.",
    icon: Network,
    services: [
      "Cableado estructurado",
      "Infraestructura de red y telefonía",
      "Laboratorios de TI",
      "Racks, tuberías y puntos de red",
    ],
  },
];

export const serviceHighlights = [
  {
    label: "Inspecciones",
    icon: ClipboardCheck,
  },
  {
    label: "Instalaciones",
    icon: Wrench,
  },
  {
    label: "Planos eléctricos",
    icon: FileText,
  },
  {
    label: "CCTV",
    icon: Camera,
  },
  {
    label: "Alarmas",
    icon: Bell,
  },
  {
    label: "Sistemas contra incendios",
    icon: Flame,
  },
  {
    label: "Telefonía",
    icon: Phone,
  },
];
