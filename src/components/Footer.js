import { useContent } from "../content";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  const { profile } = useContent();

  return (
    <footer className="bg-gray-50 dark:bg-[#0a0e1a] border-t border-gray-200/60 dark:border-white/5 py-10 px-6 text-center relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-cyan-500/10" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {profile.name.split(" ")[0]}
          </span>
          <span className="text-violet-500 dark:text-violet-400">.</span>
        </div>
        <p className="text-gray-500 dark:text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &
          Tailwind CSS.
        </p>
        <Link
          to="/admin"
          className="inline-block mt-4 text-xs text-gray-400 dark:text-gray-600 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          Admin
        </Link>
      </div>
    </footer>
  );
}
