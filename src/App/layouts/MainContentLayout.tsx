import {
  SidebarProvider,
  SidebarTrigger,
} from "@/Shared/components/ui/sidebar";
import { AppSidebar } from "@/Shared/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function MainContentLayout() {
  return (
    <SidebarProvider
      style={{
        position: "relative",
      }}
    >
      <AppSidebar />
      <main className="p-2 w-[100%] flex gap-2">
        <SidebarTrigger />
        <div className="p-2 w-[100%] h-[95%] flex items-center justify-center">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
