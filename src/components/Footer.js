import { useContent } from "../content";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  const { profile } = useContent();

  return (
    <footer className="bg-100 dark:bg-[#1c1917] border-t border-200/60 dark:border-white/5 py-10 px-6 text-center relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-700/10" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-lg font-bold text-900 dark:text-white">
            {profile.name.split(" ")[0]}
          </span>
          <span className="text-700 dark:text-500">.</span>
        </div>
        <p className="text-500 dark:text-600 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &
          Tailwind CSS.
        </p>
        <Link
          to="/admin"
          className="inline-block mt-4 text-xs text-400 dark:text-600 hover:text-700 dark:hover:text-500 transition-colors"
        >
          Admin
        </Link>
      </div>
    </footer>
  );
}
