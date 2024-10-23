import { Header } from "../../Shared/ui";
import MainContentLayout from "./MainContentLayout";

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
      <MainContentLayout />
    </div>
  );
}
