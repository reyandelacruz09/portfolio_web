const API_URL = "/api/v1/content/";

export async function fetchContent() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch content: ${res.status}`);
  }
  return res.json();
}
