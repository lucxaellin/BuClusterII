import React, { useState } from 'react';
import { FileText, Calendar, User, Clock, TrendingUp, Search, Filter, Plus, ChevronDown } from 'lucide-react';

const ServiceLeaveCredit = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

  const departments = [
    'All Departments',
    'BUGS',
    'BUCAL',
    'BUCL',
    'BUJMRIGD',
    'BUOU',
    'BUCDM'
  ];

  
  const credits = [
    { id: 1, employee: 'John Doe', type: 'Service Credit', days: 15, used: 3, balance: 12, date: '01/15/2025', status: 'Active', department: 'BUGS' },
    { id: 2, employee: 'Jane Smith', type: 'Leave Credit', days: 10, used: 5, balance: 5, date: '01/14/2025', status: 'Active', department: 'BUCAL' },
    { id: 3, employee: 'Mike Johnson', type: 'Service Credit', days: 20, used: 8, balance: 12, date: '01/13/2025', status: 'Active', department: 'BUCL' },
    { id: 4, employee: 'Sarah Williams', type: 'Leave Credit', days: 15, used: 12, balance: 3, date: '01/12/2025', status: 'Low Balance', department: 'BUJMRIGD' },
    { id: 5, employee: 'Robert Brown', type: 'Service Credit', days: 18, used: 2, balance: 16, date: '01/11/2025', status: 'Active', department: 'BUOU' },
    { id: 6, employee: 'Emily Davis', type: 'Leave Credit', days: 12, used: 3, balance: 9, date: '01/10/2025', status: 'Active', department: 'BUCDM' },
    { id: 7, employee: 'Michael Wilson', type: 'Service Credit', days: 25, used: 5, balance: 20, date: '01/09/2025', status: 'Active', department: 'BUGS' },
    { id: 8, employee: 'Lisa Anderson', type: 'Leave Credit', days: 8, used: 7, balance: 1, date: '01/08/2025', status: 'Low Balance', department: 'BUCAL' },
  ];

  // Filter credits based on department and search term
  const filteredCredits = credits.filter(credit => {
    const matchesDepartment = selectedDepartment === 'All Departments' || credit.department === selectedDepartment;
    const matchesSearch = credit.employee.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return '#10b981';
      case 'Low Balance': return '#f59e0b';
      case 'Exhausted': return '#ef4444';
      default: return '#6b7280';
    }
  };

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
          color: '#0074AD', 
          margin: 0,
          fontFamily: "'Public Sans', sans-serif"
        }}>
          Service/Leave Credit
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          margin: '8px 0 0 0',
          fontFamily: "'Inter', sans-serif"
        }}>
          Manage employee service and leave credits
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px' 
      }}>
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
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
              <User size={20} color="#0074AD" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Total Employees
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                45
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
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
              <Calendar size={20} color="#10b981" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Total Leave Days
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                675
              </p>
            </div>
          </div>
        </div>

        <div style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
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
              <Clock size={20} color="#f59e0b" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Used This Month
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                28
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showDepartmentDropdown && (
        <div
          onClick={() => setShowDepartmentDropdown(false)}
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

      {/* Department Selection Header */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h3 style={{
            margin: 0,
            fontSize: '16px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            fontFamily: "'Inter', sans-serif"
          }}>
            Select Department
          </h3>
          <p style={{
            margin: '4px 0 0 0',
            fontSize: '14px',
            color: 'var(--text-secondary)',
            fontFamily: "'Inter', sans-serif"
          }}>
            Choose a department to view employee credits
          </p>
        </div>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              minWidth: '200px',
              justifyContent: 'space-between'
            }}
          >
            <span>{selectedDepartment}</span>
            <ChevronDown size={16} color="#6b7280" />
          </button>
          
          {showDepartmentDropdown && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              right: 0,
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              zIndex: 1000,
              maxHeight: '200px',
              overflowY: 'auto'
            }}>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => {
                    setSelectedDepartment(dept);
                    setShowDepartmentDropdown(false);
                  }}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '10px 16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    color: '#374151',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      
      {/* Search and Actions */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative', maxWidth: '800px' }}>
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
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              border: '1px solid var(--border-color)',
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
          color: 'var(--text-secondary)',
          border: '1px solid var(--border-color)',
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
          Add Credit
        </button>
      </div>

      {/* Credits Table */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Table Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 120px',
          padding: '16px 20px',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          fontFamily: "'Inter', sans-serif"
        }}>
          <div>Employee</div>
          <div>Type</div>
          <div>Total Days</div>
          <div>Used</div>
          <div>Balance</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Credit Rows */}
        {filteredCredits.map((credit) => (
          <div key={credit.id} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 1fr 120px',
            padding: '16px 20px',
            borderBottom: '1px solid #f3f4f6',
            alignItems: 'center',
            transition: 'background-color 0.2s',
            fontFamily: "'Public Sans', sans-serif"
          }}>
            <div style={{ 
              fontSize: '14px', 
              color: 'var(--text-primary)', 
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <User size={20} color="#6b7280" />
              {credit.employee}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.type}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.days}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.used}
            </div>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937' }}>
              {credit.balance}
            </div>
            <div>
              <span style={{
                fontSize: '12px',
                fontWeight: '500',
                color: getStatusColor(credit.status),
                backgroundColor: `${getStatusColor(credit.status)}20`,
                padding: '4px 8px',
                borderRadius: '4px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {credit.status}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
              <button
                title="View Details"
                style={{
                  padding: '6px',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <FileText size={16} color="#6b7280" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceLeaveCredit;
