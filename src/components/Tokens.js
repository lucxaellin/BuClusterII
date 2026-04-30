// ── Design Tokens ─────────────────────────────────────────────────────────────
// Single source of truth for all colors, typography, and spacing.
// Import this in any component: import { C, S } from '../tokens';

export const C = {
  // Brand blues
  primary:       '#1a56db',
  primaryDark:   '#1240b0',
  primaryLight:  '#e8f0fe',
  primaryMid:    '#3b74f0',

  // Dark sidebar palette
  sidebarBg:     '#111827',
  sidebarHover:  'rgba(255,255,255,0.07)',
  sidebarActive: 'rgba(255,255,255,0.13)',
  sidebarBorder: 'rgba(255,255,255,0.08)',
  sidebarAccent: '#3b74f0',

  // Neutrals
  gray1:  '#f7f8fa',
  gray2:  '#eef0f4',
  gray3:  '#dde1ea',
  gray4:  '#a0aec0',
  white:  '#ffffff',

  // Text
  text:   '#1a1f2e',
  text2:  '#4a5568',
  text3:  '#718096',

  // Semantic
  green:  '#10b981',
  amber:  '#f59e0b',
  red:    '#ef4444',
  purple: '#8b5cf6',

  // Sidebar text
  sidebarText:      '#ffffff',
  sidebarTextMuted: 'rgba(255,255,255,0.55)',
  sidebarTextTiny:  'rgba(255,255,255,0.30)',
};

// Typography
export const FONT = "'Plus Jakarta Sans', sans-serif";
export const FONT_SERIF = "'Instrument Serif', serif";

// Shadows
export const SHADOW = {
  sm: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
  md: '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
  lg: '0 8px 32px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)',
};

// Border radius
export const RADIUS = {
  sm:  '6px',
  md:  '10px',
  lg:  '14px',
  xl:  '20px',
  full: '9999px',
};

export const SIDEBAR_W = 256;
export const SIDEBAR_W_COLLAPSED = 60;
export const NAV_H = 56;