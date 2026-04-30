import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, Eye, EyeOff, Shield, Zap, Users } from 'lucide-react';
import { RADIUS, SHADOW } from '../components/Tokens';

const INTER = "'Inter', sans-serif";

// ── Form input ────────────────────────────────────────────────────────────────
function FormInput({ label, type = 'text', placeholder, value, onChange, rightSlot }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{
        display:       'block',
        fontSize:      11,
        fontWeight:    600,
        color:         'var(--text-secondary)',
        marginBottom:  6,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        fontFamily:    INTER,
      }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width:        '100%',
            height:       48,
            border:       `1.5px solid ${focused ? 'var(--primary)' : 'var(--border-color)'}`,
            borderRadius: 10,
            background:   focused ? 'var(--bg-surface)' : 'var(--bg-page)',
            fontSize:     14,
            color:        'var(--text-primary)',
            padding:      `0 ${rightSlot ? '48px' : '16px'} 0 16px`,
            fontFamily:   INTER,
            outline:      'none',
            boxShadow:    focused ? `0 0 0 3px rgba(26,86,219,0.08)` : 'none',
            transition:   'all 0.18s',
            boxSizing:    'border-box',
          }}
        />
        {rightSlot && (
          <div style={{
            position:       'absolute',
            right:          14,
            top:            '50%',
            transform:      'translateY(-50%)',
            display:        'flex',
            alignItems:     'center',
          }}>
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Trust badge ───────────────────────────────────────────────────────────────
function TrustBadge({ icon: Icon, text }) {
  return (
    <div style={{
      display:     'flex',
      alignItems:  'center',
      gap:         10,
      padding:     '12px 16px',
      background:  'rgba(255,255,255,0.05)',
      borderRadius: 10,
      border:      '1px solid rgba(255,255,255,0.07)',
    }}>
      <div style={{
        width:          32,
        height:         32,
        borderRadius:   8,
        background:     'rgba(96,165,250,0.15)',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexShrink:     0,
      }}>
        <Icon size={15} color="#60a5fa" strokeWidth={1.8} />
      </div>
      <span style={{ fontSize: 12.5, color: 'var(--text-secondary)', fontFamily: INTER, lineHeight: 1.4 }}>{text}</span>
    </div>
  );
}

// ── LOGIN PAGE ────────────────────────────────────────────────────────────────
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate('/dashboard'); }, 900);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', fontFamily: INTER }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        * { box-sizing: border-box; font-family: 'Inter', sans-serif; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        input::placeholder { color: #94a3b8; }
      `}</style>

      {/* ── LEFT PANEL ─────────────────────────────────────────────────────── */}
      <div style={{
        width:          '46%',
        background:     '#060d1f',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'space-between',
        padding:        '44px 48px',
        position:       'relative',
        overflow:       'hidden',
      }}>
        {/* Background mesh */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
          <div style={{
            position:  'absolute', top: -120, right: -120,
            width: 480, height: 480, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(26,86,219,0.18) 0%, transparent 65%)',
          }} />
          <div style={{
            position:  'absolute', bottom: -80, left: -80,
            width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 65%)',
          }} />
          {/* Grid lines */}
          <svg width="100%" height="100%" style={{ opacity: 0.04 }}>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Brand */}
        <div style={{ display:'flex', alignItems:'center', gap:12, position:'relative', zIndex:2 }}>
          <div style={{
            width:          40, height: 40, borderRadius: 10,
            background:     'linear-gradient(135deg, var(--primary), var(--primary-hover))',
            display:        'flex', alignItems:'center', justifyContent:'center',
            boxShadow:      '0 4px 16px rgba(26,86,219,0.4)',
          }}>
            <BookOpen size={19} color="#fff" strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontSize:15, fontWeight:700, color:'#fff', letterSpacing:'-0.2px' }}>BUCluster Grad School</div>
            <div style={{ fontSize:11.5, color:'rgba(255,255,255,0.35)', marginTop:1 }}>Bicol University</div>
          </div>
        </div>

        {/* Center content */}
        <div style={{ position:'relative', zIndex:2 }}>
          {/* Headline */}
          <div style={{
            display:      'inline-flex',
            alignItems:   'center',
            gap:          6,
            background:   'rgba(26,86,219,0.2)',
            border:       '1px solid rgba(26,86,219,0.3)',
            borderRadius: 999,
            padding:      '4px 12px',
            marginBottom: 24,
          }}>
            <div style={{ width:6, height:6, borderRadius:'50%', background:'#60a5fa' }} />
            <span style={{ fontSize:11, fontWeight:600, color:'#93c5fd', letterSpacing:'0.5px' }}>Official Management System</span>
          </div>

          <h2 style={{
            fontSize:     'clamp(28px, 3vw, 40px)',
            fontWeight:   700,
            color:        'var(--text-primary)',
            lineHeight:   1.2,
            letterSpacing:'-1px',
            marginBottom: 14,
          }}>
            Document management<br />
            <span style={{ color:'var(--primary)' }}>built for academics.</span>
          </h2>
          <p style={{
            fontSize:     13.5,
            color:        'var(--text-secondary)',
            lineHeight:   1.7,
            marginBottom: 32,
            maxWidth:     320,
          }}>
            A centralized logbook for incoming, outgoing, and records management — Cluster II office.
          </p>

          {/* Trust badges */}
          <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:36 }}>
            <TrustBadge icon={Shield} text="Secure, role-based access for all staff" />
            <TrustBadge icon={Zap}    text="Real-time document tracking & updates" />
            <TrustBadge icon={Users}  text="89 active users across all offices" />
          </div>

          {/* Stats row */}
          <div style={{ display:'flex', gap:0 }}>
            {[
              { n:'1,234', l:'Documents' },
              { n:'99.9%', l:'Uptime' },
              { n:'12',    l:'Pending' },
            ].map(({ n, l }, i) => (
              <div key={l} style={{
                flex:        1,
                paddingTop:  14,
                borderTop:   '1px solid rgba(255,255,255,0.08)',
                paddingRight: i < 2 ? 20 : 0,
                marginRight:  i < 2 ? 20 : 0,
                borderRight:  i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <div style={{ fontSize:22, fontWeight:700, color:'var(--text-primary)', letterSpacing:'-0.5px' }}>{n}</div>
                <div style={{ fontSize:11, color:'var(--text-secondary)', marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ fontSize:11, color:'rgba(255,255,255,0.15)', letterSpacing:'0.8px', textTransform:'uppercase', position:'relative', zIndex:2 }}>
          © 2026 Bicol University · Cluster II
        </div>
      </div>

      {/* ── RIGHT PANEL ────────────────────────────────────────────────────── */}
      <div style={{
        flex:           1,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '48px 64px',
        background:     'var(--bg-page)',
        position:       'relative',
      }}>
        {/* Subtle top accent */}
        <div style={{
          position:   'absolute',
          top:        0, left:0, right:0,
          height:     3,
          background: 'linear-gradient(90deg, var(--primary), var(--primary-hover), var(--primary))',
          backgroundSize: '200% 100%',
        }} />

        <div style={{ width:'100%', maxWidth:400, animation:'fadeUp 0.5s ease both' }}>

          {/* Header */}
          <div style={{ marginBottom:28 }}>
            <h1 style={{
              fontSize:     24,
              fontWeight:   700,
              color:        'var(--text-primary)',
              letterSpacing:'-0.6px',
              marginBottom: 6,
            }}>
              Welcome back 👋
            </h1>
            <p style={{ fontSize:14, color:'var(--text-secondary)' }}>
              Sign in to your Cluster II account
            </p>
          </div>

          {/* Card */}
          <div style={{
            background:   'var(--bg-surface)',
            borderRadius: 16,
            border:       '1px solid var(--border-color)',
            padding:      '28px 28px 24px',
            boxShadow:    '0 4px 24px rgba(15,23,42,0.06), 0 1px 4px rgba(15,23,42,0.04)',
          }}>
            <FormInput
              label="Email Address"
              type="email"
              placeholder="you@bicol-u.edu.ph"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <FormInput
              label="Password"
              type={showPass ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              rightSlot={
                <button
                  onClick={() => setShowPass(v => !v)}
                  style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text-secondary)', padding:0, display:'flex' }}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            {/* Remember + forgot */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20 }}>
              <label style={{ display:'flex', alignItems:'center', gap:7, fontSize:13, color:'var(--text-secondary)', cursor:'pointer' }}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  style={{ accentColor: 'var(--primary)', width:14, height:14 }}
                />
                Remember me
              </label>
              <button style={{
                background:'none', border:'none', cursor:'pointer',
                color: 'var(--primary)', fontSize:13, fontWeight:500,
              }}>
                Forgot password?
              </button>
            </div>

            {/* Sign in button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              style={{
                width:          '100%',
                height:         48,
                background:     loading ? 'var(--text-secondary)' : 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
                color:          '#fff',
                border:         'none',
                borderRadius:   10,
                fontSize:       14,
                fontWeight:     600,
                cursor:         loading ? 'not-allowed' : 'pointer',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                gap:            8,
                transition:     'all 0.2s',
                boxShadow:      loading ? 'none' : '0 4px 16px rgba(26,86,219,0.3)',
                letterSpacing:  '-0.1px',
                position:       'relative',
                overflow:       'hidden',
              }}
            >
              {loading
                ? <><span style={{ opacity:0.7 }}>Signing in</span><span style={{ letterSpacing:2 }}>…</span></>
                : <><span>Sign In</span><ArrowRight size={16} /></>
              }
            </button>

            {/* Divider */}
            <div style={{ display:'flex', alignItems:'center', gap:12, margin:'18px 0', color:'var(--text-secondary)', fontSize:12 }}>
              <div style={{ flex:1, height:1, background:'var(--border-color)' }} />
              or
              <div style={{ flex:1, height:1, background:'var(--border-color)' }} />
            </div>

            {/* Back to home */}
            <button
              onClick={() => navigate('/')}
              style={{
                width:          '100%',
                height:         44,
                background:     'var(--bg-page)',
                color:          'var(--text-primary)',
                border:         '1.5px solid var(--border-color)',
                borderRadius:   10,
                fontSize:       13,
                fontWeight:     500,
                cursor:         'pointer',
                transition:     'all 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              ← Back to Homepage
            </button>
          </div>

          {/* Footer note */}
          <p style={{ fontSize:12, color:'var(--text-secondary)', textAlign:'center', marginTop:20, lineHeight:1.6 }}>
            Don't have an account?{' '}
            <span style={{ color: 'var(--primary)', fontWeight:500, cursor:'pointer' }}>
              Contact your administrator
            </span>
          </p>

          {/* Security note */}
          <div style={{
            display:     'flex',
            alignItems:  'center',
            justifyContent:'center',
            gap:         6,
            marginTop:   16,
            color:       'var(--text-secondary)',
            fontSize:    11.5,
          }}>
            <Shield size={12} strokeWidth={1.8} />
            <span>Secured with end-to-end encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}