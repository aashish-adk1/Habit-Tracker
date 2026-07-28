const sessions = [
  {
    project: 'System Architecture',
    task: 'Cloud Migration Phase 1',
    timeRange: '09:00 AM — 06:15 PM',
    duration: '9h 15m',
    status: 'Approved',
    dotColor: 'bg-primary',
  },
  {
    project: 'UI Design Revision',
    task: 'Stakeholder Feedback Loop',
    timeRange: '10:30 AM — 04:45 PM',
    duration: '6h 15m',
    status: 'Approved',
    dotColor: 'bg-secondary',
  },
  {
    project: 'Documentation',
    task: 'API Endpoint Specifications',
    timeRange: '01:00 PM — 03:00 PM',
    duration: '2h 00m',
    status: 'Pending',
    dotColor: 'bg-muted-foreground',
  },
]

function RecentSessions() {
  return (
    <section className="mt-7 text-foreground">
      <header className="flex items-center justify-between gap-4">
        <h2 className="m-0 text-[22px] leading-tight font-bold">
          Recent Sessions
        </h2>
        <button
          type="button"
          className="cursor-pointer border-0 bg-transparent p-0 text-[13px] font-bold text-foreground hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring"
        >
          View All History
        </button>
      </header>

      <div className="mt-5 hidden grid-cols-[minmax(0,1.4fr)_minmax(150px,1fr)_minmax(100px,0.7fr)_100px] gap-5 px-7 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground md:grid">
        <span>Project &amp; Task</span>
        <span>Time Range</span>
        <span>Duration</span>
        <span className="text-right">Status</span>
      </div>

      <div className="mt-3 grid gap-3">
        {sessions.map((session) => {
          const isPending = session.status === 'Pending'

          return (
            <article
              key={session.project}
              className={`grid gap-4 rounded-[17px] border border-border bg-card px-5 py-5 text-card-foreground shadow-sm md:grid-cols-[minmax(0,1.4fr)_minmax(150px,1fr)_minmax(100px,0.7fr)_100px] md:items-center md:gap-5 md:px-7 ${
                isPending ? 'text-muted-foreground' : ''
              }`}
            >
              <div className="flex min-w-0 items-center gap-4">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 shrink-0 rounded-full ${session.dotColor}`}
                />
                <div className="min-w-0">
                  <h3 className="m-0 truncate text-[15px] leading-tight font-bold">
                    {session.project}
                  </h3>
                  <p className="mt-1 mb-0 truncate text-[11px] font-medium">
                    {session.task}
                  </p>
                </div>
              </div>

              <p className="m-0 text-[13px] font-medium">
                <span className="mr-2 font-bold text-muted-foreground md:hidden">
                  Time:
                </span>
                {session.timeRange}
              </p>

              <p className="m-0 text-[16px] font-bold">
                <span className="mr-2 text-[13px] text-muted-foreground md:hidden">
                  Duration:
                </span>
                {session.duration}
              </p>

              <div className="md:text-right">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[9px] font-bold uppercase ${
                    isPending
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {session.status}
                </span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default RecentSessions
