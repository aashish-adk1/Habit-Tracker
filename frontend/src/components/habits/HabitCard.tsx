import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export type HabitCardData = {
  title: string
  cadence: string
  streak: number
  icon: LucideIcon
  activity: boolean[]
  progress: {
    current: number
    goal: number
    unit: string
  }
  completion: number
  nextGoal: number
  description: string
  impact: number
  month: string
  monthlyActivity: boolean[]
  reflections: {
    text: string
    date: string
  }[]
}

type HabitCardProps = HabitCardData & {
  isActive?: boolean
  onSelect?: () => void
}

function HabitCard({
  title,
  cadence,
  streak,
  icon: Icon,
  activity,
  progress,
  completion,
  nextGoal,
  isActive = false,
  onSelect,
}: HabitCardProps) {
  const percentage = Math.min(
    (progress.current / progress.goal) * 100,
    100,
  )

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={cn(
        "group relative flex aspect-square w-full flex-col overflow-hidden rounded-xs border border-border bg-card p-6 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        isActive && "border-primary shadow-md",
      )}
    >
      {/* background accent */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      {/* active strip */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-1 bg-transparent",
          isActive && "bg-primary",
        )}
      />

      <div className="relative flex h-full flex-col">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <div className="flex size-11 items-center justify-center rounded-xs bg-primary/10 text-primary">
              <Icon className="size-5 stroke-[2.2]" />
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-tight">
                {title}
              </h2>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {cadence}
              </p>
            </div>
          </div>

          <div className="rounded-xs border border-primary/20 bg-primary/5 px-3 py-2 text-center">
            <p className="text-2xl font-bold leading-none text-primary">
              {String(streak).padStart(2, '0')}
            </p>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
              🔥 STREAK
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Progress */}
        <div>
          <div className="flex justify-between text-sm font-semibold">
            <span>
              {progress.current} / {progress.goal} {progress.unit}
            </span>

            <span className="text-primary">
              {Math.round(percentage)}%
            </span>
          </div>

          <div className="mt-3 h-4 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Weekly */}
        <div className="mt-8">
          <div className="mb-2 flex justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              This Week
            </p>

            <p className="text-xs font-semibold text-primary">
              {completion}% Complete
            </p>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
              <div key={day + i} className="text-center">
                <div
                  className={cn(
                    "mb-2 h-9 rounded-xs transition-colors",
                    activity[i]
                      ? "bg-primary"
                      : "bg-muted",
                  )}
                />

                <p className="text-[10px] font-semibold text-muted-foreground">
                  {day}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex gap-3">
          <div className="flex-1 rounded-xs bg-primary/10 px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Completion
            </p>

            <p className="mt-1 text-lg font-bold text-primary">
              {completion}%
            </p>
          </div>

          <div className="flex-1 rounded-xs bg-muted px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Next Goal
            </p>

            <p className="mt-1 text-lg font-bold">
              {nextGoal} days
            </p>
          </div>
        </div>
      </div>
    </button>
  )
}

export default HabitCard