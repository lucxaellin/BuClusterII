import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Inbox, Send, FolderOpen,
  BookOpen, CalendarDays, Package, Users,
  Settings, ChevronRight, Menu, X,
} from 'lucide-react';
import buLogo from '../assets/Bicol-University-Logo.png';
import { C, FONT, FONT_SERIF, RADIUS, SIDEBAR_W, SIDEBAR_W_COLLAPSED } from './Tokens';

// ── Nav item (expanded) ────────────────────────────────────────────────────────
function NavItem({ icon: Icon, label, to, active, onClick, children, indent }) {
  const [hov, setHov] = useState(false);
  const el = (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:     'flex',
        alignItems:  'center',
        gap:         10,
        padding:     indent ? '8px 12px 8px 44px' : '8px 12px',
        margin:      '1px 8px',
        borderRadius: RADIUS.md,
        cursor:      'pointer',
        color:       active ? '#fff' : hov ? '#fff' : 'rgba(255,255,255,0.72)',
        background:  active ? C.sidebarActive : hov ? C.sidebarHover : 'none',
        fontSize:    indent ? 13 : 13.5,
        fontWeight:  active ? 600 : 500,
        fontFamily:  FONT,
        letterSpacing: '0.1px',
        borderLeft:  active ? `2px solid ${C.sidebarAccent}` : '2px solid transparent',
        transition:  'all 0.12s',
        userSelect:  'none',
      }}
    >
      {!indent && Icon && (
        <div style={{
          width:          30,
          height:         30,
          borderRadius:   RADIUS.sm,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          background:     active ? 'rgba(59,116,240,0.25)' : 'transparent',
          flexShrink:     0,
          transition:     'background 0.12s',
        }}>
          <Icon size={16} strokeWidth={active ? 2 : 1.7} />
        </div>
      )}
      <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
      {children}
    </div>
  );
  return to ? <Link to={to} style={{ textDecoration: 'none' }}>{el}</Link> : el;
}

// ── Collapsed icon button ─────────────────────────────────────────────────────
function CollapsedItem({ icon: Icon, label, active, onClick, to }) {
  const [hov, setHov] = useState(false);
  const el = (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      title={label}
      style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        width:          '100%',
        height:         44,
        background:     active ? C.sidebarActive : hov ? C.sidebarHover : 'none',
        border:         'none',
        borderLeft:     active ? `2px solid ${C.sidebarAccent}` : '2px solid transparent',
        cursor:         'pointer',
        color:          active ? '#fff' : hov ? '#fff' : 'rgba(255,255,255,0.65)',
        transition:     'all 0.12s',
        position:       'relative',
      }}
    >
      <Icon size={17} strokeWidth={active ? 2 : 1.7} />
    </button>
  );
  return to ? <Link to={to} style={{ textDecoration: 'none', display: 'block' }}>{el}</Link> : el;
}

// ── Section label ─────────────────────────────────────────────────────────────
function SectionLabel({ label }) {
  return (
    <div style={{
      fontSize:      10,
      fontWeight:    700,
      color:         'rgba(255,255,255,0.28)',
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      padding:       '16px 20px 5px',
      fontFamily:    FONT,
    }}>
      {label}
    </div>
  );
}

// ── Expandable group ──────────────────────────────────────────────────────────
function NavGroup({ icon: Icon, label, items, collapsed }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isChildActive = items.some(i => location.pathname === i.to);
  const [open, setOpen] = useState(isChildActive);

  if (collapsed) {
    return (
      <CollapsedItem
        icon={Icon}
        label={label}
        active={isChildActive}
        onClick={() => navigate(items[0]?.to || '#')}
      />
    );
  }

  return (
    <>
      <NavItem
        icon={Icon}
        label={label}
        active={isChildActive}
        onClick={() => setOpen(v => !v)}
      >
        <ChevronRight
          size={13}
          color="rgba(255,255,255,0.4)"
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(90deg)' : 'rotate(0)' }}
        />
      </NavItem>

      {/* Submenu */}
      <div style={{
        maxHeight:  open ? `${items.length * 42}px` : 0,
        overflow:   'hidden',
        transition: 'max-height 0.22s ease',
      }}>
        {items.map(item => (
          <NavItem
            key={item.to}
            label={item.label}
            to={item.to}
            active={location.pathname === item.to}
            indent
          />
        ))}
      </div>
    </>
  );
}

