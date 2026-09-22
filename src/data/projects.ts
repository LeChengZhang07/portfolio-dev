export type Project = {
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Mi Portfolio",
    description:
      "Web personal construida con Next.js, TypeScript y Tailwind CSS, desplegada en Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/LeChengZhang07/portfolio-dev",
  },
  {
    title: "Rediseño web - Asociación AVANCE",
    description:
      "Diseño y maquetación de una página nueva con WordPress y Divi Builder durante mis prácticas, incluyendo personalizaciones con HTML, CSS y JavaScript.",
    tech: ["WordPress", "Divi", "HTML", "CSS", "JavaScript"],
  },
];