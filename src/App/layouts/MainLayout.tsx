import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className="flex-1 flex">{children}</div>;
}
