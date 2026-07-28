function DailyStreak() {
  return (
    <section className="flex min-h-26 items-center justify-between rounded-[26px] bg-card px-6 py-5 text-card-foreground shadow-sm">
      <div>
        <p className="m-0 text-[13px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
          Daily Streak
        </p>

        <p className="mt-2 mb-0 flex items-baseline gap-1 text-[31px] leading-none font-bold">
          12
          <span className="text-[12px] font-bold">days</span>
        </p>
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-[17px] bg-secondary/20 text-secondary">
        <svg
          aria-hidden="true"
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.55 2.18a.75.75 0 0 0-1.3.61c.3 2.37-.58 3.73-1.67 4.78-.53.51-1.13.94-1.72 1.37C7.1 10.2 5.25 11.56 5.25 14.5A6.75 6.75 0 0 0 12 21.25a6.75 6.75 0 0 0 6.75-6.75c0-4.37-2.78-8.31-5.2-12.32ZM12 19.75a2.75 2.75 0 0 1-2.75-2.75c0-1.14.62-2.05 1.31-2.84.19-.22.39-.43.58-.64.46-.49.87-.94 1.12-1.48a.5.5 0 0 1 .85-.1c.91 1.17 1.64 2.39 1.64 3.81A4 4 0 0 1 12 19.75Z" />
        </svg>
      </div>
    </section>
  )
}

export default DailyStreak
