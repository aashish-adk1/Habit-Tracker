function DailyGoal() {
  return (
    <section className="rounded-[26px] bg-white px-6 py-5 text-[#07182f] shadow-[0_8px_24px_rgba(31,46,76,0.08)]">
      <p className="m-0 text-[13px] font-bold uppercase tracking-[0.08em] text-[#687180]">
        Daily Goal
      </p>

      <div className="mt-3 flex items-end justify-between gap-4">
        <p className="m-0 text-[31px] leading-none font-bold">96%</p>
        <p className="m-0 text-[12px] font-medium text-[#3f4855]">
          7.6 / 8.0 hrs
        </p>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e5ebf3]">
        <div className="h-full w-[96%] rounded-full bg-[#087f5b]" />
      </div>
    </section>
  )
}

export default DailyGoal
