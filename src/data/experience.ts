export type ExperienceItem = {
  title: string;
  place: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Prácticas en Empresa",
    place: "Asociación AVANCE",
    period: "2026",
    bullets: [
      "Diseño y maquetación de una nueva página utilizando WordPress y Divi Builder.",
      "Mejora de la estructura visual y funcional de la web general.",
      "Implementación de personalizaciones mediante HTML, CSS y JavaScript.",
      "Adaptación de contenidos y componentes siguiendo criterios de claridad, orden y usabilidad.",
    ],
  },
];

export type EducationItem = {
  title: string;
  place: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
    place: "IES Luis Vives",
    period: "Sept 2025 - Actualidad",
  },
  {
    title: "Bachillerato, rama de Ciencias y Tecnología",
    place: "IES Siglo XXI",
    period: "Sept 2023 - Mayo 2025",
  },
];