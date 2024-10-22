import { Calendar, Eye } from "@gravity-ui/icons";

export default function SideBar() {
  return (
    <div
      className="w-[266px] py-4"
      style={{ borderRight: "1px solid hsl(var(--border))" }}
    >
      <div className="flex gap-2 flex-col py-2 px-3 w-[100%]">
        <div className="px-4 w-[100%]">
          <span className="font-semibold text-lg leading-7">Discover</span>
        </div>

        <div className="flex flex-col w-[100%]">
          <div className="flex gap-2 px-4 py-2 w-[100%] hover:bg-sky-100 rounded-lg">
            <Calendar />
            <span className="font-medium text-sm leading-4">Calendar</span>
            {/* hsl(0, 0%, 26%) */}
          </div>
          <div className="flex gap-2 items-center px-4 py-2 w-[100%] hover:bg-sky-100 rounded-lg">
            <Eye />
            <span className="font-medium text-sm leading-5">Exercises</span>
          </div>
        </div>
      </div>
    </div>
  );
}
