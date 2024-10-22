import {
  SidebarProvider,
  SidebarTrigger,
} from "@/Shared/components/ui/sidebar";
import { AppSidebar } from "@/Shared/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider className="w-[100vw]">
      <AppSidebar />
      <main className="w-[100%] h-[100vh] flex flex-col p-2">
        <SidebarTrigger />
        <div className="flex items-center justify-center flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
