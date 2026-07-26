import ClockIn from '../components/dashboard/ClockIn'
import ClockOut from '../components/dashboard/ClockOut'
import CurrentSession from '../components/dashboard/CurrentSession'
import DailyGoal from '../components/dashboard/DailyGoal'
import DailyStreak from '../components/dashboard/DailyStreak'
import RecentSessions from '../components/dashboard/RecentSessions'
import WorkActivity from '../components/dashboard/WorkActivity'
import { useClock } from '@/hooks/useClock'

function Dashboard() {
  const {isRunning, handleClockIn, handleClockOut}= useClock();
  return (
        <main className="mx-auto w-full max-w-340 px-5 py-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,2.2fr)_minmax(290px,0.9fr)] lg:items-stretch">
            <CurrentSession isRunning={isRunning} />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <DailyGoal />
              <DailyStreak />
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <ClockIn onClockIn={handleClockIn} />
            <ClockOut onClockOut={handleClockOut} />
          </div>

          <WorkActivity />
          <RecentSessions />
        </main>
  )
}

export default Dashboard;
