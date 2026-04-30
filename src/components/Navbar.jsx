import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, Search, Bell, Settings, LogOut,
  ChevronDown, Sun, Moon,
} from 'lucide-react';
import { C, FONT, NAV_H, RADIUS, SHADOW } from './Tokens';

// ── Theme hook (persists to localStorage, sets data-theme on <html>) ──────────
export function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return [dark, () => setDark(v => !v)];
}

// ── Icon button ────────────────────────────────────────────────────────────────
function IconBtn({ icon: Icon, badge, title, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      title={title}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width:          36,
        height:         36,
        borderRadius:   RADIUS.md,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        background:     hov ? C.gray2 : 'none',
        border:         'none',
        cursor:         'pointer',
        color:          hov ? C.text : C.text3,
        position:       'relative',
        transition:     'all 0.15s',
        flexShrink:     0,
      }}
    >
      <Icon size={17} strokeWidth={1.8} />
      {badge && (
        <span style={{
          position:     'absolute',
          top:          5,
          right:        5,
          width:        8,
          height:       8,
          background:   C.red,
          borderRadius: '50%',
          border:       '1.5px solid #fff',
        }} />
      )}
    </button>
  );
}

// ── Dark / Light toggle ───────────────────────────────────────────────────────
function ThemeToggle({ dark, onToggle }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        width:          36,
        height:         36,
        borderRadius:   RADIUS.md,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        background:     hov ? C.gray2 : 'none',
        border:         'none',
        cursor:         'pointer',
        transition:     'all 0.15s',
        flexShrink:     0,
        position:       'relative',
        overflow:       'hidden',
      }}
    >
      {/* Sun — visible in dark mode */}
      <span style={{
        display:    'flex',
        position:   'absolute',
        color:      '#f0c040',
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform:  dark ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0.6)',
        opacity:    dark ? 1 : 0,
      }}>
        <Sun size={17} strokeWidth={1.8} />
      </span>
      {/* Moon — visible in light mode */}
      <span style={{
        display:    'flex',
        position:   'absolute',
        color:      hov ? C.text : C.text3,
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform:  dark ? 'rotate(90deg) scale(0.6)' : 'rotate(0deg) scale(1)',
        opacity:    dark ? 0 : 1,
      }}>
        <Moon size={17} strokeWidth={1.8} />
      </span>
    </button>
  );
}

// ── Avatar dropdown ────────────────────────────────────────────────────────────
function AvatarMenu({ onLogout }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(v => !v)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display:      'flex',
          alignItems:   'center',
          gap:          8,
          background:   hov ? C.gray1 : 'none',
          border:       `1px solid ${open || hov ? C.gray3 : 'transparent'}`,
          borderRadius: RADIUS.md,
          padding:      '4px 8px 4px 4px',
          cursor:       'pointer',
          transition:   'all 0.15s',
        }}
      >
        <div style={{
          width:          30,
          height:         30,
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
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.text, fontFamily: FONT }}>Admin User</div>
          <div style={{ fontSize: 11, color: C.text3, fontFamily: FONT }}>Administrator</div>
        </div>
        <ChevronDown
          size={13}
          color={C.text3}
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
        />
      </button>

      {open && (
        <>
          <div
            style={{ position: 'fixed', inset: 0, zIndex: 98 }}
            onClick={() => setOpen(false)}
          />
          <div style={{
            position:     'absolute',
            top:          'calc(100% + 6px)',
            right:        0,
            background:   '#fff',
            border:       `1px solid ${C.gray3}`,
            borderRadius: RADIUS.lg,
            boxShadow:    SHADOW.lg,
            minWidth:     180,
            zIndex:       99,
            overflow:     'hidden',
          }}>
            <div style={{ padding: '10px 14px', borderBottom: `1px solid ${C.gray2}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: FONT }}>Admin User</div>
              <div style={{ fontSize: 11, color: C.text3, fontFamily: FONT, marginTop: 1 }}>admin@bicol.edu.ph</div>
            </div>
            {[
              { label: 'Account Settings', icon: Settings, action: () => navigate('/account-management') },
              { label: 'Log Out', icon: LogOut, danger: true, action: onLogout },
            ].map(({ label, icon: Icon, danger, action }) => (
              <button
                key={label}
                onClick={action}
                style={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        10,
                  width:      '100%',
                  padding:    '10px 14px',
                  background: 'none',
                  border:     'none',
                  cursor:     'pointer',
                  fontSize:   13,
                  fontWeight: 500,
                  fontFamily: FONT,
                  color:      danger ? C.red : C.text2,
                  textAlign:  'left',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = danger ? '#fee2e2' : C.gray1}
                onMouseLeave={e => e.currentTarget.style.background = 'none'}
              >
                <Icon size={15} strokeWidth={1.8} />
                {label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── NAVBAR ─────────────────────────────────────────────────────────────────────
export default function Navbar({ onToggleSidebar, sidebarCollapsed }) {
  const navigate = useNavigate();
  const [dark, toggleTheme] = useTheme();

  return (
    <header style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      height:         NAV_H,
      background:     '#fff',
      borderBottom:   `1px solid ${C.gray3}`,
      paddingRight:   20,
      flexShrink:     0,
      position:       'sticky',
      top:            0,
      zIndex:         50,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
      `}</style>

      {/* Left side */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <div style={{
          display:     'flex',
          alignItems:  'center',
          gap:         10,
          padding:     '0 20px',
          height:      '100%',
          borderRight: `1px solid ${C.gray3}`,
        }}>
          <div style={{
            width:          28,
            height:         28,
            borderRadius:   7,
            background:     C.primary,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
          }}>
            <BookOpen size={14} color="#fff" strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text, fontFamily: FONT, lineHeight: 1.2 }}>Cluster II</div>
            <div style={{ fontSize: 10, color: C.text3, fontFamily: FONT }}>Logbook System</div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>

        <ThemeToggle dark={dark} onToggle={toggleTheme} />

        <div style={{ width: 1, height: 24, background: C.gray3, margin: '0 4px' }} />

        <AvatarMenu onLogout={() => navigate('/login')} />
      </div>
    </header>
  );
}