import React, { useState } from 'react';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav style={{
      height: '48px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      fontFamily: "'Inter', sans-serif",
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 100
    }}>
      {/* Left side - BU CLUSTER2 branding */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
 
        <h1 style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: '600',
          color: '#1f2937',
          fontFamily: "'Public Sans', sans-serif"
        }}>
          CLUSTER II
        </h1>
      </div>

      {/* Right side - Account Management */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            fontFamily: "'Inter', sans-serif",
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f9fafb';
            e.target.style.borderColor = '#d1d5db';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#ffffff';
            e.target.style.borderColor = '#e5e7eb';
          }}
        >
          <User size={18} color="#6b7280" />
          <span>Account Management</span>
          <ChevronDown 
            size={16} 
            color="#6b7280" 
            style={{ 
              transition: 'transform 0.2s',
              transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)'
            }} 
          />
        </button>

        {/* Dropdown Menu */}
        {showDropdown && (
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: '0',
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            minWidth: '200px',
            overflow: 'hidden',
            zIndex: 1000
          }}>
            <button
              onClick={() => {
                // Navigate to settings
                window.location.href = '/AccountManagement';
                setShowDropdown(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                fontFamily: "'Inter', sans-serif",
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <Settings size={18} color="#6b7280" />
              <span>Settings</span>
            </button>
            <div style={{
              height: '1px',
              backgroundColor: '#e5e7eb',
              margin: '0'
            }} />
            <button
              onClick={() => {
                // Handle logout
                alert('Logging out...');
                setShowDropdown(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                color: '#dc3545',
                fontFamily: "'Inter', sans-serif",
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fef2f2';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              <LogOut size={18} color="#dc3545" />
              <span>Log Out</span>
            </button>
          </div>
        )}

        {/* Click outside to close dropdown */}
        {showDropdown && (
          <div
            onClick={() => setShowDropdown(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;