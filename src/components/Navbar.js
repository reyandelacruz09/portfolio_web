import { useState, useEffect } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { profile } = useContent();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#1c1917]/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-200/60 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
        <a
          href="#hero"
          className="text-lg font-bold text-900 dark:text-white tracking-tight group"
        >
          <span className="text-700 dark:text-500">{profile.name.split(" ")[0]}</span>
          <span className="text-700 dark:text-500 group-hover:text-700 dark:group-hover:text-500 transition-colors">.</span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-600 dark:text-400 hover:text-700 dark:hover:text-500 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-100 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="ml-3 p-2.5 rounded-xl border border-200 dark:border-white/10 text-600 dark:text-400 hover:text-700 dark:hover:text-500 hover:border-700/50 hover:bg-700/5 transition-all duration-300"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-600 dark:text-400 text-2xl ml-1 hover:text-700 dark:hover:text-500 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-white/95 dark:bg-[#1c1917]/95 backdrop-blur-xl border-t border-200/60 dark:border-white/5 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-600 dark:text-400 hover:text-700 dark:hover:text-500 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-100 dark:hover:bg-white/5"
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
