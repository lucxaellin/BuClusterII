import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function Layout() {
  const [sidebarWidth, setSidebarWidth] = useState(280);

  // Listen for sidebar width changes
  useEffect(() => {
    const handleSidebarChange = (event) => {
      setSidebarWidth(event.detail.isCollapsed ? 60 : 280);
    };

    window.addEventListener('sidebarToggle', handleSidebarChange);
    
    // Set initial width
    setSidebarWidth(280);

    return () => {
      window.removeEventListener('sidebarToggle', handleSidebarChange);
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <div style={{ position: "fixed", left: 0, top: 0, height: "100vh", zIndex: 1000 }}>
        <Sidebar />
      </div>
      
      <div style={{ 
        flex: 1, 
        marginLeft: `${sidebarWidth}px`, // Dynamic sidebar width
        display: "flex",
        flexDirection: "column",
        transition: "margin-left 0.3s ease" // Smooth transition
      }}>
        <Navbar />
        <div style={{ 
          flex: 1,
          padding: "20px", 
          overflow: "auto",
          height: "calc(100vh - 48px)" // Account for navbar height
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;