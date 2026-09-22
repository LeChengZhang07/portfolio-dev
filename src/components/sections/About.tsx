import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="mb-6 text-3xl font-bold text-white">Sobre mí</h2>
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