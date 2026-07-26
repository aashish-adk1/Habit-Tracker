import { useEffect, useState } from 'react'
import { fetchRecentSessions } from '../services/sessionApi'

export function useRecentSessions() {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecentSessions().then(data => {
      setSessions(data)
      setLoading(false)
    })
  }, [])

  return { sessions, loading }
}