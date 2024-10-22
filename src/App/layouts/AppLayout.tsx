import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../../Shared/ui";
import MainLayout from "./MainLayout";
import { BreadcrumbWithCustomSeparator } from "@/Shared/ui/NavigationStoryPanel";

export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <MainLayout>
        <SideBar />
        <div className="flex flex-col w-[100%]">
          <BreadcrumbWithCustomSeparator />
          <div className="flex items-center justify-center h-[100%]">
            <Outlet />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
