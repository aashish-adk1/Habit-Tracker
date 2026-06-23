type ClockInProps = {
  onClockIn: () => void
}

function ClockIn({ onClockIn }: ClockInProps) {
  return (
    <button
      type="button"
      onClick={onClockIn}
      className="flex min-h-[120px] w-full cursor-pointer items-center justify-between rounded-[24px] border-0 bg-white px-8 py-6 text-left text-[#07182f] shadow-[0_8px_24px_rgba(31,46,76,0.08)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#087f5b]"
    >
      <span>
        <span className="block text-[24px] leading-tight font-bold">
          Clock In
        </span>
        <span className="mt-1 block text-[14px] font-medium text-[#555d69]">
          Start your focus session
        </span>
      </span>

      <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[16px] bg-[#61edb7] text-[#08755a]">
        <svg
          aria-hidden="true"
          className="ml-0.5 h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 5.25v13.5L18.5 12 8 5.25Z" />
        </svg>
      </span>
    </button>
  )
}

export default ClockIn
