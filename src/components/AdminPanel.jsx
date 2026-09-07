import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FiBell, FiSun, FiMoon, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import { useTheme } from "../theme";
import NotificationBell from "./NotificationBell";
import MessageDetailModal from "./MessageDetailModal";
import {
  login,
  fetchContent,
  updateContent,
  fetchMessages,
  deleteMessage,
  markMessageRead,
  setToken,
  isAuthenticated,
} from "../api";

const tabs = ["Hero", "Socials", "About", "Skills", "Projects", "Experience", "Contact", "Inbox"];

const sectionHints = {
  Hero: "Edit the intro of your portfolio.",
  Socials: "Links shown across the site.",
  About: "Short paragraphs about you.",
  Skills: "Grouped by category.",
  Projects: "Tech separated by commas.",
  Experience: "Work history, newest first.",
  Contact: "Email & phone shown in the contact section.",
  Inbox: "Messages sent from the contact form.",
};

function Field({ label, value, onChange, textarea, type = "text" }) {
  const base =
    "w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0a0e1a] text-gray-900 dark:text-slate-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/40 transition-all text-sm";
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 uppercase tracking-wide">
        {label}
      </span>
      {textarea ? (
        <textarea
          className={base}
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={base}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}

function Section({ title, hint, children }) {
  return (
    <section className="bg-white dark:bg-[#0f1428] border border-gray-200/70 dark:border-white/5 rounded-2xl p-6 shadow-lg shadow-black/5">
      <div className="mb-5 pb-3 border-b border-gray-200/70 dark:border-white/5">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-widest">
          <span className="bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        {hint && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{hint}</p>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function ListRow({ index, onMoveUp, onMoveDown, onRemove, children }) {
  return (
    <div className="group relative bg-white dark:bg-[#111631] border border-gray-200 dark:border-white/5 rounded-xl p-4">
      <div className="absolute -top-2 -right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onMoveUp}
          disabled={index === 0}
          className="w-7 h-7 rounded-full bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-cyan-500 hover:text-white disabled:opacity-30 text-xs font-bold"
          title="Move up"
        >
          ↑
        </button>
        <button
          onClick={onMoveDown}
          className="w-7 h-7 rounded-full bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-cyan-500 hover:text-white text-xs font-bold"
          title="Move down"
        >
          ↓
        </button>
        <button
          onClick={onRemove}
          className="w-7 h-7 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white text-xs font-bold"
          title="Remove"
        >
          ✕
        </button>
      </div>
      {children}
    </div>
  );
}

function HeroTab({ data, set }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <Field label="Name" value={data.name} onChange={(v) => set({ name: v })} />
      </div>
      <Field label="Title" value={data.title} onChange={(v) => set({ title: v })} />
      <Field label="Location" value={data.location} onChange={(v) => set({ location: v })} />
      <div className="md:col-span-2">
        <Field label="Photo path" value={data.photo} onChange={(v) => set({ photo: v })} />
      </div>
      <div className="md:col-span-2">
        <Field
          label="Tagline"
          textarea
          value={data.tagline}
          onChange={(v) => set({ tagline: v })}
        />
      </div>
    </div>
  );
}

function SocialsTab({ data, set }) {
  const update = (i, key, value) => {
    const next = data.map((s, idx) => (idx === i ? { ...s, [key]: value } : s));
    set(next);
  };
  return (
    <div className="space-y-3">
      {data.map((social, i) => (
        <ListRow
          key={i}
          index={i}
          onRemove={() => set(data.filter((_, idx) => idx !== i))}
        >
          <div className="grid grid-cols-2 gap-3">
            <Field label="Label" value={social.label} onChange={(v) => update(i, "label", v)} />
            <Field label="URL" value={social.url} onChange={(v) => update(i, "url", v)} />
          </div>
        </ListRow>
      ))}
      <button
        onClick={() => set([...data, { label: "", url: "" }])}
        className="text-sm text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
      >
        + Add social
      </button>
    </div>
  );
}

function AboutTab({ data, set }) {
  return (
    <div className="space-y-3">
      {data.map((paragraph, i) => (
        <ListRow
          key={i}
          index={i}
          onRemove={() => set(data.filter((_, idx) => idx !== i))}
        >
          <Field
            label={`Paragraph ${i + 1}`}
            textarea
            value={paragraph}
            onChange={(v) => set(data.map((p, idx) => (idx === i ? v : p)))}
          />
        </ListRow>
      ))}
      <button
        onClick={() => set([...data, ""])}
        className="text-sm text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
      >
        + Add paragraph
      </button>
    </div>
  );
}

function SkillsTab({ data, set }) {
  const update = (i, key, value) => {
    const next = data.map((c, idx) => (idx === i ? { ...c, [key]: value } : c));
    set(next);
  };
  return (
    <div className="space-y-3">
      {data.map((cat, i) => (
        <ListRow key={i} index={i} onRemove={() => set(data.filter((_, idx) => idx !== i))}>
          <div className="space-y-3">
            <Field label="Category" value={cat.category} onChange={(v) => update(i, "category", v)} />
            <Field
              label="Skills (comma separated)"
              value={cat.items.join(", ")}
              onChange={(v) =>
                update(i, "items", v.split(",").map((s) => s.trim()).filter(Boolean))
              }
            />
          </div>
        </ListRow>
      ))}
      <button
        onClick={() => set([...data, { category: "", items: [] }])}
        className="text-sm text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
      >
        + Add category
      </button>
    </div>
  );
}

function ProjectsTab({ data, set }) {
  const update = (i, key, value) => {
    const next = data.map((p, idx) => (idx === i ? { ...p, [key]: value } : p));
    set(next);
  };
  const techKey = (p) => (Array.isArray(p.tech) ? p.tech.join(", ") : p.tech || "");
  const setTech = (i, v) =>
    update(i, "tech", v.split(",").map((s) => s.trim()).filter(Boolean));
  return (
    <div className="space-y-3">
      {data.map((proj, i) => (
        <ListRow key={i} index={i} onRemove={() => set(data.filter((_, idx) => idx !== i))}>
          <div className="grid md:grid-cols-2 gap-3">
            <Field label="Title" value={proj.title} onChange={(v) => update(i, "title", v)} />
            <Field label="Tech (comma separated)" value={techKey(proj)} onChange={(v) => setTech(i, v)} />
            <div className="md:col-span-2">
              <Field label="Description" textarea value={proj.description} onChange={(v) => update(i, "description", v)} />
            </div>
            <Field label="GitHub URL" value={proj.github} onChange={(v) => update(i, "github", v)} />
            <Field label="Live URL" value={proj.live} onChange={(v) => update(i, "live", v)} />
            <div className="md:col-span-2">
              <Field label="Image URL" value={proj.image_url || ""} onChange={(v) => update(i, "image_url", v)} />
            </div>
          </div>
        </ListRow>
      ))}
      <button
        onClick={() =>
          set([...data, { title: "", description: "", tech: [], github: "", live: "", image_url: "" }])
        }
        className="text-sm text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
      >
        + Add project
      </button>
    </div>
  );
}

function ExperienceTab({ data, set }) {
  const update = (i, key, value) => {
    const next = data.map((e, idx) => (idx === i ? { ...e, [key]: value } : e));
    set(next);
  };
  return (
    <div className="space-y-3">
      {data.map((exp, i) => (
        <ListRow key={i} index={i} onRemove={() => set(data.filter((_, idx) => idx !== i))}>
          <div className="grid md:grid-cols-3 gap-3">
            <Field label="Role" value={exp.role} onChange={(v) => update(i, "role", v)} />
            <Field label="Company" value={exp.company} onChange={(v) => update(i, "company", v)} />
            <Field label="Period" value={exp.period} onChange={(v) => update(i, "period", v)} />
            <div className="md:col-span-3">
              <Field label="Description" textarea value={exp.description} onChange={(v) => update(i, "description", v)} />
            </div>
          </div>
        </ListRow>
      ))}
      <button
        onClick={() => set([...data, { role: "", company: "", period: "", description: "" }])}
        className="text-sm text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
      >
        + Add experience
      </button>
    </div>
  );
}

function ContactTab({ data, set }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Field label="Email" value={data.email || ""} onChange={(v) => set({ ...data, email: v })} />
      <Field label="Phone" value={data.phone || ""} onChange={(v) => set({ ...data, phone: v })} />
    </div>
  );
}

function InboxTab({ messages, isLoading, unread, onOpen, readMutation, deleteMutation, markAllRead }) {
  if (isLoading) {
    return <p className="text-sm text-gray-500">Loading messages…</p>;
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {unread > 0
            ? `${unread} unread message${unread > 1 ? "s" : ""}`
            : "All caught up"}
        </p>
        {unread > 0 && (
          <button
            onClick={markAllRead}
            className="text-xs text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
          >
            Mark all as read
          </button>
        )}
      </div>
      {messages.length === 0 ? (
        <p className="text-sm text-gray-500">No messages yet.</p>
      ) : (
        messages.map((m) => (
          <div
            key={m.id}
            onClick={() => onOpen(m)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen(m)}
            className={`relative bg-white dark:bg-[#111631] border rounded-xl p-4 transition-colors cursor-pointer ${
              m.is_read
                ? "border-gray-200 dark:border-white/5 hover:border-cyan-500/40"
                : "border-cyan-500/40 dark:border-cyan-400/40 bg-cyan-500/[0.03] dark:bg-cyan-400/[0.03]"
            }`}
          >
            <div
              className="absolute -top-2 -right-2 flex gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() =>
                  readMutation.mutate({ id: m.id, isRead: !m.is_read })
                }
                className="w-7 h-7 rounded-full bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-violet-500 hover:text-white text-xs"
                title={m.is_read ? "Mark as unread" : "Mark as read"}
              >
                {m.is_read ? <FiEyeOff className="mx-auto w-3.5 h-3.5" /> : <FiEye className="mx-auto w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => deleteMutation.mutate(m.id)}
                className="w-7 h-7 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white text-xs font-bold"
                title="Delete message"
              >
                ✕
              </button>
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                {!m.is_read && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-400/10 px-2 py-0.5 rounded-full mb-1.5">
                    New
                  </span>
                )}
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {m.name} <span className="text-gray-400 font-normal">· {m.email}</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {m.subject || "(no subject)"} · {new Date(m.created_at).toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 whitespace-pre-wrap line-clamp-3">
                  {m.message}
                </p>
              </div>
              <FiMail className="shrink-0 w-4 h-4 text-gray-300 dark:text-gray-600 mt-1" />
            </div>
            <p className="mt-2 text-xs font-medium text-cyan-600 dark:text-cyan-400">
              View details →
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default function AdminPanel() {
  const queryClient = useQueryClient();
  const { theme, toggleTheme } = useTheme();
  const [tab, setTab] = useState("Hero");
  const [authed, setAuthed] = useState(isAuthenticated());
  const [form, setForm] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [detail, setDetail] = useState(null);

  const loginMutation = useMutation({
    mutationFn: ({ username, password }) => login(username, password),
    onSuccess: () => {
      setMessage({ type: "success", text: "" });
      setAuthed(true);
    },
    onError: (err) => setMessage({ type: "error", text: err.message }),
  });

  const contentQuery = useQuery({
    queryKey: ["content"],
    queryFn: fetchContent,
    enabled: authed,
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const messagesQuery = useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
    enabled: authed,
    refetchInterval: 15000,
    refetchIntervalInBackground: true,
  });

  const messages = messagesQuery.data ?? [];
  const unreadCount = messages.filter((m) => !m.is_read).length;

  const invalidateMessages = () =>
    queryClient.invalidateQueries({ queryKey: ["messages"] });

  const deleteMutation = useMutation({
    mutationFn: deleteMessage,
    onSuccess: invalidateMessages,
  });

  const readMutation = useMutation({
    mutationFn: ({ id, isRead }) => markMessageRead(id, isRead),
    onSuccess: invalidateMessages,
  });

  const markAllRead = () =>
    messages
      .filter((m) => !m.is_read)
      .forEach((m) => readMutation.mutate({ id: m.id, isRead: true }));

  const openMessage = (m) => {
    setDetail(m);
    if (!m.is_read) readMutation.mutate({ id: m.id, isRead: true });
  };

  const saveMutation = useMutation({
    mutationFn: () => updateContent(form),
    onSuccess: () => {
      setMessage({ type: "success", text: "Changes saved successfully." });
      queryClient.invalidateQueries({ queryKey: ["content"] });
    },
    onError: (err) => {
      if (/not authenticated|401|403/i.test(err.message)) {
        setToken(null);
        setAuthed(false);
      }
      setMessage({ type: "error", text: err.message });
    },
  });

  useEffect(() => {
    if (contentQuery.data && form === null) {
      const data = contentQuery.data;
      setForm({
        name: data.name || "",
        title: data.title || "",
        tagline: data.tagline || "",
        location: data.location || "",
        photo: data.photo || "",
        socials: data.socials || [],
        about: data.about || [],
        skills: data.skills || [],
        projects: data.projects || [],
        experience: data.experience || [],
        contact: data.contact || { email: "", phone: "" },
      });
    }
  }, [contentQuery.data, form]);

  if (!authed) {
    const submitLogin = (e) => {
      e.preventDefault();
      setMessage({ type: "", text: "" });
      loginMutation.mutate(loginForm);
    };
    return (
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0a0e1a] text-gray-900 dark:text-slate-200 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <Link
            to="/"
            className="mb-6 text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            ← Back to portfolio
          </Link>
          <div className="bg-white dark:bg-[#0f1428] border border-gray-200/70 dark:border-white/5 rounded-2xl p-8 shadow-xl">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Admin Login
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Sign in to edit portfolio content.
            </p>
            <form onSubmit={submitLogin} className="space-y-4">
              <Field
                label="Username"
                value={loginForm.username}
                onChange={(v) => setLoginForm({ ...loginForm, username: v })}
              />
              <Field
                label="Password"
                type="password"
                value={loginForm.password}
                onChange={(v) => setLoginForm({ ...loginForm, password: v })}
              />
              {message.text && (
                <p
                  className={`text-sm ${
                    message.type === "error" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {message.text}
                </p>
              )}
              <button
                type="submit"
                disabled={loginMutation.isPending}
                className="w-full py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 text-sm"
              >
                {loginMutation.isPending ? "Signing in…" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const setFormSection = (section, value) =>
    setForm((prev) => ({ ...prev, [section]: value }));

  const logout = () => {
    setToken(null);
    setAuthed(false);
    setDetail(null);
    setMessage({ type: "", text: "" });
  };

  const tabContent = (() => {
    if (!form) return null;
    switch (tab) {
      case "Hero":
        return <HeroTab data={form} set={(patch) => setForm((p) => ({ ...p, ...patch }))} />;
      case "Socials":
        return <SocialsTab data={form.socials} set={(v) => setFormSection("socials", v)} />;
      case "About":
        return <AboutTab data={form.about} set={(v) => setFormSection("about", v)} />;
      case "Skills":
        return <SkillsTab data={form.skills} set={(v) => setFormSection("skills", v)} />;
      case "Projects":
        return <ProjectsTab data={form.projects} set={(v) => setFormSection("projects", v)} />;
      case "Experience":
        return <ExperienceTab data={form.experience} set={(v) => setFormSection("experience", v)} />;
      case "Contact":
        return <ContactTab data={form.contact} set={(v) => setFormSection("contact", v)} />;
      case "Inbox":
        return (
          <InboxTab
            messages={messages}
            isLoading={messagesQuery.isLoading}
            unread={unreadCount}
            onOpen={openMessage}
            readMutation={readMutation}
            deleteMutation={deleteMutation}
            markAllRead={markAllRead}
          />
        );
      default:
        return null;
    }
  })();

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#0a0e1a] text-gray-900 dark:text-slate-200">
      <header className="bg-white/80 dark:bg-[#0a0e1a]/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/5 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
            >
              ← View site
            </Link>
            <h1 className="font-bold text-gray-900 dark:text-white">
              Admin <span className="text-cyan-600 dark:text-cyan-400">Dashboard</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
              aria-label="Toggle theme"
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
            </button>
            <NotificationBell
              messages={messages}
              unreadCount={unreadCount}
              onOpenMessage={openMessage}
              onViewAll={() => setTab("Inbox")}
              onMarkAllRead={markAllRead}
            />
            <button
              onClick={logout}
              className="text-sm px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-red-500 hover:border-red-500/50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                tab === t
                  ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white dark:bg-[#0f1428] border border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
              }`}
            >
              {t}
              {t === "Inbox" && unreadCount > 0 && (
                <span
                  className={`absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 flex items-center justify-center rounded-full text-[10px] font-bold ${
                    tab === t
                      ? "bg-white text-cyan-600"
                      : "bg-red-500 text-white animate-pulse"
                  }`}
                >
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {unreadCount > 0 && tab !== "Inbox" && (
          <button
            onClick={() => setTab("Inbox")}
            className="mb-6 w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 transition-colors"
          >
            <span className="flex items-center gap-2">
              <FiBell className="w-4 h-4" />
              You have <strong>{unreadCount}</strong> new message{unreadCount > 1 ? "s" : ""}
            </span>
            <span className="text-xs font-medium underline underline-offset-2">
              Open inbox
            </span>
          </button>
        )}

        {contentQuery.isLoading ? (
          <p className="text-gray-500">Loading content…</p>
        ) : contentQuery.error ? (
          <p className="text-red-500">{contentQuery.error.message}</p>
        ) : (
          <>
            {message.text && (
              <div
                className={`mb-5 px-4 py-3 rounded-xl text-sm border ${
                  message.type === "error"
                    ? "bg-red-500/5 border-red-500/30 text-red-500"
                    : "bg-green-500/5 border-green-500/30 text-green-600 dark:text-green-400"
                }`}
              >
                {message.text}
              </div>
            )}
            <Section title={tab} hint={sectionHints[tab] || ""}>
              {tabContent}
            </Section>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => saveMutation.mutate()}
                disabled={saveMutation.isPending}
                className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 disabled:opacity-50 transition-all duration-300 shadow-lg shadow-cyan-500/20 text-sm"
              >
                {saveMutation.isPending ? "Saving…" : "Save changes"}
              </button>
            </div>
          </>
        )}
      </div>

      {detail && (
        <MessageDetailModal
          message={detail}
          onClose={() => setDetail(null)}
          onToggleRead={() =>
            readMutation.mutate({ id: detail.id, isRead: !detail.is_read })
          }
          onMarkAllRead={markAllRead}
          onDelete={() => {
            deleteMutation.mutate(detail.id);
            setDetail(null);
          }}
          readPending={readMutation.isPending}
          deleting={deleteMutation.isPending}
        />
      )}
    </div>
  );
}