import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FolderOpen,
  Send,
  BookOpen,
  Copy,
  UserCircle,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  LayoutDashboard,
  FileText,
  Package,
} from "lucide-react";
import buLogo from "../assets/Bicol-University-Logo.png";

// ── Design tokens ──────────────────────────────────────────────────────────────
const C = {
  primary:      "#1565A8",   // main blue
  primaryDark:  "#0F4F8A",   // slightly darker for hover/active
  primaryLight: "#1B72C0",   // lighter shade for sub-items bg
  accent:       "#F5A623",   // warm gold accent (logo ring color)
  text:         "#FFFFFF",
  textMuted:    "rgba(255,255,255,0.65)",
  textTiny:     "rgba(255,255,255,0.40)",
  divider:      "rgba(255,255,255,0.12)",
  font:         "'Inter', sans-serif",
  fontDisplay:  "'Merriweather', Georgia, serif",
};

// ── Records sub-items (matching screenshot) ───────────────────────────────────
const RECORDS_ITEMS = [
  "Incoming",
  "Outgoing",
  "BUGS-01",
  "BUCAL-03",
  "BUCL-39",
  "BUOU-52",
  "BUJMRIGD-53",
  "BUCDM-80",
];

// ── Nav item component ────────────────────────────────────────────────────────
function NavItem({ icon: Icon, label, active, onClick, style }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         "flex",
        alignItems:      "center",
        gap:             12,
        width:           "100%",
        padding:         "11px 20px",
        background:      active
          ? "rgba(255,255,255,0.15)"
          : hovered
          ? "rgba(255,255,255,0.08)"
          : "transparent",
        border:          "none",
        borderRadius:    0,
        cursor:          "pointer",
        color:           active ? C.text : hovered ? C.text : "rgba(255,255,255,0.85)",
        fontFamily:      C.font,
        fontSize:        15,
        fontWeight:      active ? 700 : 500,
        letterSpacing:   0.2,
        textAlign:       "left",
        transition:      "background .15s, color .15s",
        borderLeft:      active ? `3px solid ${C.accent}` : "3px solid transparent",
        ...style,
      }}
    >
      {Icon && <Icon size={18} strokeWidth={active ? 2.2 : 1.8} style={{ flexShrink: 0 }} />}
      <span style={{ flex: 1 }}>{label}</span>
    </button>
  );
}

// ── Records expandable nav item ───────────────────────────────────────────────
function RecordsNavItem({ active, onSubSelect, activeSubItem }) {
  const [open, setOpen] = useState(false); // closed by default, opens only when clicked
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

const handleRecordClick = (record) => {
  onSubSelect(record);
  // Navigate to the specific record page
  if (record === "Incoming") {
    navigate("/IncomingRecord");
  } else if (record === "Outgoing") {
    navigate("/OutgoingRecord");
  } else if (record === "BUGS-01") {
    navigate("/BUGS01");
  } else if (record === "BUCAL-03") {
    navigate("/BUCAL03");
  } else if (record === "BUCL-39") {
    navigate("/BUCL39");
  } else if (record === "BUOU-52") {
    navigate("/BUOU52");
  } else if (record === "BUJMRIGD-53") {
    navigate("/BUJMRIGD53");
  } else if (record === "BUCDM-80") {
    navigate("/BUCDM80");
  } else {
    navigate(`/${record}`);
  }
};

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display:       "flex",
          alignItems:    "center",
          gap:           12,
          width:         "100%",
          padding:       "11px 20px",
          background:    active
            ? "rgba(255,255,255,0.15)"
            : hovered
            ? "rgba(255,255,255,0.08)"
            : "transparent",
          border:        "none",
          borderLeft:    active ? `3px solid ${C.accent}` : "3px solid transparent",
          cursor:        "pointer",
          color:         active ? C.text : "rgba(255,255,255,0.85)",
          fontFamily:    C.font,
          fontSize:      15,
          fontWeight:    active ? 700 : 500,
          letterSpacing: 0.2,
          textAlign:     "left",
          transition:    "background .15s, color .15s",
        }}
      >
        <BookOpen size={18} strokeWidth={1.8} style={{ flexShrink: 0 }} />
        <span style={{ flex: 1 }}>Records</span>
        {open
          ? <ChevronDown size={15} color="rgba(255,255,255,0.6)" />
          : <ChevronRight size={15} color="rgba(255,255,255,0.6)" />
        }
      </button>

      {/* Dropdown panel */}
      <div
        style={{
          maxHeight:   open ? `${RECORDS_ITEMS.length * 44}px` : "0px",
          overflow:    "hidden",
          transition:  "max-height .25s ease",
          background:  C.primaryDark,
        }}
      >
        {RECORDS_ITEMS.map(item => {
          const isActive = activeSubItem === item;
          return (
            <SubItem
              key={item}
              label={item}
              active={isActive}
              onClick={() => handleRecordClick(item)}
            />
          );
        })}
      </div>
    </>
  );
}

