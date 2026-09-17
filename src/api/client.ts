const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''

export async function fetchHealth(): Promise<unknown> {
  const url = `${API_BASE}/api/health`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}`)
  }
  return res.json()
}
