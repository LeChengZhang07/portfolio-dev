import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm uppercase tracking-widest text-[#8b5cf6]">
        {profile.role}
      </p>
      <h1 className="text-4xl font-bold text-white sm:text-6xl">
        Hola, soy {profile.name}
      </h1>
      <p className="mt-6 max-w-xl text-gray-300">{profile.tagline}</p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-[#8b5cf6] px-6 py-3 font-medium text-black hover:bg-[#7c3aed] transition-colors"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/30 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}