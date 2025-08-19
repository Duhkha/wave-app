import { useContext } from "react";
import { SidebarContext, type SidebarContextType } from "../contexts/SidebarContext";

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};