function SubItem({ label, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:       "block",
        width:         "100%",
        padding:       "11px 20px 11px 50px",
        background:    active
          ? "rgba(255,255,255,0.12)"
          : hovered
          ? "rgba(255,255,255,0.06)"
          : "transparent",
        border:        "none",
        borderLeft:    active ? `3px solid ${C.accent}` : "3px solid transparent",
        cursor:        "pointer",
        color:         active ? "#fff" : "rgba(255,255,255,0.78)",
        fontFamily:    C.font,
        fontSize:      13.5,
        fontWeight:    active ? 600 : 400,
        letterSpacing: 0.3,
        textAlign:     "left",
        transition:    "background .12s, color .12s",
      }}
    >
      {label}
    </button>
  );
}

// ── Service/Leave Dropdown Component ──────────────────────────────────────────
function ServiceLeaveDropdown({ active, onSubSelect, activeSubItem }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const leaveTypes = [
    { label: "Accrued Leave", path: "/AccruedLeave" },
    { label: "Teachers Leave", path: "/TeachersLeave" }
  ];

  const handleLeaveClick = (leaveType) => {
    onSubSelect(leaveType.label);
    navigate(leaveType.path);
  };

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display:       "flex",
          alignItems:    "center",
          gap:           12,
          width:         "100%",
          padding:       "11px 20px",
          background:    active
            ? "rgba(255,255,255,0.15)"
            : hovered
            ? "rgba(255,255,255,0.08)"
            : "transparent",
          border:        "none",
          borderLeft:    active ? `3px solid ${C.accent}` : "3px solid transparent",
          cursor:        "pointer",
          color:         active ? C.text : "rgba(255,255,255,0.85)",
          fontFamily:    C.font,
          fontSize:      15,
          fontWeight:    active ? 700 : 500,
          letterSpacing:  0.2,
          textAlign:     "left",
          transition:    "background .15s, color .15s",
        }}
      >
        <FileText size={18} strokeWidth={1.8} style={{ flexShrink: 0 }} />
        <span style={{ flex: 1 }}>Service/Leave Credit</span>
        {open
          ? <ChevronDown size={15} color="rgba(255,255,255,0.6)" />
          : <ChevronRight size={15} color="rgba(255,255,255,0.6)" />
        }
      </button>

      {/* Dropdown panel */}
      <div
        style={{
          maxHeight:   open ? `${leaveTypes.length * 44}px` : "0px",
          overflow:    "hidden",
          transition:  "max-height .25s ease",
          background:  C.primaryDark,
        }}
      >
        {leaveTypes.map(type => {
          const isActive = activeSubItem === type.label;
          return (
            <SubItem
              key={type.label}
              label={type.label}
              active={isActive}
              onClick={() => handleLeaveClick(type)}
            />
          );
        })}
      </div>
    </>
  );
}

