import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen, FileText, Archive, CalendarDays,
  Package, ArrowRight, CheckCircle2,
} from 'lucide-react';
import { RADIUS, SHADOW } from '../components/Tokens';

// ── Tiny reusable button ───────────────────────────────────────────────────────
function Btn({ children, variant = 'primary', onClick, style }) {
  const [hov, setHov] = useState(false);
  const base = {
    display:        'inline-flex',
    alignItems:     'center',
    gap:            8,
    padding:        '12px 28px',
    fontSize:       14,
    fontWeight:     600,
    fontFamily:     "'Inter', sans-serif",
    borderRadius:   RADIUS.md,
    cursor:         'pointer',
    border:         'none',
    transition:     'all 0.2s',
    ...style,
  };
  if (variant === 'primary') return (
    <button
      style={{
        ...base,
        background:  hov ? 'var(--primary-hover)' : 'var(--primary)',
        color:       '#fff',
        boxShadow:   hov ? '0 6px 20px rgba(26,86,219,0.4)' : '0 3px 12px rgba(26,86,219,0.28)',
        transform:   hov ? 'translateY(-1px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
    >{children}</button>
  );
  return (
    <button
      style={{
        ...base,
        background:  hov ? 'var(--primary-light)' : 'var(--bg-surface)',
        color:       hov ? 'var(--primary)' : 'var(--text-secondary)',
        border:      `1.5px solid ${hov ? 'var(--primary)' : 'var(--border-color)'}`,
        transform:   hov ? 'translateY(-1px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
    >{children}</button>
  );
}

// ── Feature card ───────────────────────────────────────────────────────────────
function FeatureCard({ icon: Icon, title, desc, accent }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:   'var(--bg-surface)',
        border:       `1px solid ${hov ? accent + '55' : 'var(--border-color)'}`,
        borderRadius: RADIUS.lg,
        padding:      '20px 22px',
        transition:   'all 0.2s',
        boxShadow:    hov ? SHADOW.md : SHADOW.sm,
        transform:    hov ? 'translateY(-2px)' : 'translateY(0)',
        flex:         1,
        minWidth:     160,
      }}
    >
      <div style={{
        width:          40,
        height:         40,
        borderRadius:   RADIUS.md,
        background:     accent + '18',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        marginBottom:   14,
      }}>
        <Icon size={19} color={accent} strokeWidth={1.8} />
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4, fontFamily: "'Inter', sans-serif" }}>{title}</div>
      <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.55, fontFamily: "'Inter', sans-serif" }}>{desc}</div>
    </div>
  );
}

