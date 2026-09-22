import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h2 className="mb-6 text-3xl font-bold text-white after:mt-3 after:block after:h-1 after:w-12 after:rounded-full after:bg-[#8b5cf6]">Sobre mí</h2>
      <p className="leading-relaxed text-gray-300">
        Soy estudiante de {profile.role}, con base en {profile.location}.
        Me caracterizo por aprender rápido, ser responsable y puntual, y por
        tener una actitud positiva ante cada reto nuevo. Me adapto con
        facilidad a distintos entornos de trabajo y disfruto tanto del
        desarrollo web como del análisis de datos.
      </p>
    </section>
  );
}