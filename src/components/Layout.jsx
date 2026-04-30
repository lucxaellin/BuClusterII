import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { SIDEBAR_W, SIDEBAR_W_COLLAPSED } from "./Tokens";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => setCollapsed(v => !v);

  const sidebarWidth = collapsed ? SIDEBAR_W_COLLAPSED : SIDEBAR_W;

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Fixed sidebar */}
      <div style={{ position: "fixed", left: 0, top: 0, height: "100vh", zIndex: 1000 }}>
        <Sidebar collapsed={collapsed} onToggle={handleToggle} />
      </div>

      {/* Main content shifts with sidebar */}
      <div
        style={{
          flex: 1,
          marginLeft: sidebarWidth,
          display: "flex",
          flexDirection: "column",
          transition: "margin-left 0.25s ease",
          minWidth: 0,
        }}
      >
        <Navbar onToggleSidebar={handleToggle} sidebarCollapsed={collapsed} />

        <div style={{ 
          flex: 1, 
          padding: "20px", 
          overflow: "auto",
          backgroundColor: 'var(--bg-page)',
          color: 'var(--text-primary)',
          transition: 'background-color 0.25s ease, color 0.25s ease'
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}