// ── Collapsed Nav Item Component ─────────────────────────────────────────────────
function CollapsedNavItem({ icon: Icon, label, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        width:           "60px",
        height:          "44px",
        background:      active
          ? "rgba(255,255,255,0.15)"
          : hovered
          ? "rgba(255,255,255,0.08)"
          : "transparent",
        border:          "none",
        borderRadius:    0,
        cursor:          "pointer",
        color:           active ? C.text : hovered ? C.text : "rgba(255,255,255,0.85)",
        transition:      "background .15s, color .15s",
        borderLeft:      active ? `3px solid ${C.accent}` : "3px solid transparent",
        position:        "relative",
      }}
      title={label}
    >
      {Icon && <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />}
      
      {/* Tooltip */}
      {hovered && (
        <div
          style={{
            position:       "absolute",
            left:           "70px",
            background:     "rgba(0,0,0,0.9)",
            color:          "#fff",
            padding:        "6px 10px",
            borderRadius:   "4px",
            fontSize:       "12px",
            whiteSpace:     "nowrap",
            zIndex:         1000,
            pointerEvents:  "none",
          }}
        >
          {label}
        </div>
      )}
    </button>
  );
}

// ── Burger Button Component ─────────────────────────────────────────────────────
function BurgerButton({ isCollapsed, onToggle }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:       "absolute",
        top:            "20px",
        right:          "10px",
        width:          "40px",
        height:         "40px",
        borderRadius:   "50%",
        background:     C.primary,
        border:         `2px solid ${C.textMuted}`,
        cursor:         "pointer",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        boxShadow:      "0 2px 8px rgba(0,0,0,0.2)",
        transition:      "all .2s ease",
        zIndex:          1000,
        transform:      hovered ? "scale(1.1)" : "scale(1)",
      }}
    >
      {isCollapsed ? (
        <Menu size={20} color={C.text} strokeWidth={2} />
      ) : (
        <X size={20} color={C.text} strokeWidth={2} />
      )}
    </button>
  );
}

