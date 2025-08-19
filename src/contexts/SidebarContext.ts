import { createContext } from "react";

export interface SidebarContextType {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
  sidebarWidth: number;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);