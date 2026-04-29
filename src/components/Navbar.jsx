import React from 'react';

const Navbar = () => {
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

      {/* Right side - Navigation Links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
        {/* Settings Link */}
        <a
          href="/settings"
          style={{
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            fontFamily: "'Inter', sans-serif",
            transition: 'all 0.2s',
            padding: '8px 12px',
            borderRadius: '6px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#0074AD';
            e.target.style.backgroundColor = '#f0f9ff';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#374151';
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Settings
        </a>

        {/* Account Management Link */}
        <a
          href="/AccountManagement"
          style={{
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            fontFamily: "'Inter', sans-serif",
            transition: 'all 0.2s',
            padding: '8px 12px',
            borderRadius: '6px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#0074AD';
            e.target.style.backgroundColor = '#f0f9ff';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#374151';
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Account Management
        </a>

        {/* Log Out Link */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            // Handle logout
            alert('Logging out...');
            window.location.href = '/login';
          }}
          style={{
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            color: '#dc3545',
            fontFamily: "'Inter', sans-serif",
            transition: 'all 0.2s',
            padding: '8px 12px',
            borderRadius: '6px',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#b91c1c';
            e.target.style.backgroundColor = '#fef2f2';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#dc3545';
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Log Out
        </a>
      </div>
    </nav>
  );
};

export default Navbar;