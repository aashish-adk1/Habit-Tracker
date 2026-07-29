import { Plus } from 'lucide-react'

type NewHabitProps = {
  onNewHabit?: () => void
}

function NewHabit({ onNewHabit }: NewHabitProps) {
  return (
    <header className="w-full border-t-3 border-primary bg-card px-5 py-8 text-card-foreground shadow-sm sm:px-10 lg:px-14">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h1 className="m-0 text-[28px] leading-tight font-bold sm:text-[30px]">
            Focused Habits
          </h1>

          <p className="mt-2 max-w-[35rem] text-[15px] leading-6 font-medium text-muted-foreground">
            Discipline is the bridge between goals and accomplishment. Track
            your essential rituals.
          </p>
        </div>

        <button
          type="button"
          onClick={onNewHabit}
          className="inline-flex min-h-15 w-full items-center justify-center gap-5 rounded-[3px] bg-primary px-6 py-3 text-[12px] font-medium tracking-[0.08em] text-primary-foreground  shadow-sm transition hover:bg-primary/80 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:w-auto sm:min-w-[118px]"
        >
          <Plus aria-hidden="true" className="size-5 stroke-[2.2]" />
          <span className="leading-5">
            New Habit
          </span>
        </button>
      </div>
    </header>
  )
}

export default NewHabit
