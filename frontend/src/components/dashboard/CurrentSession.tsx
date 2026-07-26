import { useEffect, useState } from 'react'

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [hours, minutes, seconds]
    .map((value) => value.toString().padStart(2, '0'))
    .join(':')
}

type CurrentSessionProps = {
  isRunning: boolean
}

function CurrentSession({ isRunning }: CurrentSessionProps) {
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  useEffect(() => {
    if (!isRunning) {
      return
    }

    const timer = window.setInterval(() => {
      setElapsedSeconds((currentSeconds) => currentSeconds + 1)
    }, 1000)

    return () => window.clearInterval(timer)
  }, [isRunning])

  return (
    <section className="w-full rounded-[36px] bg-linear-to-r from-[#e7eeff] via-[#e9f3fb] to-[#d8f7f3] px-8 py-12 text-[#07182f] shadow-[0_22px_35px_rgba(40,55,80,0.14)] sm:px-15 sm:py-14.5">
      <p className="m-0 text-[13px] font-bold uppercase tracking-[0.38em] text-[#293442] sm:text-[15px]">
        Current Session
      </p>

      <p className="my-4 font-sans text-[64px] leading-none font-bold tracking-[-0.055em] tabular-nums sm:text-[88px]">
        {formatTime(elapsedSeconds)}
      </p>

      <div className="flex items-center gap-3 text-[17px] font-semibold text-[#4a4e55] sm:text-[20px]">
        <svg
          aria-hidden="true"
          className="h-5 w-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 8.25V6.5A2.5 2.5 0 0 1 9.5 4h5A2.5 2.5 0 0 1 17 6.5v1.75M4 9.5h16v8.75A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25V9.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 13.25c2.35 1.05 5.05 1.58 8 1.58s5.65-.53 8-1.58M10 14.75v1.5h4v-1.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="m-0">
          Active Project:{' '}
          <span className="font-bold text-[#15293b] underline decoration-2 underline-offset-4">
            UI Design Revision
          </span>
        </p>
      </div>
    </section>
  )
}

export default CurrentSession
