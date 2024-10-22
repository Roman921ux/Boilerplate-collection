import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../../Shared/ui";
import MainLayout from "./MainLayout";
import { BreadcrumbWithCustomSeparator } from "@/Shared/ui/NavigationStoryPanel";
import Layout from "./SideBarLayout";

export default function AppLayout() {
  return (
    <div
      className="flex flex-col max-h-[100vh] w-[100vw]"
      style={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Header />
      <Layout />
      {/* <MainLayout>
        <SideBar />
        <div className="flex flex-col w-[100%]">
          <BreadcrumbWithCustomSeparator />
          <div className="flex items-center justify-center h-[100%]">
            <Outlet />
          </div>
        </div>
      </MainLayout> */}
    </div>
  );
}
