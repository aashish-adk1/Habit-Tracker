export async function fetchRecentSessions() {
  const res = await fetch('/api/sessions/recent')
  return res.json()
}