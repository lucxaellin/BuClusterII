import React from 'react';
import { LayoutDashboard, FileText, Users, TrendingUp, Calendar, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div style={{ 
      fontFamily: "'Inter', sans-serif", 
      backgroundColor: 'var(--bg-page)',
      height: 'calc(100vh - 48px)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
      {/* Header */}
      <div>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '600', 
          color: 'var(--text-primary)', 
          margin: 0,
          fontFamily: "'Public Sans', sans-serif"
        }}>
          Dashboard
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          margin: '8px 0 0 0',
          fontFamily: "'Inter', sans-serif"
        }}>
          Welcome to Bicol University Cluster II Logbook System
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#f0f9ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileText size={24} color="#0074AD" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Total Documents
              </p>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                1,234
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#f0fdf4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={24} color="#10b981" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Active Users
              </p>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                89
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TrendingUp size={24} color="#f59e0b" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Monthly Activity
              </p>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                +23%
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: '#fee2e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <AlertCircle size={24} color="#ef4444" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Pending Tasks
              </p>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                12
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            fontFamily: "'Inter', sans-serif"
          }}>
            Recent Activity
          </h2>
        </div>
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981'
              }} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                  New document uploaded by Ms. Mitch
                </p>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                  2 hours ago
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#f59e0b'
              }} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                  Outgoing document processed by Ms. Mau
                </p>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                  5 hours ago
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#0074AD'
              }} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                  System backup completed
                </p>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                  1 day ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;