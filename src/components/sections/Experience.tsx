import { experience, education } from "@/data/experience";
import FadeIn from "@/components/layout/FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <FadeIn>
      <h2 className="mb-10 text-3xl font-bold text-white after:mt-3 after:block after:h-1 after:w-12 after:rounded-full after:bg-[#8b5cf6]">
        Experiencia y formación
      </h2>

      <h3 className="mb-4 font-semibold text-white">Experiencia laboral</h3>
      {experience.map((item) => (
        <div key={item.title} className="mb-8">
          <div className="flex items-baseline justify-between">
            <p className="font-medium text-white">
              {item.title} — {item.place}
            </p>
            <span className="text-sm text-gray-400">{item.period}</span>
          </div>
          <ul className="mt-2 list-inside list-disc text-sm text-gray-300">
            {item.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3 className="mb-4 mt-10 font-semibold text-white">Formación</h3>
      {education.map((item) => (
        <div key={item.title} className="mb-4 flex items-baseline justify-between">
          <div>
            <p className="font-medium text-white">{item.title}</p>
            <p className="text-sm text-gray-400">{item.place}</p>
          </div>
          <span className="text-sm text-gray-400">{item.period}</span>
        </div>
      ))}
      </FadeIn>
    </section>
  );
}