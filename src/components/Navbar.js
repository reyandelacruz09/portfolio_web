import { useState } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { profile } = useContent();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gray-50/90 dark:bg-[#0b1020]/90 backdrop-blur-md border-b border-gray-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a href="#hero" className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-indigo-500">.</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="ml-3 p-2.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-400 transition-all"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-600 dark:text-gray-400 text-2xl ml-1"
            aria-label="Toggle menu"
          >
            {open ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-white dark:bg-[#111827] border-t border-gray-200/60 dark:border-white/5 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
