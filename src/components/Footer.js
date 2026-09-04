import { useContent } from "../content";

export default function Footer() {
  const { profile } = useContent();

  return (
    <footer className="bg-gray-50 dark:bg-[#0b1020] border-t border-gray-200/60 dark:border-white/5 py-8 px-6 text-center">
      <p className="text-gray-500 dark:text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} {profile.name}. Built with React &
        Tailwind CSS.
      </p>
    </footer>
  );
}
