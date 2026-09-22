import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h2 className="mb-6 text-3xl font-bold text-white">Contacto</h2>
      <p className="text-gray-300">
        ¿Quieres hablar conmigo? Escríbeme por email o encuéntrame en estas redes.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 text-white">
        <a href={`mailto:${profile.email}`} className="hover:text-gray-300">
          {profile.email}
        </a>
        <a href={`tel:${profile.phone}`} className="hover:text-gray-300">
          {profile.phone}
        </a>
        <div className="mt-2 flex gap-6">
          <a href={profile.github} className="underline underline-offset-4 hover:text-gray-300">
            GitHub
          </a>
          <a href={profile.linkedin} className="underline underline-offset-4 hover:text-gray-300">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}