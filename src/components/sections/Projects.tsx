import { projects } from "@/data/projects";
import FadeIn from "@/components/layout/FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <FadeIn>
      <h2 className="mb-10 text-3xl font-bold text-white after:mt-3 after:block after:h-1 after:w-12 after:rounded-full after:bg-[#8b5cf6]">
        Proyectos
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#8b5cf6]/50 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-[#8b5cf6]/10"
          >
            <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-[#a78bfa]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-gray-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="text-[#8b5cf6] underline underline-offset-4 hover:text-[#a78bfa]"
                >
                  Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  className="text-[#8b5cf6] underline underline-offset-4 hover:text-[#a78bfa]"
                >
                  Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      </FadeIn>
    </section>
  );
}