// ── MAIN SIDEBAR ──────────────────────────────────────────────────────────────
export default function Sidebar() {
  const [active,       setActive]       = useState("Dashboard");
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [isCollapsed, setIsCollapsed]   = useState(true);

  const handleNav = (label) => {
    setActive(label);
    setActiveSubItem(null);
  };

  const handleSubSelect = (item) => {
    setActive("Records");
    setActiveSubItem(item);
  };

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    
    // Emit custom event to notify Layout component
    window.dispatchEvent(new CustomEvent('sidebarToggle', {
      detail: { isCollapsed: newCollapsedState }
    }));
  };

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        button:focus { outline: none; }
      `}</style>

      <aside
        style={{
          width:          isCollapsed ? 60 : 280,
          minHeight:      "100vh",
          background:     C.primary,
          display:        "flex",
          flexDirection:  "column",
          boxShadow:      "4px 0 24px rgba(0,0,0,0.18)",
          position:       "relative",
          userSelect:     "none",
          transition:     "width .3s ease",
          overflow:       "hidden",
        }}
      >
        {/* Burger Button */}
        <BurgerButton isCollapsed={isCollapsed} onToggle={toggleSidebar} />
        
        {/* ── Logo / Brand ── */}
        {!isCollapsed && (
          <div
            style={{
              padding:      "28px 20px 24px",
              borderBottom: `1px solid ${C.divider}`,
              display:      "flex",
              alignItems:   "center",
              gap:          14,
            }}
          >
            {/* Logo image — falls back to an initials badge */}
            <div
              style={{
                width:        52,
                height:       52,
                borderRadius: "50%",
                overflow:     "hidden",
                flexShrink:   0,
                border:       "2.5px solid rgba(255,255,255,0.30)",
                background:   "rgba(255,255,255,0.10)",
                display:      "flex",
                alignItems:   "center",
                justifyContent: "center",
              }}
            >
              <img
                src={buLogo}
                alt="Bicol University"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={e => { e.currentTarget.style.display = "none"; }}
              />
            </div>

            <div>
              <div
                style={{
                  fontFamily:    C.fontDisplay,
                  fontSize:      16,
                  fontWeight:    700,
                  color:         "#fff",
                  lineHeight:    1.2,
                  letterSpacing: 0.1,
                }}
              >
                Bicol University
              </div>
              <div
                style={{
                  fontFamily:  C.font,
                  fontSize:    12,
                  color:       C.textMuted,
                  marginTop:   3,
                  fontWeight:  400,
                  letterSpacing: 0.3,
                }}
              >
                Cluster II Logbook
              </div>
            </div>
          </div>
        )}
        
        {/* Collapsed Logo */}
        {isCollapsed && (
          <div
            style={{
              padding:        "20px 0",
              borderBottom:   `1px solid ${C.divider}`,
              display:        "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width:        36,
                height:       36,
                borderRadius: "50%",
                overflow:     "hidden",
                border:       "2px solid rgba(255,255,255,0.30)",
                background:   "rgba(255,255,255,0.10)",
                display:      "flex",
                alignItems:   "center",
                justifyContent: "center",
              }}
            >
              <img
                src={buLogo}
                alt="Bicol University"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={e => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>
        )}

        {/* ── Primary Nav ── */}
        <nav style={{ flex: 1, paddingTop: 12 }}>
          {isCollapsed ? (
            <>
              <Link to="/Dashboard" style={{ textDecoration: 'none' }}>
                <CollapsedNavItem
                  icon={LayoutDashboard}
                  label="Dashboard"
                  active={active === "Dashboard"}
                  onClick={() => handleNav("Dashboard")}
                />
              </Link>
              <Link to="/Incoming" style={{ textDecoration: 'none' }}>
                <CollapsedNavItem
                  icon={FolderOpen}
                  label="Incoming"
                  active={active === "Incoming"}
                  onClick={() => handleNav("Incoming")}
                />
              </Link>
              <Link to="/Outgoing" style={{ textDecoration: 'none' }}>
                <CollapsedNavItem
                  icon={Send}
                  label="Outgoing"
                  active={active === "Outgoing"}
                  onClick={() => handleNav("Outgoing")}
                />
              </Link>
              <CollapsedNavItem
                icon={BookOpen}
                label="Records"
                active={active === "Records"}
                onClick={() => handleNav("Records")}
              />
              <ServiceLeaveDropdown
                active={active === "Service/Leave Credit"}
                onSubSelect={handleSubSelect}
                activeSubItem={activeSubItem}
              />
              <Link to="/SupplyProperty" style={{ textDecoration: 'none' }}>
                <CollapsedNavItem
                  icon={Package}
                  label="Supply and Property"
                  active={active === "Supply and Property"}
                  onClick={() => handleNav("Supply and Property")}
                />
              </Link>
            </>
          ) : (
            <>
          <Link to="/Dashboard" style={{ textDecoration: 'none' }}>
            <NavItem
              icon={LayoutDashboard}
              label="Dashboard"
              active={active === "Dashboard"}
              onClick={() => handleNav("Dashboard")}
            />
          </Link>
          <Link to="/incoming" style={{ textDecoration: 'none' }}>
            <NavItem
              icon={FolderOpen}
              label="Incoming"
              active={active === "Incoming"}
              onClick={() => handleNav("Incoming")}
            />
          </Link>
          <Link to="/outgoing" style={{ textDecoration: 'none' }}>
            <NavItem
              icon={Send}
              label="Outgoing"
              active={active === "Outgoing"}
              onClick={() => handleNav("Outgoing")}
            />
          </Link>

          <div style={{ margin: "6px 0" }} />

          <RecordsNavItem
            active={active === "Records"}
            onSubSelect={handleSubSelect}
            activeSubItem={activeSubItem}
          />
          <ServiceLeaveDropdown
            active={active === "Service/Leave Credit"}
            onSubSelect={handleSubSelect}
            activeSubItem={activeSubItem}
          />
          <Link to="/SupplyProperty" style={{ textDecoration: 'none' }}>
            <NavItem
              icon={Package}
              label="Supply and Property"
              active={active === "Supply and Property"}
              onClick={() => handleNav("Supply and Property")}
            />
          </Link>
            </>
          )}
        </nav>

        {/* ── Footer ── */}
        {!isCollapsed && (
        <div
          style={{
            padding:     "16px 20px",
            borderTop:   `1px solid ${C.divider}`,
            fontFamily:  C.font,
            fontSize:    10,
            color:       C.textTiny,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            textAlign:   "center",
          }}
        >
          © 2026 Bicol University Cluster II
        </div>
        )}
      </aside>
    </>
  );
}
