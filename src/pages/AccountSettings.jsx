import React, { useState, useRef } from 'react';
import {
  User, Lock, Bell, Shield, Camera,
  Eye, EyeOff, Check, X, AlertCircle,
  Mail, Phone, MapPin, Building, Save,
  ChevronRight, LogOut,
} from 'lucide-react';
import { C, FONT, RADIUS, SHADOW } from '../components/Tokens';

// ─── Tokens local to this page ────────────────────────────────────────────────
const TAB_ITEMS = [
  { id: 'profile',   label: 'Profile',          icon: User   },
  { id: 'security',  label: 'Security',          icon: Lock   },
  { id: 'notifications', label: 'Notifications', icon: Bell   },
  { id: 'sessions',  label: 'Active Sessions',   icon: Shield },
];

// ─── Reusable field components ────────────────────────────────────────────────
function FieldLabel({ children, required }) {
  return (
    <label style={{
      display:    'block',
      fontSize:   12,
      fontWeight: 600,
      color:      '#374151',
      fontFamily: FONT,
      marginBottom: 6,
      letterSpacing: '0.3px',
    }}>
      {children}
      {required && <span style={{ color: C.red, marginLeft: 3 }}>*</span>}
    </label>
  );
}

function InputField({ label, value, onChange, type = 'text', placeholder, required, icon: Icon, disabled, hint }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 20 }}>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <div style={{ position: 'relative' }}>
        {Icon && (
          <div style={{
            position:  'absolute',
            left:      12,
            top:       '50%',
            transform: 'translateY(-50%)',
            color:     focused ? C.primary : '#9ca3af',
            transition: 'color 0.15s',
            pointerEvents: 'none',
          }}>
            <Icon size={15} strokeWidth={1.8} />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width:        '100%',
            padding:      Icon ? '10px 12px 10px 38px' : '10px 12px',
            border:       `1.5px solid ${focused ? C.primary : '#e5e7eb'}`,
            borderRadius: RADIUS.md,
            fontSize:     13.5,
            fontFamily:   FONT,
            color:        disabled ? '#9ca3af' : '#111827',
            background:   disabled ? '#f9fafb' : '#fff',
            outline:      'none',
            transition:   'border-color 0.15s, box-shadow 0.15s',
            boxShadow:    focused ? `0 0 0 3px ${C.primary}18` : 'none',
            boxSizing:    'border-box',
          }}
        />
      </div>
      {hint && (
        <p style={{ fontSize: 11, color: '#9ca3af', fontFamily: FONT, marginTop: 4 }}>{hint}</p>
      )}
    </div>
  );
}

function PasswordField({ label, value, onChange, placeholder, required, hint }) {
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 20 }}>
      {label && <FieldLabel required={required}>{label}</FieldLabel>}
      <div style={{ position: 'relative' }}>
        <div style={{
          position:  'absolute',
          left:      12,
          top:       '50%',
          transform: 'translateY(-50%)',
          color:     focused ? C.primary : '#9ca3af',
          pointerEvents: 'none',
        }}>
          <Lock size={15} strokeWidth={1.8} />
        </div>
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width:        '100%',
            padding:      '10px 40px 10px 38px',
            border:       `1.5px solid ${focused ? C.primary : '#e5e7eb'}`,
            borderRadius: RADIUS.md,
            fontSize:     13.5,
            fontFamily:   FONT,
            color:        '#111827',
            background:   '#fff',
            outline:      'none',
            transition:   'border-color 0.15s, box-shadow 0.15s',
            boxShadow:    focused ? `0 0 0 3px ${C.primary}18` : 'none',
            boxSizing:    'border-box',
          }}
        />
        <button
          type="button"
          onClick={() => setShow(v => !v)}
          style={{
            position:   'absolute',
            right:      10,
            top:        '50%',
            transform:  'translateY(-50%)',
            background: 'none',
            border:     'none',
            cursor:     'pointer',
            color:      '#9ca3af',
            padding:    4,
            display:    'flex',
          }}
        >
          {show ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      </div>
      {hint && <p style={{ fontSize: 11, color: '#9ca3af', fontFamily: FONT, marginTop: 4 }}>{hint}</p>}
    </div>
  );
}

