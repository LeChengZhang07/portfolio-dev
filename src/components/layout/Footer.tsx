import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} {profile.name}. Hecho con Next.js y Tailwind CSS.
      </p>
    </footer>
  );
}