import React from "react";
import { useSidebar } from "../hooks/useSidebar";

interface SidebarToggleProps {
  className?: string;
  style?: React.CSSProperties;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({
  className = "",
  style = {},
}) => {
  const { toggleSidebar, isOpen } = useSidebar();
  const [isHovered, setIsHovered] = React.useState(false);

  const defaultStyle: React.CSSProperties = {
    background: "none",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "16px",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "background-color 0.2s ease",
    ...style,
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: "#f5f5f5",
  };

  const combinedStyle = {
    ...defaultStyle,
    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <button
      className={className}
      style={combinedStyle}
      onClick={toggleSidebar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
    >
      <span style={{ fontSize: "18px" }}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </span>
      {isOpen ? "Close Menu" : "Menu"}
    </button>
  );
};

export default SidebarToggle;