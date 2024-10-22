import { SidebarProvider } from "@/Shared/components/ui/sidebar";
import { AppSidebar } from "@/Shared/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "@/Shared/ui";

export default function Layout() {
  return (
    <SidebarProvider className="w-[100vw]">
      <AppSidebar />
      <main className="w-[100%] h-[100vh] flex flex-col">
        <Header />
        <div className="flex items-center justify-center flex-1">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
