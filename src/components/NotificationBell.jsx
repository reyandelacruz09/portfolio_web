import { useEffect, useRef, useState } from "react";
import { FiBell, FiMail, FiCheck } from "react-icons/fi";
import { timeAgo } from "../utils";

export default function NotificationBell({
  messages,
  unreadCount,
  onOpenMessage,
  onViewAll,
  onMarkAllRead,
}) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (openRef.current && !openRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const recent = messages.slice(0, 6);

  const openMessage = (m) => {
    setOpen(false);
    onOpenMessage(m);
  };

  return (
    <div
        ref={(el) => (openRef.current = el)}
        className="relative"
      >
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative p-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
        aria-label="Notifications"
        title="Notifications"
      >
        <FiBell className="w-4 h-4" />
        {!open && unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold animate-pulse">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white dark:bg-[#111631] border border-gray-200/70 dark:border-white/10 rounded-2xl shadow-2xl shadow-black/20 z-50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200/70 dark:border-white/5">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Notifications
            </span>
            {unreadCount > 0 ? (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {unreadCount} unread
              </span>
            ) : (
              <span className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                <FiCheck className="w-3 h-3" /> All caught up
              </span>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {recent.length === 0 ? (
              <p className="px-4 py-8 text-center text-sm text-gray-500">
                No messages yet.
              </p>
            ) : (
              recent.map((m) => (
                <button
                  key={m.id}
                  onClick={() => openMessage(m)}
                  className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors border-b border-gray-100 dark:border-white/5 ${
                    !m.is_read ? "bg-cyan-500/[0.04] dark:bg-cyan-400/[0.04]" : ""
                  }`}
                >
                  <span
                    className={`mt-0.5 w-8 h-8 shrink-0 flex items-center justify-center rounded-full ${
                      m.is_read
                        ? "bg-gray-100 dark:bg-white/10 text-gray-400"
                        : "bg-cyan-500 text-white"
                    }`}
                  >
                    <FiMail className="w-4 h-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                        {m.name}
                      </span>
                      <span className="text-[10px] text-gray-400 shrink-0">
                        {timeAgo(m.created_at)}
                      </span>
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 truncate">
                      {m.subject || m.message}
                    </span>
                    <span className="block text-xs text-gray-400 dark:text-gray-500 truncate">
                      {m.message}
                    </span>
                  </span>
                </button>
              ))
            )}
          </div>

          <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-200/70 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]">
            {unreadCount > 0 ? (
              <button
                onClick={onMarkAllRead}
                className="text-xs text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
              >
                Mark all read
              </button>
            ) : (
              <span />
            )}
            <button
              onClick={() => {
                setOpen(false);
                onViewAll();
              }}
              className="text-xs text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
            >
              View all messages →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}