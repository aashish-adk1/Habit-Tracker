import { Outlet } from "react-router-dom";
import AppSidebar from "../components/AppSidebar";
import Navbar from "../components/Navbar";

import {
  SidebarProvider,
  SidebarInset,
} from "../components/ui/sidebar";

import type { CSSProperties } from "react";

function MainLayout() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "15rem",
          "--sidebar-width-mobile": "15rem",
        } as CSSProperties
      }
    >
      <AppSidebar />

      <SidebarInset className="min-w-0 bg-[#f7f8fc]">
        <Navbar />

        <main className="mx-auto w-full max-w-340 px-5 py-6 lg:px-8">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default MainLayout;