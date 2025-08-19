import React, { useState, useEffect } from "react";
import { useSidebar } from "../hooks/useSidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  const { isOpen, sidebarWidth } = useSidebar();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const collapsedWidth = 60;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getMarginLeft = () => {
    if (isMobile) return "0";
    return isOpen ? `${sidebarWidth}px` : `${collapsedWidth}px`;
  };

  return (
    <div 
      className="transition-all duration-300 min-h-screen bg-slate-50"
      style={{
        marginLeft: getMarginLeft(),
        paddingTop: "64px",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default SidebarLayout;