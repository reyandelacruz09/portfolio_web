import { useEffect } from "react";
import {
  FiX,
  FiEye,
  FiEyeOff,
  FiTrash2,
  FiSend,
  FiUser,
  FiClock,
} from "react-icons/fi";
import { dateTime, timeAgo } from "../utils";

export default function MessageDetailModal({
  message,
  onClose,
  onToggleRead,
  onMarkAllRead,
  onDelete,
  readPending,
  deleting,
}) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!message) return null;

  const replyHref = `mailto:${message.email}?subject=${encodeURIComponent(
    message.subject ? `Re: ${message.subject}` : "Re: Your message"
  )}&body=${encodeURIComponent(`Hi ${message.name},\n\n`)}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-white dark:bg-[#131a3a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between px-5 py-4 bg-cyan-500 text-white">
          <span className="font-semibold text-sm tracking-wide uppercase">
            Message details
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              {message.subject || "(No subject)"}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 break-all">
              {message.name} ·{" "}
              <a
                href={`mailto:${message.email}`}
                className="text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                {message.email}
              </a>
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 flex items-center gap-1">
              <FiClock className="w-3 h-3" /> {dateTime(message.created_at)} (
              {timeAgo(message.created_at)})
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
              {message.message}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <a
              href={replyHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              <FiSend className="w-4 h-4" /> Reply
            </a>
            <button
              onClick={onToggleRead}
              disabled={readPending}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors disabled:opacity-50"
            >
              {message.is_read ? (
                <>
                  <FiEyeOff className="w-4 h-4" /> Mark unread
                </>
              ) : (
                <>
                  <FiEye className="w-4 h-4" /> Mark read
                </>
              )}
            </button>
            <button
              onClick={onMarkAllRead}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              Mark all read
            </button>
            <button
              onClick={onDelete}
              disabled={deleting}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-red-500 border border-red-500/30 hover:bg-red-500/10 transition-colors disabled:opacity-50"
            >
              <FiTrash2 className="w-4 h-4" /> Delete
            </button>
          </div>

          {message.is_read ? (
            <p className="flex items-center gap-1 text-xs text-gray-400">
              <FiUser className="w-3 h-3" /> This message has been read.
            </p>
          ) : (
            <p className="flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400">
              <FiEye className="w-3 h-3" /> New unread message
            </p>
          )}
        </div>
      </div>
    </div>
  );
}