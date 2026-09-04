import { useContent } from "../content";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const iconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Email: FiMail,
  Phone: FiPhone,
};

export default function Contact() {
  const { socials, contact } = useContent();

  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#0f172a]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-500 mb-8 leading-relaxed">
          I'm always open to new opportunities, interesting projects, or just a
          conversation. Feel free to reach out.
        </p>
        <div className="flex flex-col items-center gap-3 mb-8 text-gray-600 dark:text-gray-400">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <FiMail className="w-4 h-4" />
              {contact.email}
            </a>
          )}
          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <FiPhone className="w-4 h-4" />
              {contact.phone}
            </a>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((s) => {
            const Icon = iconMap[s.label];
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
