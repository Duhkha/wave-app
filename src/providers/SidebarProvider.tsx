import React, { useState, type ReactNode } from "react";
import { SidebarContext, type SidebarContextType } from "../contexts/SidebarContext";

interface SidebarProviderProps {
  children: ReactNode;
  sidebarWidth?: number;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({
  children,
  sidebarWidth = 280,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const value: SidebarContextType = {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    sidebarWidth,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};