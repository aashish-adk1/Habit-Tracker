import { NavLink, useLocation } from 'react-router-dom';
import DashboardLogo from '../assets/dashboard-logo.png'

import {
  BarChart3,
  CalendarDays,
  CircleHelp,
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
} from '@/components/ui/sidebar'

const primaryNavigation = [
  { label: 'Dashboard', icon: LayoutDashboard, link: '/' },
  { label: 'History', icon: CalendarDays, link: '/history' },
  { label: 'Projects', icon: FolderOpen, link: '/projects' },
  { label: 'Reports', icon: BarChart3, link: '/reports' },
]

const secondaryNavigation = [
  { label: 'Settings', icon: Settings, link: '/settings' },
  { label: 'Support', icon: CircleHelp, link: '/support' },
]

function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar
      collapsible="offcanvas"
      className="border-r border-sidebar-border bg-sidebar"
    >
      <SidebarHeader className="px-6 pt-5 pb-6">
        <div className="flex items-center justify-center">
          <img src={DashboardLogo} alt="Logo" className='' />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-5 py-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {primaryNavigation.map((item) => {
                const isActive = location.pathname === item.link
                return (
                  <SidebarMenuItem key={item.label}>
                    <NavLink to={item.link}>
                      <SidebarMenuButton
                        isActive={isActive}
                        className="h-11 gap-3 border-l-4 border-l-transparent px-3 text-[14px] font-medium text-sidebar-foreground/75 data-active:border-l-primary data-active:bg-sidebar-accent data-active:font-semibold data-active:text-sidebar-accent-foreground data-active:shadow-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:cursor-pointer"
                      >
                        <item.icon className="size-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </NavLink>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-4 px-4 pb-5">
        <div className="border-t border-sidebar-border pt-4">
          <Button className="h-10 w-full rounded-lg bg-primary text-[12px] font-semibold text-primary-foreground shadow-sm hover:bg-primary/90">
            <Plus className="size-3.5" />
            Add Entry
          </Button>
        </div>

        <SidebarMenu className="gap-1 px-1">
          {secondaryNavigation.map((item) => {
            const isActive = location.pathname === item.link
            return (
              <SidebarMenuItem key={item.label}>
                <NavLink to={item.link}>
                  <SidebarMenuButton
                    isActive={isActive}
                    className="h-11 gap-3 border-l-4 border-l-transparent px-3 text-[14px] font-medium text-sidebar-foreground/75 data-active:border-l-secondary data-active:bg-sidebar-accent data-active:font-semibold data-active:text-sidebar-accent-foreground data-active:shadow-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:cursor-pointer"
                  >
                    <item.icon className="size-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  )
}

export default AppSidebar
