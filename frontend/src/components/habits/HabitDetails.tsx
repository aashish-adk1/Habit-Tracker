import { X } from 'lucide-react'
import type { HabitCardData } from './HabitCard'

type HabitDetailsProps = {
  habit: HabitCardData
}

function HabitDetails({ habit }: HabitDetailsProps) {
  const Icon = habit.icon
  const completedDays = habit.monthlyActivity.filter(Boolean).length
  const completion = Math.round((completedDays / habit.monthlyActivity.length) * 100)

  return (
    <aside className="rounded-xs border border-border bg-card px-5 py-6 text-card-foreground shadow-sm lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto">
      <div className="flex items-center justify-between gap-4">
        <p className="m-0 text-[12px] font-bold tracking-[0.22em] text-primary uppercase">
          Detailed Analysis
        </p>
        <button
          type="button"
          className="flex size-8 items-center justify-center rounded-xs text-muted-foreground transition hover:bg-muted hover:text-card-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          aria-label="Close habit details"
        >
          <X aria-hidden="true" className="size-4" />
        </button>
      </div>

      <div className="mt-7 flex size-12 items-center justify-center rounded-xs bg-primary/10 text-primary">
        <Icon aria-hidden="true" className="size-7 stroke-[2.1]" />
      </div>

      <div className="mt-5">
        <h2 className="m-0 text-[26px] leading-tight font-bold">{habit.title}</h2>
        <p className="mt-2 max-w-76 text-[14px] leading-5 text-muted-foreground">
          {habit.description}
        </p>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3">
        <div className="rounded-xs border border-border bg-muted/35 p-4">
          <p className="m-0 text-[9px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Current Streak
          </p>
          <p className="mt-3 text-[24px] leading-none font-bold text-primary">
            {habit.streak}
            <span className="ml-2 text-[10px] tracking-[0.12em] text-card-foreground uppercase">
              Days
            </span>
          </p>
        </div>

        <div className="rounded-xs border border-border bg-muted/35 p-4">
          <p className="m-0 text-[9px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Total Impact
          </p>
          <p className="mt-3 text-[24px] leading-none font-bold text-primary">
            {habit.impact}
            <span className="ml-2 text-[10px] tracking-[0.12em] text-card-foreground uppercase">
              Hours
            </span>
          </p>
        </div>
      </div>

      <section className="mt-9">
        <div className="flex items-center justify-between gap-4">
          <h3 className="m-0 text-[13px] font-bold">Monthly Activity</h3>
          <p className="m-0 text-[10px] font-bold tracking-[0.16em] text-muted-foreground uppercase">
            {habit.month}
          </p>
        </div>

        <div className="mt-3 rounded-xs border border-border bg-muted/25 p-4">
          <div className="grid grid-cols-7 gap-2">
            {habit.monthlyActivity.map((isComplete, index) => (
              <span
                key={`${habit.title}-month-${index}`}
                className={
                  isComplete
                    ? 'aspect-square rounded-[3px] bg-primary'
                    : 'aspect-square rounded-[3px] bg-muted'
                }
              />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
                Less
              </span>
              <div className="flex gap-1">
                <span className="size-2 rounded-[2px] bg-muted" />
                <span className="size-2 rounded-[2px] bg-primary/30" />
                <span className="size-2 rounded-[2px] bg-primary/55" />
                <span className="size-2 rounded-[2px] bg-primary/80" />
                <span className="size-2 rounded-[2px] bg-primary" />
              </div>
              <span className="text-[9px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
                More
              </span>
            </div>

            <p className="m-0 text-[12px] font-bold text-primary">
              {completion}% Completion
            </p>
          </div>
        </div>
      </section>

      <section className="mt-9">
        <h3 className="m-0 text-[13px] font-bold">Recent Reflections</h3>

        <div className="mt-4 space-y-3">
          {habit.reflections.map((reflection) => (
            <article
              key={`${habit.title}-${reflection.date}`}
              className="border-l border-primary bg-muted/25 px-4 py-3"
            >
              <p className="m-0 text-[13px] leading-5 text-card-foreground">
                "{reflection.text}"
              </p>
              <p className="mt-2 text-[10px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
                {reflection.date}
              </p>
            </article>
          ))}
        </div>
      </section>

      <button
        type="button"
        className="mt-8 flex min-h-12 w-full items-center justify-center rounded-xs border border-primary px-5 text-[12px] font-bold tracking-[0.14em] text-primary uppercase transition hover:bg-primary hover:text-primary-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
      >
        Edit Habit Config
      </button>
    </aside>
  )
}

export default HabitDetails