// ── Stat pill ──────────────────────────────────────────────────────────────────
function StatPill({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-1px', fontFamily: "'Inter', sans-serif" }}>{value}</div>
      <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2, fontFamily: "'Inter', sans-serif" }}>{label}</div>
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-page)', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding:        '0 48px',
        height:         64,
        borderBottom:   `1px solid var(--border-color)`,
        position:       'sticky',
        top:            0,
        background:     'var(--bg-surface)',
        zIndex:         100,
      }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width:          34,
            height:         34,
            borderRadius:   9,
            background:     'var(--primary)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
          }}>
            <BookOpen size={17} color="#fff" strokeWidth={2} />
          </div>
          <div>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>Cluster </span>
            <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--primary)', fontFamily: "'Inter', sans-serif" }}>II</span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button
            onClick={() => navigate('/login')}
            style={{
              padding:      '8px 18px',
              fontSize:     13,
              fontWeight:   500,
              color:        'var(--text-secondary)',
              background:   'none',
              border:       `1px solid var(--border-color)`,
              borderRadius: RADIUS.md,
              cursor:       'pointer',
              fontFamily:   "'Inter', sans-serif",
              transition:   'all .15s',
            }}
          >
            Log In
          </button>
          <Btn variant="primary" onClick={() => navigate('/login')}>
            Get Started <ArrowRight size={15} />
          </Btn>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        flex:           1,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '60px 48px 40px',
        textAlign:      'center',
        position:       'relative',
        overflow:       'hidden',
      }}>

        {/* Ambient glow */}
        <div style={{
          position:      'absolute',
          top:           -100,
          left:          '50%',
          transform:     'translateX(-50%)',
          width:         700,
          height:        500,
          background:    'radial-gradient(ellipse, rgba(26,86,219,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Badge */}
        <div style={{
          display:       'inline-flex',
          alignItems:    'center',
          gap:           7,
          background:    'var(--primary-light)',
          color:         'var(--primary)',
          fontSize:      12,
          fontWeight:    600,
          fontFamily:    "'Inter', sans-serif",
          padding:       '5px 14px',
          borderRadius:  RADIUS.full,
          marginBottom:  28,
          letterSpacing: '0.2px',
          animation:     'fadeUp 0.6s ease both',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: '50%', background: 'var(--primary)',
            animation: 'pulse 2s infinite',
          }} />
          Bicol University · Official System
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily:        "'Inter', sans-serif",
          fontSize:          'clamp(36px, 5vw, 60px)',
          fontWeight:        400,
          lineHeight:        1.1,
          letterSpacing:     '-1.5px',
          color:             'var(--text-primary)',
          marginBottom:      20,
          maxWidth:          700,
          animation:         'fadeUp 0.6s 0.08s ease both',
          opacity:           0,
          animationFillMode: 'forwards',
        }}>
          <b> BU Cluster <br />
          Document Management System
          </b>
        </h1>

        {/* Sub */}
        <p style={{
          fontSize:          17,
          fontFamily:        "'Inter', sans-serif",
          color:             'var(--text-secondary)',
          lineHeight:        1.65,
          maxWidth:          500,
          marginBottom:      36,
          animation:         'fadeUp 0.6s 0.15s ease both',
          opacity:           0,
          animationFillMode: 'forwards',
        }}>
          A centralized logbook system for incoming, outgoing, and records management —
          built for the Cluster II office.
        </p>

        {/* CTAs */}
        <div style={{
          display:           'flex',
          gap:               12,
          justifyContent:    'center',
          marginBottom:      52,
          animation:         'fadeUp 0.6s 0.22s ease both',
          opacity:           0,
          animationFillMode: 'forwards',
        }}>
          <Btn variant="primary" onClick={() => navigate('/login')}>
            Access the System <ArrowRight size={15} />
          </Btn>
          <Btn variant="ghost">Learn More</Btn>
        </div>

        {/* Feature cards */}
        <div style={{
          display:           'flex',
          gap:               14,
          flexWrap:          'wrap',
          justifyContent:    'center',
          marginBottom:      8,
          animation:         'fadeUp 0.6s 0.3s ease both',
          opacity:           0,
          animationFillMode: 'forwards',
        }}>
          <FeatureCard icon={FileText}     title="Document Tracking"  desc="Track incoming & outgoing docs in real time" accent={'var(--primary)'} />
          <FeatureCard icon={Archive}      title="Records Management" desc="Organized, searchable document archive"       accent={'var(--success)'}   />
          <FeatureCard icon={CalendarDays} title="Leave & Service"    desc="Manage credits and service records easily"    accent={'var(--purple)'}  />
          <FeatureCard icon={Package}      title="Supply & Property"  desc="Inventory and property management tools"      accent={'var(--warning)'}   />
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div style={{
        display:    'flex',
        gap:        0,
        borderTop:  `1px solid var(--border-color)`,
        background: 'var(--bg-surface)',
      }}>
        {[
          { value: '1,234', label: 'Total Documents' },
          { value: '89',    label: 'Active Users' },
          { value: '+23%',  label: 'Monthly Activity' },
          { value: '12',    label: 'Pending Tasks' },
        ].map((s, i) => (
          <div key={i} style={{
            flex:        1,
            padding:     '24px',
            textAlign:   'center',
            borderRight: i < 3 ? `1px solid var(--border-color)` : 'none',
          }}>
            <StatPill {...s} />
          </div>
        ))}
      </div>

      {/* ── Main Footer ── */}
      <footer style={{
        background:  '#0f172a',
        color:       '#fff',
        fontFamily:  "'Inter', sans-serif",
      }}>
        {/* Top section */}
        <div style={{
          maxWidth:     1100,
          margin:       '0 auto',
          padding:      '52px 48px 40px',
          display:      'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap:          48,
        }}>

          {/* ── Col 1: Brand ── */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width:          36,
                height:         36,
                borderRadius:   9,
                background:     'var(--primary)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
              }}>
                <BookOpen size={18} color="#fff" strokeWidth={2} />
              </div>
              <div>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>BUCluster </span>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--primary)' }}>Grad School</span>
              </div>
            </div>

            {/* Tagline */}
            <p style={{
              fontSize:     13,
              color:        '#94a3b8',
              lineHeight:   1.7,
              marginBottom: 20,
              maxWidth:     300,
            }}>
              Bicol University · Cluster II Management System
            </p>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{
                width:          28,
                height:         28,
                borderRadius:   6,
                background:     'rgba(26,86,219,0.18)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                flexShrink:     0,
              }}>
                {/* Mail icon via SVG */}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={'var(--primary)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <a
                href="mailto:bucluster2@bicol-u.edu.ph"
                style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
                bucluster2@bicol-u.edu.ph
              </a>
            </div>
          </div>

          {/* ── Col 2: Office ── */}
          <div>
            <div style={{
              fontSize:     11,
              fontWeight:   700,
              color:        '#475569',
              letterSpacing:'1.2px',
              textTransform:'uppercase',
              marginBottom: 18,
            }}>
              Office
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Graduate School Office',
                "Registrar's Office",
                'Finance Office',
                'Academic Affairs',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#94a3b8'}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 3: Address ── */}
          <div>
            <div style={{
              fontSize:     11,
              fontWeight:   700,
              color:        '#475569',
              letterSpacing:'1.2px',
              textTransform:'uppercase',
              marginBottom: 18,
            }}>
              Address
            </div>
            <address style={{
              fontStyle:  'normal',
              fontSize:   13,
              color:      '#94a3b8',
              lineHeight: 1.8,
            }}>
              Bicol University<br />
              Rizal Street, Legazpi City<br />
              Albay, Philippines 4500<br />
            </address>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* Map pin */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={'var(--primary)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 12, color: 'var(--primary)', textDecoration: 'none' }}
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div style={{
          borderTop:      '1px solid #1e293b',
          padding:        '18px 48px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          maxWidth:       1100,
          margin:         '0 auto',
          width:          '100%',
          boxSizing:      'border-box',
        }}>
          <span style={{ fontSize: 12, color: '#475569', letterSpacing: '0.3px' }}>
            © 2026 BUCluster. ALL RIGHTS RESERVED.
          </span>
        </div>
      </footer>
    </div>
  );
}