function DailyGoal() {
  return (
    <section className="rounded-xs bg-card px-6 py-5 text-card-foreground shadow-sm">
      <p className="m-0 text-[13px] font-bold uppercase tracking-[0.08em] text-muted-foreground">
        Daily Goal
      </p>

      <div className="mt-3 flex items-end justify-between gap-4">
        <p className="m-0 text-[31px] leading-none font-bold">96%</p>
        <p className="m-0 text-[12px] font-medium text-muted-foreground">
          7.6 / 8.0 hrs
        </p>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
        <div className="h-full w-[96%] rounded-full bg-primary" />
      </div>
    </section>
  )
}

export default DailyGoal
