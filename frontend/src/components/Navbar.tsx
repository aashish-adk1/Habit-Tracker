import { SidebarTrigger } from '@/components/ui/sidebar'

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="m16 16 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function NotificationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 9.5a5.25 5.25 0 0 1 10.5 0c0 6 2.25 6.25 2.25 6.25h-15S6.75 15.5 6.75 9.5ZM10 19h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.86 2.86-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.86-2.86.06-.06A1.7 1.7 0 0 0 4.2 15a1.7 1.7 0 0 0-1.6-1H2.5v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.34-1.88l-.06-.06L6.66 4.2l.06.06A1.7 1.7 0 0 0 8.6 4.6a1.7 1.7 0 0 0 1-1.6v-.1h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.86 2.86-.06.06A1.7 1.7 0 0 0 19 9a1.7 1.7 0 0 0 1.6 1h.1v4h-.1a1.7 1.7 0 0 0-1.2 1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Navbar() {
  return (
    <nav className=" bg-white shadow-[0_1px_8px_rgba(31,46,76,0.08)]">
      <div className="mx-auto flex min-h-15.5 w-full max-w-295 items-center gap-3 px-5">
        <SidebarTrigger className="md:hidden" />

        <label className="relative mr-auto hidden w-full max-w-92.5 sm:block">
          <span className="sr-only">Search tasks and projects</span>
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#929bad]">
            <SearchIcon />
          </span>
          <input
            type="search"
            placeholder="Search tasks, projects..."
            className="h-9 w-full rounded-lg border border-[#e4e9f2] bg-[#f3f6fb] pr-3 pl-10 text-[12px] font-medium text-[#27364a] outline-none placeholder:text-[#929bad] focus:border-[#6547f5] focus:ring-2 focus:ring-[#6547f5]/15"
          />
        </label>

        <button
          type="button"
          className="h-9 cursor-pointer rounded-lg border-0 bg-primary px-6 text-[11px] font-bold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Clock In
        </button>

        <button
          type="button"
          className="h-9 cursor-pointer rounded-[12px] border-0 bg-secondary px-6 text-[11px] font-bold text-secondary-foreground shadow-sm hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          Clock Out
        </button>

        <span className="mx-1 hidden h-8 w-px bg-[#e6eaf0] sm:block" />

        <button
          type="button"
          aria-label="Notifications"
          className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-[#8290a3] hover:bg-[#f3f6fa] hover:text-[#07182f] focus-visible:outline-2 focus-visible:outline-[#6547f5] sm:flex"
        >
          <NotificationIcon />
        </button>

        <button
          type="button"
          aria-label="Settings"
          className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-[#8290a3] hover:bg-[#f3f6fa] hover:text-[#07182f] focus-visible:outline-2 focus-visible:outline-[#6547f5] sm:flex"
        >
          <SettingsIcon />
        </button>

        <button
          type="button"
          aria-label="Open profile"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[11px] border-0 bg-[#29313c] text-[10px] font-bold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6547f5]"
        >
          JD
        </button>
      </div>
    </nav>
  )
}

export default Navbar
