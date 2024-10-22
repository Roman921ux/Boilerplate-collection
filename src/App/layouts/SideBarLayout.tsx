import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";
import { Header } from "@/Shared/ui";

export default function Layout() {
  return (
    <SidebarProvider
      style={{
        position: "relative",
      }}
    >
      <AppSidebar />
      <main className="p-2 w-[100%] flex gap-2">
        <SidebarTrigger />
        <div
          className="p-2 w-[100%] h-[95%] flex items-center justify-center"
          // style={{ border: "1px solid red" }}
        >
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
