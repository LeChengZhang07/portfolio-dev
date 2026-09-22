import { skills, languages } from "@/data/skills";
import FadeIn from "@/components/layout/FadeIn";

const groups = [
  { title: "Lenguajes", items: skills.lenguajes },
  { title: "Frameworks y librerías", items: skills.frameworks },
  { title: "Análisis de datos", items: skills.datos },
  { title: "Herramientas", items: skills.herramientas },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <FadeIn>
      <h2 className="mb-10 text-3xl font-bold text-white after:mt-3 after:block after:h-1 after:w-12 after:rounded-full after:bg-[#8b5cf6]">Skills</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 font-semibold text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mb-3 mt-10 font-semibold text-white">Idiomas</h3>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
        {languages.map((lang) => (
          <li key={lang.name}>
            {lang.name} — <span className="text-gray-400">{lang.level}</span>
          </li>
        ))}
      </ul>
      </FadeIn>
    </section>
  );
}