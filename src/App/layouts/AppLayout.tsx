import { Outlet } from "react-router-dom";
import { Header } from "../../Shared/ui";
import MainLayout from "./MainLayout";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  );
}
