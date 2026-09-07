const CONTENT_URL = "/api/v1/content/";
const AUTH_URL = "/api/v1/auth/login";
const CONTACT_URL = "/api/v1/contact/";

const TOKEN_KEY = "portfolio_admin_token";

function readStoredToken() {
  try {
    return sessionStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

let authToken = readStoredToken();

export function getToken() {
  return authToken;
}

export function setToken(token) {
  authToken = token;
  try {
    if (token) {
      sessionStorage.setItem(TOKEN_KEY, token);
    } else {
      sessionStorage.removeItem(TOKEN_KEY);
    }
  } catch {
    /* storage unavailable */
  }
}

export function isAuthenticated() {
  return Boolean(authToken);
}

export function unauthenticatedError() {
  return "Not authenticated";
}

function authHeaders() {
  return authToken ? { Authorization: `Bearer ${authToken}` } : {};
}

async function handle(res) {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const detail = body.detail;
    throw new Error(
      typeof detail === "string" ? detail : `Request failed: ${res.status}`
    );
  }
  return res.json();
}

export async function fetchContent() {
  const res = await fetch(CONTENT_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch content: ${res.status}`);
  }
  return res.json();
}

export async function login(username, password) {
  const res = await fetch(AUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await handle(res);
  setToken(data.access_token);
  return data;
}

export async function updateContent(updates) {
  const res = await fetch(CONTENT_URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ updates }),
  });
  return handle(res);
}

export async function fetchMessages() {
  const res = await fetch(`${CONTACT_URL}messages`, { headers: authHeaders() });
  return handle(res);
}

export async function markMessageRead(id, isRead = true) {
  const res = await fetch(`${CONTACT_URL}messages/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ is_read: isRead }),
  });
  return handle(res);
}

export async function sendMessage(data) {
  const res = await fetch(CONTACT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handle(res);
}

export async function deleteMessage(id) {
  const res = await fetch(`${CONTACT_URL}messages/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  return handle(res);
}