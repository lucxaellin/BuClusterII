import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { RADIUS, SHADOW } from '../components/Tokens';

const INTER = "'Inter', sans-serif";

// ── Small form input ──────────────────────────────────────────────────────────
function FormInput({ label, type = 'text', placeholder, value, onChange, rightSlot }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display:       'block',
        fontSize:      11,
        fontWeight:    700,
        color:         'var(--text-secondary)',
        marginBottom:  6,
        letterSpacing: '0.6px',
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
            height:       46,
            border:       `1.5px solid ${focused ? 'var(--primary)' : 'var(--border-color)'}`,
            borderRadius: RADIUS.md,
            background:   'var(--bg-surface)',
            fontSize:     14,
            color:        'var(--text-primary)',
            padding:      `0 ${rightSlot ? '44px' : '14px'} 0 14px`,
            fontFamily:   INTER,
            outline:      'none',
            boxShadow:    focused ? `0 0 0 3px rgba(26,86,219,0.1)` : 'none',
            transition:   'all 0.15s',
          }}
        />
        {rightSlot && (
          <div style={{
            position:       'absolute',
            right:          12,
            top:            '50%',
            transform:      'translateY(-50%)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
          }}>
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  );
}

// ── LOGIN PAGE ────────────────────────────────────────────────────────────────
export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 900);
  };

  return (
    <div style={{
      minHeight:     '100vh',
      display:       'flex',
      fontFamily:    INTER,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        input::placeholder { color: #a0aec0; }
        input::-ms-input-placeholder { color: #a0aec0; }
        * { box-sizing: border-box; }
      `}</style>

      {/* ── Left panel ── */}
      <div style={{
        width:          '48%',
        background:     'linear-gradient(145deg, #0b1220 0%, #162040 55%, #0d1b38 100%)',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'space-between',
        padding:        '44px 48px',
        position:       'relative',
        overflow:       'hidden',
      }}>
        {/* Decorative rings */}
        <div style={{
          position:     'absolute', top: -80, right: -80,
          width:        400, height: 400, borderRadius: '50%',
          border:       '1px solid rgba(59,116,240,0.13)',
          pointerEvents:'none',
        }} />
        <div style={{
          position:     'absolute', bottom: -60, left: -60,
          width:        280, height: 280, borderRadius: '50%',
          border:       '1px solid rgba(59,116,240,0.09)',
          pointerEvents:'none',
        }} />
        <div style={{
          position:     'absolute', top: '40%', left: '30%',
          width:        600, height: 400,
          background:   'radial-gradient(ellipse, rgba(26,86,219,0.12) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, position: 'relative', zIndex: 2 }}>
          <div style={{
            width:          42,
            height:         42,
            borderRadius:   11,
            background:     'var(--primary)',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
          }}>
            <BookOpen size={20} color="#fff" strokeWidth={2} />
          </div>
          <div>
            <div style={{ fontFamily: INTER, fontSize: 16, fontWeight: 700, color: '#fff' }}>Cluster II Logbook</div>
            <div style={{ fontFamily: INTER, fontSize: 12, color: 'rgba(255,255,255,0.38)', marginTop: 1 }}>Bicol University</div>
          </div>
        </div>

        {/* Quote + stats */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            fontFamily:   INTER,
            fontSize:     'clamp(26px, 3vw, 38px)',
            color:        '#fff',
            lineHeight:   1.25,
            marginBottom: 32,
            letterSpacing:'-0.5px',
          }}>
            The future of document management is{' '}
            <em style={{ color: 'rgba(96,165,250,0.85)', fontStyle: 'italic' }}>already here.</em>
          </div>

          <div style={{ display: 'flex', gap: 36 }}>
            {[
              { n: '1,234', l: 'Documents' },
              { n: '89',    l: 'Active Users' },
              { n: '99.9%', l: 'Uptime' },
            ].map(({ n, l }) => (
              <div key={l} style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 16 }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.5px' }}>{n}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          fontFamily:    INTER,
          fontSize:      11,
          color:         'rgba(255,255,255,0.18)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          position:      'relative',
          zIndex:        2,
        }}>
          © 2026 Bicol University Cluster II
        </div>
      </div>

      {/* ── Right panel ── */}
      <div style={{
        flex:           1,
        display:        'flex',
        flexDirection:  'column',
        alignItems:     'center',
        justifyContent: 'center',
        padding:        '48px 64px',
        background:     'var(--bg-page)',
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>

          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <h1 style={{
              fontSize:     26,
              fontWeight:   700,
              color:        'var(--text-primary)',
              letterSpacing:'-0.5px',
              marginBottom: 6,
              fontFamily:   INTER,
            }}>
              Welcome back
            </h1>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', fontFamily: INTER }}>
              Sign in to your Cluster II account
            </p>
          </div>

          {/* Form */}
          <div style={{
            background:   'var(--bg-surface)',
            borderRadius: RADIUS.lg,
            border:       `1px solid var(--border-color)`,
            padding:      '28px 28px 24px',
            boxShadow:    SHADOW.md,
          }}>
            <FormInput
              label="Email Address"
              type="email"
              placeholder="you@bicol.edu.ph"
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
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: 0 }}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              }
            />

            {/* Remember + forgot */}
            <div style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
              marginBottom:   22,
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--text-secondary)', cursor: 'pointer', fontFamily: INTER }}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={e => setRemember(e.target.checked)}
                  style={{ accentColor: 'var(--primary)', width: 14, height: 14 }}
                />
                Remember me
              </label>
              <button style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--primary)', fontSize: 13, fontWeight: 500, fontFamily: INTER,
              }}>
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              onClick={handleLogin}
              disabled={loading}
              style={{
                width:          '100%',
                height:         46,
                background:     loading ? 'var(--text-secondary)' : 'var(--primary)',
                color:          '#fff',
                border:         'none',
                borderRadius:   RADIUS.md,
                fontSize:       14,
                fontWeight:     600,
                fontFamily:     INTER,
                cursor:         loading ? 'not-allowed' : 'pointer',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                gap:            8,
                transition:     'all 0.2s',
                boxShadow:      loading ? 'none' : '0 4px 14px rgba(26,86,219,0.28)',
              }}
            >
              {loading ? 'Signing in…' : <><span>Sign In</span><ArrowRight size={16} /></>}
            </button>

            {/* Divider */}
            <div style={{
              display:     'flex',
              alignItems:  'center',
              gap:         12,
              margin:      '20px 0',
              color:       'var(--text-secondary)',
              fontSize:    12,
              fontFamily:  INTER,
            }}>
              <div style={{ flex: 1, height: 1, background: 'var(--border-color)' }} />
              or
              <div style={{ flex: 1, height: 1, background: 'var(--border-color)' }} />
            </div>

            {/* Back to home */}
            <button
              onClick={() => navigate('/')}
              style={{
                width:          '100%',
                height:         42,
                background:     'none',
                color:          'var(--text-secondary)',
                border:         `1.5px solid var(--border-color)`,
                borderRadius:   RADIUS.md,
                fontSize:       13,
                fontWeight:     500,
                fontFamily:     INTER,
                cursor:         'pointer',
                transition:     'all 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
            >
              ← Back to Homepage
            </button>
          </div>

          <p style={{
            fontSize:   12,
            color:      'var(--text-secondary)',
            textAlign:  'center',
            marginTop:  20,
            fontFamily: INTER,
          }}>
            Don't have an account?{' '}
            <span style={{ color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>
              Contact your administrator
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}