// Password strength meter
function StrengthMeter({ password }) {
  const score = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;

  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['#e5e7eb', '#ef4444', '#f59e0b', '#3b82f6', '#10b981'];

  if (!password) return null;
  return (
    <div style={{ marginTop: -12, marginBottom: 20 }}>
      <div style={{ display: 'flex', gap: 4, marginBottom: 4 }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: i <= score ? colors[score] : '#e5e7eb',
            transition: 'background 0.3s',
          }} />
        ))}
      </div>
      <span style={{ fontSize: 11, color: colors[score], fontFamily: FONT, fontWeight: 600 }}>
        {labels[score]}
      </span>
    </div>
  );
}

// Toggle switch
function Toggle({ checked, onChange, label, description }) {
  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      padding:        '14px 0',
      borderBottom:   '1px solid #f3f4f6',
    }}>
      <div>
        <div style={{ fontSize: 13.5, fontWeight: 500, color: '#111827', fontFamily: FONT }}>{label}</div>
        {description && (
          <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: FONT, marginTop: 2 }}>{description}</div>
        )}
      </div>
      <button
        onClick={() => onChange(!checked)}
        style={{
          width:        44,
          height:       24,
          borderRadius: 12,
          background:   checked ? C.primary : '#d1d5db',
          border:       'none',
          cursor:       'pointer',
          position:     'relative',
          transition:   'background 0.2s',
          flexShrink:   0,
        }}
      >
        <span style={{
          position:   'absolute',
          top:        2,
          left:       checked ? 22 : 2,
          width:      20,
          height:     20,
          borderRadius: '50%',
          background: '#fff',
          transition: 'left 0.2s',
          boxShadow:  '0 1px 3px rgba(0,0,0,0.2)',
        }} />
      </button>
    </div>
  );
}

// Section card
function Card({ title, description, children, action }) {
  return (
    <div style={{
      background:   '#fff',
      border:       '1px solid #e5e7eb',
      borderRadius: RADIUS.lg,
      marginBottom: 20,
      overflow:     'hidden',
    }}>
      {(title || description) && (
        <div style={{
          padding:      '18px 24px',
          borderBottom: '1px solid #f3f4f6',
          display:      'flex',
          alignItems:   'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#111827', fontFamily: FONT }}>{title}</div>
            {description && (
              <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: FONT, marginTop: 2 }}>{description}</div>
            )}
          </div>
          {action}
        </div>
      )}
      <div style={{ padding: '20px 24px' }}>{children}</div>
    </div>
  );
}

// Toast notification
function Toast({ message, type, onClose }) {
  const bg   = type === 'success' ? '#ecfdf5' : '#fef2f2';
  const col  = type === 'success' ? '#065f46' : '#991b1b';
  const Icon = type === 'success' ? Check : AlertCircle;
  return (
    <div style={{
      position:     'fixed',
      bottom:       24,
      right:        24,
      background:   bg,
      border:       `1px solid ${type === 'success' ? '#a7f3d0' : '#fecaca'}`,
      borderRadius: RADIUS.lg,
      padding:      '12px 16px',
      display:      'flex',
      alignItems:   'center',
      gap:          10,
      boxShadow:    SHADOW.lg,
      zIndex:       9999,
      animation:    'slideUp 0.25s ease',
      minWidth:     260,
    }}>
      <style>{`@keyframes slideUp { from { transform: translateY(12px); opacity:0 } to { transform: translateY(0); opacity:1 } }`}</style>
      <Icon size={16} color={col} />
      <span style={{ fontSize: 13, fontWeight: 500, color: col, fontFamily: FONT, flex: 1 }}>{message}</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: col }}>
        <X size={14} />
      </button>
    </div>
  );
}

