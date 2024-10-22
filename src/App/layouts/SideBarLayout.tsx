import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "@/Shared/ui";

export default function Layout() {
  return (
    <SidebarProvider className="w-[100vw]">
      <AppSidebar />
      <main className="w-[100%] h-[100vh] flex flex-col p-2">
        {/* <Header /> */}
        <SidebarTrigger />
        <div className="flex items-center justify-center flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
