import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold text-white">Proyectos</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-semibold text-white">
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
                  className="text-white underline underline-offset-4 hover:text-gray-300"
                >
                  Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  className="text-white underline underline-offset-4 hover:text-gray-300"
                >
                  Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}