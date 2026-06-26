const BASE_URL = "https://fakestoreapi.com";

export async function fetchJSON(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