// ── SIDEBAR ────────────────────────────────────────────────────────────────────
export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const recordsItems = [
    { label: 'Incoming',    to: '/incoming-record' },
    { label: 'Outgoing',    to: '/outgoing-record' },
    { label: 'BUGS-01',     to: '/BUGS01' },
    { label: 'BUCAL-03',    to: '/BUCAL03' },
    { label: 'BUCL-39',     to: '/BUCL39' },
    { label: 'BUOU-52',     to: '/BUOU52' },
    { label: 'BUJMRIGD-53', to: '/BUJMRIGD53' },
    { label: 'BUCDM-80',    to: '/BUCDM80' },
  ];

  const serviceItems = [
    { label: 'Accrued Leave',  to: '/AccruedLeave' },
    { label: 'Teachers Leave', to: '/TeachersLeave' },
  ];

  const w = collapsed ? SIDEBAR_W_COLLAPSED : SIDEBAR_W;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        .sidebar-nav::-webkit-scrollbar { width: 3px; }
        .sidebar-nav::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 2px; }
      `}</style>

      <aside style={{
        width:         w,
        minHeight:     '100vh',
        background:    C.sidebarBg,
        display:       'flex',
        flexDirection: 'column',
        flexShrink:    0,
        transition:    'width 0.25s ease',
        overflow:      'hidden',
        borderRight:   `1px solid rgba(255,255,255,0.05)`,
        boxShadow:     '4px 0 20px rgba(0,0,0,0.2)',
        position:      'relative',
      }}>

        {/* ── Brand / Logo ── */}
        <div style={{
          height:         56,
          display:        'flex',
          alignItems:     'center',
          gap:            collapsed ? 0 : 10,
          padding:        collapsed ? '0 8px' : '0 12px',
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderBottom:   `1px solid ${C.sidebarBorder}`,
          flexShrink:     0,
        }}>
          {/* Burger toggle */}
          <button
            onClick={onToggle}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            style={{
              width:          32,
              height:         32,
              borderRadius:   RADIUS.sm,
              background:     'transparent',
              border:         'none',
              color:          'rgba(255,255,255,0.7)',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              cursor:         'pointer',
              flexShrink:     0,
              transition:     'background 0.15s, color 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
            }}
          >
            <Menu size={18} strokeWidth={1.8} />
          </button>

          {!collapsed && (
            <>
              <div style={{
                width:          28,
                height:         28,
                borderRadius:   '50%',
                overflow:       'hidden',
                border:         '2px solid rgba(255,255,255,0.2)',
                background:     'rgba(255,255,255,0.08)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
              }}>
                <img
                  src={buLogo}
                  alt="BU"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerHTML = '<span style="font-size:11px;font-weight:700;color:#fff">BU</span>';
                  }}
                />
              </div>
              <div style={{ overflow: 'hidden', flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: FONT, whiteSpace: 'nowrap' }}>
                  Bicol University
                </div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.38)', fontFamily: FONT }}>
                  Cluster II Logbook
                </div>
              </div>
            </>
          )}
        </div>

        {/* ── Nav ── */}
        <nav
          className="sidebar-nav"
          style={{
            flex:       1,
            paddingTop: 4,
            overflowY:  'auto',
            overflowX:  'hidden',
          }}
        >

          {!collapsed && <SectionLabel label="Main" />}

          {collapsed ? (
            <CollapsedItem icon={LayoutDashboard} label="Dashboard" active={isActive('/dashboard')} to="/dashboard" />
          ) : (
            <NavItem icon={LayoutDashboard} label="Dashboard" to="/dashboard" active={isActive('/dashboard')} />
          )}
          {collapsed ? (
            <CollapsedItem icon={Inbox} label="Incoming" active={isActive('/incoming')} to="/incoming" />
          ) : (
            <NavItem icon={Inbox} label="Incoming" to="/incoming" active={isActive('/incoming')} />
          )}
          {collapsed ? (
            <CollapsedItem icon={Send} label="Outgoing" active={isActive('/outgoing')} to="/outgoing" />
          ) : (
            <NavItem icon={Send} label="Outgoing" to="/outgoing" active={isActive('/outgoing')} />
          )}

          {!collapsed && <SectionLabel label="Management" />}

          <NavGroup icon={BookOpen}     label="Records"               items={recordsItems} collapsed={collapsed} />
          <NavGroup icon={CalendarDays} label="Service / Leave Credit" items={serviceItems} collapsed={collapsed} />

          {collapsed ? (
            <CollapsedItem icon={Package} label="Supply & Property" active={isActive('/SupplyProperty')} to="/SupplyProperty" />
          ) : (
            <NavItem icon={Package} label="Supply & Property" to="/SupplyProperty" active={isActive('/SupplyProperty')} />
          )}

          {!collapsed && <SectionLabel label="System" />}

          {collapsed ? (
            <CollapsedItem icon={Users} label="Account Management" active={isActive('/accounts')} to="/accounts" />
          ) : (
            <NavItem icon={Users} label="Account Management" to="/accounts" active={isActive('/accounts')} />
          )}
        </nav>

        {/* ── User footer ── */}
        <div style={{
          borderTop:      `1px solid ${C.sidebarBorder}`,
          padding:        collapsed ? '12px 0' : '12px 8px',
          display:        'flex',
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}>
          {collapsed ? (
            <div title="Admin User" style={{
              width:          34,
              height:         34,
              borderRadius:   '50%',
              background:     C.primary,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              color:          '#fff',
              fontSize:       11,
              fontWeight:     700,
              fontFamily:     FONT,
              cursor:         'pointer',
            }}>
              AD
            </div>
          ) : (
            <div style={{
              display:     'flex',
              alignItems:  'center',
              gap:         10,
              padding:     '8px 12px',
              borderRadius: RADIUS.md,
              cursor:      'pointer',
              width:       '100%',
              transition:  'background 0.12s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = C.sidebarHover}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              <div style={{
                width:          32,
                height:         32,
                borderRadius:   '50%',
                background:     C.primary,
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                color:          '#fff',
                fontSize:       11,
                fontWeight:     700,
                fontFamily:     FONT,
                flexShrink:     0,
              }}>
                AD
              </div>
              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontFamily: FONT, whiteSpace: 'nowrap' }}>Admin User</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', fontFamily: FONT }}>System Administrator</div>
              </div>
            </div>
          )}
        </div>

        {!collapsed && (
          <div style={{
            padding:       '6px',
            textAlign:     'center',
            fontSize:      10,
            color:         'rgba(255,255,255,0.15)',
            fontFamily:    FONT,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            borderTop:     `1px solid ${C.sidebarBorder}`,
          }}>
            © 2026 Bicol University Cluster II
          </div>
        )}
      </aside>
    </>
  );
}