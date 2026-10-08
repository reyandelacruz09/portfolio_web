import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../api";
import { useContent } from "../content";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiX,
} from "react-icons/fi";

const iconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Email: FiMail,
  Phone: FiPhone,
};

const inputBase =
  "w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/40 transition-all";

function MessageDialog({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const sendMutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    },
  });

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    sendMutation.mutate(form);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Send a message"
    >
      <div
        className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0f1428] border border-gray-200/70 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/20 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/70 dark:border-white/5">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Send me a message
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Delivered straight to my inbox.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Close"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={submit} className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className={inputBase}
              placeholder="Your name"
              value={form.name}
              onChange={set("name")}
              required
            />
            <input
              className={inputBase}
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={set("email")}
              required
            />
          </div>
          <input
            className={inputBase}
            placeholder="Subject"
            value={form.subject}
            onChange={set("subject")}
          />
          <textarea
            className={`${inputBase} resize-none`}
            rows={4}
            placeholder="Your message…"
            value={form.message}
            onChange={set("message")}
            required
          />
          {sendMutation.isError && (
            <p className="text-sm text-red-500">{sendMutation.error.message}</p>
          )}
          {sent ? (
            <div className="text-center py-2">
              <p className="text-sm text-green-600 dark:text-green-400 mb-4">
                Message sent! I'll get back to you soon.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <button
              type="submit"
              disabled={sendMutation.isPending}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 transition-all duration-300 shadow-lg shadow-cyan-500/20 text-sm"
            >
              <FiSend className="w-4 h-4" />
              {sendMutation.isPending ? "Sending…" : "Send Message"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default function Contact() {
  const { socials, contact } = useContent();
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#0a0e1a] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-cyan-500/20" />
      </div>
      <div className="max-w-2xl mx-auto relative">
        <div className="text-center">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-balance">
            I'm always open to new opportunities, interesting projects, or just a
            conversation. Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 px-6 py-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-cyan-500/10 border border-gray-200 dark:border-white/5 hover:border-cyan-500/30"
            >
              <FiMail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="font-medium">{contact.email}</span>
            </a>
          )}
          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-3 text-gray-700 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-300 px-6 py-3 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-violet-500/10 border border-gray-200 dark:border-white/5 hover:border-violet-500/30"
            >
              <FiPhone className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <span className="font-medium">{contact.phone}</span>
            </a>
          )}
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 text-sm"
          >
            <FiSend className="w-4 h-4" />
            Send me a message
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {socials.map((s) => {
            const Icon = iconMap[s.label];
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/20 transition-all duration-300 backdrop-blur-sm"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {s.label}
              </a>
            );
          })}
        </div>
      </div>

      <MessageDialog open={open} onClose={() => setOpen(false)} />
    </section>
  );
}