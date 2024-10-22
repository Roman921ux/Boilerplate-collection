import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "@/Shared/ui";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Header />
        <SidebarTrigger />
        <Outlet />
        {/* {children} */}
      </main>
    </SidebarProvider>
  );
}
