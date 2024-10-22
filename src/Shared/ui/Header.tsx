import { SidebarTrigger } from "@/Shared/components/ui/sidebar";

export default function Header() {
  return (
    <div
      className="h-[44px] flex items-center justify-between px-4 py-2 gap-2"
      // было 36px
      style={{ borderBottom: "1px solid hsl(var(--border))" }}
    >
      <SidebarTrigger />
      <div className="flex items-center">
        <div className="px-3 py-1 w-fit hover:bg-sky-100 rounded-lg">
          <span className="font-medium text-sm leading-5">Edit</span>
        </div>
        <div className="px-3 py-1 w-fit hover:bg-sky-100 rounded-lg">
          <span className="font-medium text-sm leading-5">Account</span>
        </div>
        {/* <div className="px-3 py-1 w-fit ">
          <span className="font-bold text-sm leading-5">YourLogoName</span>
        </div> */}
        <div className="px-3 py-1 w-fit hover:bg-sky-100 rounded-lg">
          <span className="font-medium text-sm leading-5">File</span>
        </div>
        <div className="px-3 py-1 w-fit hover:bg-sky-100 rounded-lg">
          <span className="font-medium text-sm leading-5">Edit</span>
        </div>
      </div>
      <div className="px-3 py-1 w-fit hover:bg-sky-100 rounded-lg">
        <span className="font-medium text-sm leading-5">Profile</span>
      </div>
    </div>
  );
}
