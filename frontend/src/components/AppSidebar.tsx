import {
  BarChart3,
  CalendarDays,
  CircleHelp,
  Clock3,
  FolderOpen,
  LayoutDashboard,
  Plus,
  Settings,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

const primaryNavigation = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Timesheets', icon: CalendarDays },
  { label: 'Projects', icon: FolderOpen },
  { label: 'Reports', icon: BarChart3 },
]

const secondaryNavigation = [
  { label: 'Settings', icon: Settings },
  { label: 'Support', icon: CircleHelp },
]

function AppSidebar() {
  return (
    <Sidebar
      collapsible="offcanvas"
      className="border-r border-[#edf0f5] bg-[#f7f9fc]"
    >
      <SidebarHeader className="px-6 pt-5 pb-6">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-[5px] bg-[#111827] text-white">
            <Clock3 className="size-4" />
          </div>
          <div className="min-w-0">
            <p className="m-0 truncate text-[18px] leading-tight font-bold text-[#07182f]">
              Chronometer
            </p>
            <p className="mt-1 mb-0 text-[8px] font-semibold tracking-[0.2em] text-[#64748b]">
              EXECUTIVE SUITE
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-5 py-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {primaryNavigation.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    isActive={item.active}
                    tooltip={item.label}
                    className="h-11 gap-3 rounded-[3px] px-3 text-[14px] font-medium text-[#35506e] data-active:bg-white data-active:font-semibold data-active:text-[#07182f] data-active:shadow-[0_3px_10px_rgba(31,46,76,0.05)] hover:bg-white hover:text-[#07182f]"
                  >
                    <item.icon className="size-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-4 px-4 pb-5">
        <div className="border-t border-[#edf0f5] pt-4">
          <Button className="h-10 w-full rounded-[4px] bg-black text-[12px] font-semibold text-white shadow-[0_4px_10px_rgba(0,0,0,0.18)] hover:bg-[#1c1c1c]">
            <Plus className="size-3.5" />
            Add Entry
          </Button>
        </div>

        <SidebarMenu className="gap-1 px-1">
          {secondaryNavigation.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                tooltip={item.label}
                className="h-9 gap-3 px-2 text-[13px] font-medium text-[#45617e] hover:bg-white hover:text-[#07182f]"
              >
                <item.icon className="size-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
