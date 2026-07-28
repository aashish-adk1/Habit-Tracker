import {
  ActivityCalendar,
  type Activity,
} from 'react-activity-calendar'
import 'react-activity-calendar/tooltips.css'

const activityLevels = [
  1, 3, 1, 1, 2, 1, 1,
  2, 3, 2, 2, 3, 1, 2,
  1, 4, 1, 1, 1, 1, 1,
  2, 4, 1, 1, 3, 1, 4,
]

function createActivityData(): Activity[] {
  return activityLevels.map((level, index) => {
    const date = new Date(Date.UTC(2025, 7, index + 1))

    return {
      date: date.toISOString().slice(0, 10),
      count: level * 2,
      level,
    }
  })
}

const activityData = createActivityData()

function WorkActivity() {
  return (
    <section className="mt-5 rounded-[30px] bg-card px-7 py-7 text-card-foreground shadow-sm sm:px-8">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h2 className="m-0 text-[18px] leading-tight font-bold">
            Work Activity
          </h2>
          <p className="mt-1 mb-0 text-[12px] text-muted-foreground">
            Performance metrics for the last 4 weeks
          </p>
        </div>

        <button
          type="button"
          aria-label="More work activity options"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-[20px] leading-none text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span aria-hidden="true">...</span>
        </button>
      </header>

      <div className="mt-7 grid gap-8 md:grid-cols-[minmax(0,1fr)_180px] md:items-center">
        <div className="min-w-0 md:border-r md:border-border md:pr-8">
          <div className="w-fit max-w-full overflow-x-auto pb-1">
            <ActivityCalendar
              data={activityData}
              blockSize={14}
              blockMargin={4}
              blockRadius={2}
              colorScheme="light"
              fontSize={10}
              showColorLegend={false}
              showMonthLabels={false}
              showTotalCount={false}
              theme={{
                light: [
                  'var(--muted)',
                  'color-mix(in oklch, var(--primary) 20%, var(--muted))',
                  'color-mix(in oklch, var(--primary) 40%, var(--muted))',
                  'color-mix(in oklch, var(--primary) 65%, var(--muted))',
                  'var(--primary)',
                ],
              }}
              tooltips={{
                activity: {
                  text: (activity) =>
                    `${activity.count} productive hours on ${activity.date}`,
                },
              }}
              weekStart={1}
            />
          </div>

          <div className="mt-4 flex justify-between px-1 text-[9px] font-bold tracking-[0.08em] text-muted-foreground">
            <span>AUG 01</span>
            <span>AUG 28</span>
          </div>
        </div>

        <dl className="m-0 grid grid-cols-2 gap-6 md:grid-cols-1">
          <div>
            <dt className="text-[11px] text-muted-foreground">Avg. Productivity</dt>
            <dd className="m-0 mt-1 text-[22px] leading-none font-bold">
              8.4 hrs/day
            </dd>
          </div>

          <div>
            <dt className="text-[11px] text-muted-foreground">Best Performance</dt>
            <dd className="m-0 mt-1 text-[22px] leading-none font-bold text-primary">
              Tuesday
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default WorkActivity
