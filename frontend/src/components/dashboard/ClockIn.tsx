type ClockInProps = {
  onClockIn: () => void
}

function ClockIn({ onClockIn }: ClockInProps) {
  return (
    <button
      type="button"
      onClick={onClockIn}
      className="flex min-h-[120px] w-full cursor-pointer items-center justify-between rounded-[24px] border-0 bg-primary px-8 py-6 text-left text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring"
    >
      <span>
        <span className="block text-[24px] leading-tight font-bold">
          Clock In
        </span>
        <span className="mt-1 block text-[14px] font-medium text-primary-foreground/75">
          Start your focus session
        </span>
      </span>

      <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[16px] bg-primary-foreground/15 text-primary-foreground">
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
