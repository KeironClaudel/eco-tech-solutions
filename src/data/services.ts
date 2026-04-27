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
    title: "Electrical Services",
    description: "Residential, commercial and technical electrical solutions.",
    icon: Zap,
    services: [
      "Electrical inspections",
      "Residential and commercial installations",
      "Preventive maintenance",
      "Electrical plans",
      "Meter and service requests",
      "Electrical certifications",
      "Electrical reviews and diagnostics",
    ],
  },
  {
    title: "Air Conditioning",
    description: "Installation, maintenance and repair of A/C systems.",
    icon: Snowflake,
    services: [
      "Air conditioner installation",
      "Preventive maintenance",
      "Technical inspection",
      "Cleaning and repair",
    ],
  },
  {
    title: "Security Systems",
    description: "Security solutions for homes, businesses and facilities.",
    icon: Shield,
    services: [
      "CCTV security cameras",
      "Security alarms",
      "Fire alarm systems",
      "Electric fences",
    ],
  },
  {
    title: "Network Infrastructure",
    description: "Structured cabling, telecom and IT infrastructure.",
    icon: Network,
    services: [
      "Structured cabling",
      "Network and telephone infrastructure",
      "IT labs",
      "Racks, conduits and network points",
    ],
  },
];

export const serviceHighlights = [
  {
    label: "Inspections",
    icon: ClipboardCheck,
  },
  {
    label: "Installations",
    icon: Wrench,
  },
  {
    label: "Electrical Plans",
    icon: FileText,
  },
  {
    label: "CCTV",
    icon: Camera,
  },
  {
    label: "Alarms",
    icon: Bell,
  },
  {
    label: "Fire Systems",
    icon: Flame,
  },
  {
    label: "Telephony",
    icon: Phone,
  },
];