// ─── TAB: Profile ─────────────────────────────────────────────────────────────
function ProfileTab({ toast }) {
  const [form, setForm] = useState({
    firstName:  'Admin',
    lastName:   'User',
    email:      'admin@bicol.edu.ph',
    phone:      '+63 912 345 6789',
    department: 'Office of the University Registrar',
    position:   'System Administrator',
    address:    'Legazpi City, Albay',
  });
  const fileRef = useRef();

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSave = () => {
    toast('Profile updated successfully.', 'success');
  };

  return (
    <>
      {/* Avatar */}
      <Card title="Profile Photo">
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width:          72,
              height:         72,
              borderRadius:   '50%',
              background:     C.primary,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              color:          '#fff',
              fontSize:       22,
              fontWeight:     700,
              fontFamily:     FONT,
              flexShrink:     0,
              border:         '3px solid #e5e7eb',
            }}>
              {form.firstName[0]}{form.lastName[0]}
            </div>
            <button
              onClick={() => fileRef.current.click()}
              style={{
                position:       'absolute',
                bottom:         0,
                right:          0,
                width:          26,
                height:         26,
                borderRadius:   '50%',
                background:     '#fff',
                border:         `2px solid ${C.primary}`,
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                cursor:         'pointer',
                color:          C.primary,
              }}
            >
              <Camera size={12} strokeWidth={2} />
            </button>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#111827', fontFamily: FONT }}>
              {form.firstName} {form.lastName}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: FONT, marginTop: 2 }}>{form.position}</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: FONT }}>{form.department}</div>
          </div>
        </div>
      </Card>

      {/* Personal Info */}
      <Card title="Personal Information" description="Update your name and contact details.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
          <InputField label="First Name"  value={form.firstName}  onChange={set('firstName')}  icon={User}     required />
          <InputField label="Last Name"   value={form.lastName}   onChange={set('lastName')}   icon={User}     required />
        </div>
        <InputField label="Email Address" value={form.email}      onChange={set('email')}      icon={Mail}     required type="email" />
        <InputField label="Phone Number"  value={form.phone}      onChange={set('phone')}      icon={Phone} />
        <InputField label="Address"       value={form.address}    onChange={set('address')}    icon={MapPin} />
      </Card>

      {/* Work Info */}
      <Card title="Work Information">
        <InputField label="Department" value={form.department} onChange={set('department')} icon={Building} />
        <InputField label="Position"   value={form.position}   onChange={set('position')}   icon={User}
          hint="Contact your IT administrator to change your role." disabled />
      </Card>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={handleSave}
          style={{
            display:      'flex',
            alignItems:   'center',
            gap:          8,
            padding:      '10px 24px',
            background:   C.primary,
            color:        '#fff',
            border:       'none',
            borderRadius: RADIUS.md,
            fontSize:     13.5,
            fontWeight:   600,
            fontFamily:   FONT,
            cursor:       'pointer',
            transition:   'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <Save size={15} strokeWidth={2} />
          Save Changes
        </button>
      </div>
    </>
  );
}

// ─── TAB: Security ────────────────────────────────────────────────────────────
function SecurityTab({ toast }) {
  const [current,  setCurrent]  = useState('');
  const [newPass,  setNewPass]  = useState('');
  const [confirm,  setConfirm]  = useState('');
  const [twoFA,    setTwoFA]    = useState(false);

  const mismatch = confirm && newPass !== confirm;

  const handleChange = () => {
    if (!current || !newPass || !confirm) return toast('Please fill all fields.', 'error');
    if (newPass !== confirm) return toast('Passwords do not match.', 'error');
    if (newPass.length < 8)  return toast('Password must be at least 8 characters.', 'error');
    setCurrent(''); setNewPass(''); setConfirm('');
    toast('Password changed successfully.', 'success');
  };

  return (
    <>
      <Card title="Change Password" description="Choose a strong password you don't use elsewhere.">
        <PasswordField
          label="Current Password" value={current}
          onChange={e => setCurrent(e.target.value)}
          placeholder="Enter current password" required
        />
        <PasswordField
          label="New Password" value={newPass}
          onChange={e => setNewPass(e.target.value)}
          placeholder="Enter new password" required
          hint="Minimum 8 characters with uppercase, number and symbol."
        />
        <StrengthMeter password={newPass} />
        <PasswordField
          label="Confirm New Password" value={confirm}
          onChange={e => setConfirm(e.target.value)}
          placeholder="Re-enter new password" required
        />
        {mismatch && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: C.red, fontSize: 12, fontFamily: FONT, marginTop: -12, marginBottom: 16 }}>
            <AlertCircle size={13} /> Passwords do not match
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={handleChange}
            style={{
              display:      'flex',
              alignItems:   'center',
              gap:          8,
              padding:      '10px 24px',
              background:   C.primary,
              color:        '#fff',
              border:       'none',
              borderRadius: RADIUS.md,
              fontSize:     13.5,
              fontWeight:   600,
              fontFamily:   FONT,
              cursor:       'pointer',
              transition:   'opacity 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <Lock size={15} strokeWidth={2} /> Update Password
          </button>
        </div>
      </Card>

      <Card title="Two-Factor Authentication" description="Add an extra layer of security to your account.">
        <Toggle
          checked={twoFA}
          onChange={v => { setTwoFA(v); toast(v ? '2FA enabled.' : '2FA disabled.', 'success'); }}
          label="Enable 2FA via Authenticator App"
          description="Use Google Authenticator or Authy to generate login codes."
        />
        <Toggle
          checked={false}
          onChange={() => toast('SMS 2FA not configured for this account.', 'error')}
          label="Enable 2FA via SMS"
          description="Receive a code on your registered phone number."
        />
      </Card>

      <Card
        title="Danger Zone"
        description="Irreversible account actions."
        action={
          <span style={{
            fontSize: 11, fontWeight: 700, color: C.red,
            background: '#fef2f2', padding: '3px 8px',
            borderRadius: 4, fontFamily: FONT,
          }}>
            DANGER
          </span>
        }
      >
        <div style={{
          display:      'flex',
          alignItems:   'center',
          justifyContent: 'space-between',
          padding:      '14px 16px',
          background:   '#fef2f2',
          border:       '1px solid #fecaca',
          borderRadius: RADIUS.md,
        }}>
          <div>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: '#991b1b', fontFamily: FONT }}>Deactivate Account</div>
            <div style={{ fontSize: 12, color: '#b91c1c', fontFamily: FONT, marginTop: 2 }}>
              This will disable access to the system. Contact IT to reactivate.
            </div>
          </div>
          <button
            onClick={() => toast('Contact your system administrator to deactivate.', 'error')}
            style={{
              padding:      '8px 16px',
              background:   C.red,
              color:        '#fff',
              border:       'none',
              borderRadius: RADIUS.md,
              fontSize:     12,
              fontWeight:   600,
              fontFamily:   FONT,
              cursor:       'pointer',
              flexShrink:   0,
            }}
          >
            Deactivate
          </button>
        </div>
      </Card>
    </>
  );
}

