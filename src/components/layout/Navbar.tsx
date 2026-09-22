"use client";

import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-white">
          {profile.name}
        </a>
        <ul className="hidden gap-6 text-sm text-gray-300 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.cvUrl}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
          download
        >
          CV
        </a>
      </nav>
    </header>
  );
}