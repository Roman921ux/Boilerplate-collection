import { ThemeProvider } from "@gravity-ui/uikit";
import { ReactNode } from "react";

export default function GravityProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
}
