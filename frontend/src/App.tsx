import { useState, type CSSProperties } from 'react'

import AppSidebar from './components/AppSidebar'
import ClockIn from './components/ClockIn'
import ClockOut from './components/ClockOut'
import CurrentSession from './components/CurrentSession'
import DailyGoal from './components/DailyGoal'
import DailyStreak from './components/DailyStreak'
import Navbar from './components/Navbar'
import RecentSessions from './components/RecentSessions'
import WorkActivity from './components/WorkActivity'
import {
  SidebarInset,
  SidebarProvider,
} from './components/ui/sidebar'

function App() {
  const [isRunning, setIsRunning] = useState(false)

  const handleClockIn = () => {
    if (!isRunning) {
      setIsRunning(true)
    }
  }

  const handleClockOut = () => {
    if (isRunning) {
      setIsRunning(false)
    }
  }

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': '15rem',
          '--sidebar-width-mobile': '15rem',
        } as CSSProperties
      }
    >
      <AppSidebar />

      <SidebarInset className="min-w-0 bg-[#f7f8fc]">
        <Navbar />

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
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
