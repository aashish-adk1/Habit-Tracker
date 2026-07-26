import { useState } from 'react'

export function useClock() {
  const [isRunning, setIsRunning] = useState(false)

  const handleClockIn = () => {
    setIsRunning(true)
  }

  const handleClockOut = () => {
    setIsRunning(false)
  }

  return {
    isRunning,
    handleClockIn,
    handleClockOut,
  }
}