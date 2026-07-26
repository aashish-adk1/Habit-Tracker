type ClockOutProps = {
  onClockOut: () => void
}

function ClockOut({ onClockOut }: ClockOutProps) {
  return (
    <button
      type="button"
      onClick={onClockOut}
      className="flex min-h-[120px] w-full cursor-pointer items-center justify-between rounded-[24px] border-0 bg-white px-8 py-6 text-left text-[#07182f] shadow-[0_8px_24px_rgba(31,46,76,0.08)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c47d00]"
    >
      <span>
        <span className="block text-[24px] leading-tight font-bold">
          Clock Out
        </span>
        <span className="mt-1 block text-[14px] font-medium text-[#555d69]">
          Finish for the day
        </span>
      </span>

      <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[16px] bg-[#ffdbb3] text-[#c47d00]">
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.5 6.5h11v11h-11z" />
        </svg>
      </span>
    </button>
  )
}

export default ClockOut