// ─── TAB: Notifications ───────────────────────────────────────────────────────
function NotificationsTab({ toast }) {
  const [prefs, setPrefs] = useState({
    incomingDocs:    true,
    outgoingDocs:    true,
    leaveRequests:   true,
    systemAlerts:    true,
    emailDigest:     false,
    browserPush:     false,
    loginAlerts:     true,
  });
  const set = (k) => (v) => setPrefs(p => ({ ...p, [k]: v }));

  return (
    <>
      <Card title="Document Notifications" description="Get notified about document activity.">
        <Toggle checked={prefs.incomingDocs}  onChange={set('incomingDocs')}  label="Incoming Documents"    description="When a new document is received." />
        <Toggle checked={prefs.outgoingDocs}  onChange={set('outgoingDocs')}  label="Outgoing Documents"    description="When a document is sent out." />
        <Toggle checked={prefs.leaveRequests} onChange={set('leaveRequests')} label="Leave Requests"        description="Submitted leave credit applications." />
      </Card>

      <Card title="System Notifications">
        <Toggle checked={prefs.systemAlerts}  onChange={set('systemAlerts')}  label="System Alerts"         description="Maintenance windows and critical updates." />
        <Toggle checked={prefs.loginAlerts}   onChange={set('loginAlerts')}   label="New Login Alerts"      description="When your account is accessed from a new device." />
      </Card>

      <Card title="Delivery Preferences">
        <Toggle checked={prefs.emailDigest}   onChange={set('emailDigest')}   label="Daily Email Digest"    description="Summary of activity sent to admin@bicol.edu.ph." />
        <Toggle checked={prefs.browserPush}   onChange={set('browserPush')}   label="Browser Push Notifications" description="Requires browser permission." />
      </Card>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={() => toast('Notification preferences saved.', 'success')}
          style={{
            display:      'flex',
            alignItems:   'center',
            gap:          8,
            padding:      '10px 24px',
            background:   C.primary,
            color:        '#fff',
            border:       'none',
            borderRadius: RADIUS.md,
            fontSize:     13.5,
            fontWeight:   600,
            fontFamily:   FONT,
            cursor:       'pointer',
            transition:   'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <Save size={15} /> Save Preferences
        </button>
      </div>
    </>
  );
}

// ─── TAB: Sessions ────────────────────────────────────────────────────────────
function SessionsTab({ toast }) {
  const [sessions, setSessions] = useState([
    { id: 1, device: 'Chrome on Windows 11', location: 'Legazpi City, PH', time: 'Active now',    current: true  },
    { id: 2, device: 'Firefox on macOS',     location: 'Naga City, PH',    time: '2 hours ago',   current: false },
    { id: 3, device: 'Mobile · Android',     location: 'Legazpi City, PH', time: 'Yesterday',     current: false },
  ]);

  const revoke = (id) => {
    setSessions(s => s.filter(x => x.id !== id));
    toast('Session revoked.', 'success');
  };

  return (
    <Card title="Active Sessions" description="Devices currently signed in to your account.">
      {sessions.map(s => (
        <div key={s.id} style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          padding:        '14px 0',
          borderBottom:   '1px solid #f3f4f6',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width:          40,
              height:         40,
              borderRadius:   RADIUS.md,
              background:     s.current ? `${C.primary}15` : '#f3f4f6',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              flexShrink:     0,
            }}>
              <Shield size={18} color={s.current ? C.primary : '#9ca3af'} strokeWidth={1.8} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: '#111827', fontFamily: FONT }}>{s.device}</span>
                {s.current && (
                  <span style={{
                    fontSize: 10, fontWeight: 700, color: '#065f46',
                    background: '#d1fae5', padding: '2px 7px',
                    borderRadius: 10, fontFamily: FONT,
                  }}>
                    THIS DEVICE
                  </span>
                )}
              </div>
              <div style={{ fontSize: 12, color: '#9ca3af', fontFamily: FONT, marginTop: 2 }}>
                {s.location} · {s.time}
              </div>
            </div>
          </div>
          {!s.current && (
            <button
              onClick={() => revoke(s.id)}
              style={{
                padding:      '6px 14px',
                background:   '#fef2f2',
                color:        C.red,
                border:       `1px solid #fecaca`,
                borderRadius: RADIUS.md,
                fontSize:     12,
                fontWeight:   600,
                fontFamily:   FONT,
                cursor:       'pointer',
              }}
            >
              Revoke
            </button>
          )}
        </div>
      ))}
      <div style={{ marginTop: 16 }}>
        <button
          onClick={() => { setSessions(s => s.filter(x => x.current)); toast('All other sessions revoked.', 'success'); }}
          style={{
            display:      'flex',
            alignItems:   'center',
            gap:          8,
            padding:      '9px 16px',
            background:   '#fef2f2',
            color:        C.red,
            border:       `1px solid #fecaca`,
            borderRadius: RADIUS.md,
            fontSize:     13,
            fontWeight:   600,
            fontFamily:   FONT,
            cursor:       'pointer',
          }}
        >
          <LogOut size={14} strokeWidth={2} />
          Revoke All Other Sessions
        </button>
      </div>
    </Card>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [toastMsg,  setToastMsg]  = useState(null);

  const showToast = (message, type = 'success') => {
    setToastMsg({ message, type });
    setTimeout(() => setToastMsg(null), 3500);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'profile':       return <ProfileTab       toast={showToast} />;
      case 'security':      return <SecurityTab      toast={showToast} />;
      case 'notifications': return <NotificationsTab toast={showToast} />;
      case 'sessions':      return <SessionsTab      toast={showToast} />;
      default:              return null;
    }
  };

  return (
    <div style={{ fontFamily: FONT, minHeight: '100%' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      {/* Page header */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: '#111827', fontFamily: FONT, margin: 0 }}>
          Account Settings
        </h1>
        <p style={{ fontSize: 13, color: '#9ca3af', fontFamily: FONT, marginTop: 4 }}>
          Manage your profile, security and preferences.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>

        {/* Sidebar tabs */}
        <div style={{
          width:        220,
          background:   '#fff',
          border:       '1px solid #e5e7eb',
          borderRadius: RADIUS.lg,
          overflow:     'hidden',
          flexShrink:   0,
          position:     'sticky',
          top:          80,
        }}>
          {TAB_ITEMS.map(({ id, label, icon: Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                style={{
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'space-between',
                  width:          '100%',
                  padding:        '13px 16px',
                  background:     active ? `${C.primary}0e` : 'none',
                  border:         'none',
                  borderLeft:     `3px solid ${active ? C.primary : 'transparent'}`,
                  cursor:         'pointer',
                  color:          active ? C.primary : '#374151',
                  fontFamily:     FONT,
                  fontSize:       13.5,
                  fontWeight:     active ? 600 : 500,
                  transition:     'all 0.12s',
                  textAlign:      'left',
                  borderBottom:   '1px solid #f3f4f6',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#f9fafb'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={15} strokeWidth={active ? 2.2 : 1.8} />
                  {label}
                </div>
                {active && <ChevronRight size={13} />}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {renderTab()}
        </div>
      </div>

      {/* Toast */}
      {toastMsg && (
        <Toast
          message={toastMsg.message}
          type={toastMsg.type}
          onClose={() => setToastMsg(null)}
        />
      )}
    </div>
  );
}