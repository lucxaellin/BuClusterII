import React from 'react';
import { UserCircle, Users, Shield, Settings, Mail, Phone, Search, Filter, Plus, Edit, Trash2 } from 'lucide-react';

const AccountManagement = () => {
  const accounts = [
    { id: 1, name: 'John Doe', email: 'john.doe@bicoluniversity.edu', role: 'Admin', department: 'IT', status: 'Active', lastLogin: '01/15/2025' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@bicoluniversity.edu', role: 'Staff', department: 'HR', status: 'Active', lastLogin: '01/14/2025' },
    { id: 3, name: 'Mike Johnson', email: 'mike.johnson@bicoluniversity.edu', role: 'Staff', department: 'Finance', status: 'Active', lastLogin: '01/13/2025' },
    { id: 4, name: 'Sarah Williams', email: 'sarah.williams@bicoluniversity.edu', role: 'Manager', department: 'Operations', status: 'Inactive', lastLogin: '01/10/2025' },
    { id: 5, name: 'Robert Brown', email: 'robert.brown@bicoluniversity.edu', role: 'Staff', department: 'Academic', status: 'Active', lastLogin: '01/12/2025' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return '#10b981';
      case 'Inactive': return '#ef4444';
      case 'Suspended': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getRoleColor = (role) => {
    switch(role) {
      case 'Admin': return '#0074AD';
      case 'Manager': return '#8b5cf6';
      case 'Staff': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ 
      fontFamily: "'Inter', sans-serif", 
      backgroundColor: '#f8f9fa',
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
          color: '#0074AD', 
          margin: 0,
          fontFamily: "'Public Sans', sans-serif"
        }}>
          Account Management
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: '8px 0 0 0',
          fontFamily: "'Inter', sans-serif"
        }}>
          Manage user accounts and permissions
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#f0f9ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Users size={20} color="#0074AD" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', fontFamily: "'Inter', sans-serif" }}>
                Total Users
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1f2937', fontFamily: "'Inter', sans-serif" }}>
                127
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#f0fdf4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Shield size={20} color="#10b981" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', fontFamily: "'Inter', sans-serif" }}>
                Active Users
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1f2937', fontFamily: "'Inter', sans-serif" }}>
                115
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Settings size={20} color="#f59e0b" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', fontFamily: "'Inter', sans-serif" }}>
                Admins
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1f2937', fontFamily: "'Inter', sans-serif" }}>
                8
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative', maxWidth: '400px' }}>
          <button style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}>
            <Search size={20} color="#6b7280" />
          </button>
          <input
            type="text"
            placeholder="Search users..."
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: "'Inter', sans-serif",
              outline: 'none',
              boxSizing: 'border-box',
              backgroundColor: '#ffffff'
            }}
          />
        </div>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          backgroundColor: '#ffffff',
          color: '#6b7280',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
          transition: 'all 0.2s'
        }}>
          <Filter size={20} />
          Filter
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          backgroundColor: '#0074AD',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          fontFamily: "'Inter', sans-serif",
          transition: 'background-color 0.2s'
        }}>
          <Plus size={20} />
          Add User
        </button>
      </div>

      {/* Accounts Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Table Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr 1fr 150px',
          padding: '16px 20px',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
          fontSize: '12px',
          fontWeight: '600',
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          fontFamily: "'Inter', sans-serif"
        }}>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Department</div>
          <div>Status</div>
          <div>Last Login</div>
          <div>Actions</div>
        </div>

        {/* Account Rows */}
        {accounts.map((account) => (
          <div key={account.id} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr 1fr 150px',
            padding: '16px 20px',
            borderBottom: '1px solid #f3f4f6',
            alignItems: 'center',
            transition: 'background-color 0.2s',
            fontFamily: "'Public Sans', sans-serif"
          }}>
            <div style={{ 
              fontSize: '14px', 
              color: '#1f2937', 
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <UserCircle size={20} color="#6b7280" />
              {account.name}
            </div>
            <div style={{ 
              fontSize: '14px', 
              color: '#6b7280',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Mail size={16} color="#6b7280" />
              {account.email}
            </div>
            <div>
              <span style={{
                fontSize: '12px',
                fontWeight: '500',
                color: getRoleColor(account.role),
                backgroundColor: `${getRoleColor(account.role)}20`,
                padding: '4px 8px',
                borderRadius: '4px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {account.role}
              </span>
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {account.department}
            </div>
            <div>
              <span style={{
                fontSize: '12px',
                fontWeight: '500',
                color: getStatusColor(account.status),
                backgroundColor: `${getStatusColor(account.status)}20`,
                padding: '4px 8px',
                borderRadius: '4px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {account.status}
              </span>
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {account.lastLogin}
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
              <button
                title="Edit User"
                style={{
                  padding: '6px',
                  backgroundColor: 'transparent',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <Edit size={16} color="#6b7280" />
              </button>
              <button
                title="Delete User"
                style={{
                  padding: '6px',
                  backgroundColor: 'transparent',
                  border: '1px solid #e5e7eb',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <Trash2 size={16} color="#dc3545" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountManagement;
