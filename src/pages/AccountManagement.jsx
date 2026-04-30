import React, { useState } from 'react';
import { UserCircle, Users, Shield, Settings, Mail, Phone, Search, Filter, Plus, Edit, Trash2, X, ChevronDown } from 'lucide-react';

const AccountManagement = () => {
  const [facultyAccounts, setFacultyAccounts] = useState([
    { id: 1, name: 'Dr. Maria Santos', email: 'maria.santos@bicoluniversity.edu', department: 'BUCAL', position: 'Professor', status: 'Active', lastLogin: '2025-01-15', role: 'Faculty' },
    { id: 2, name: 'Prof. Juan Dela Cruz', email: 'juan.cruz@bicoluniversity.edu', department: 'BUCDM', position: 'Associate Professor', status: 'Active', lastLogin: '2025-01-14', role: 'Faculty' },
    { id: 3, name: 'Dr. Elena Rodriguez', email: 'elena.rodriguez@bicoluniversity.edu', department: 'BUJMRIGD', position: 'Assistant Professor', status: 'Active', lastLogin: '2025-01-13', role: 'Faculty' },
    { id: 4, name: 'Prof. Michael Tan', email: 'michael.tan@bicoluniversity.edu', department: 'BUGS', position: 'Instructor', status: 'Active', lastLogin: '2025-01-12', role: 'Faculty' },
    { id: 5, name: 'Dr. Ana Reyes', email: 'ana.reyes@bicoluniversity.edu', department: 'BUCL', position: 'Professor', status: 'Active', lastLogin: '2025-01-11', role: 'Faculty' },
    { id: 6, name: 'Prof. Carlos Mendoza', email: 'carlos.mendoza@bicoluniversity.edu', department: 'BUOU', position: 'Associate Professor', status: 'Inactive', lastLogin: '2025-01-10', role: 'Faculty' },
    { id: 7, name: 'Dr. Patricia Gomez', email: 'patricia.gomez@bicoluniversity.edu', department: 'BUCAL', position: 'Assistant Professor', status: 'Active', lastLogin: '2025-01-09', role: 'Faculty' },
    { id: 8, name: 'System Administrator', email: 'admin@bicoluniversity.edu', department: 'IT', position: 'System Admin', status: 'Active', lastLogin: '2025-01-16', role: 'Admin' },
    { id: 9, name: 'Prof. Roberto Santiago', email: 'roberto.santiago@bicoluniversity.edu', department: 'BUGS', position: 'Instructor', status: 'Active', lastLogin: '2025-01-08', role: 'Faculty' },
    { id: 10, name: 'Dr. Liza Fernandez', email: 'liza.fernandez@bicoluniversity.edu', department: 'BUCDM', position: 'Professor', status: 'Active', lastLogin: '2025-01-07', role: 'Faculty' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const departments = ['All Departments', 'BUGS', 'BUCAL', 'BUCL', 'BUJMRIGD', 'BUOU', 'BUCDM', 'IT'];

  
  const filteredFaculty = facultyAccounts.filter(faculty => {
    const matchesDepartment = selectedDepartment === 'All Departments' || faculty.department === selectedDepartment;
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const handleAddFaculty = (formData) => {
    const newFaculty = {
      id: Math.max(...facultyAccounts.map(f => f.id), 0) + 1,
      ...formData,
      status: 'Active',
      lastLogin: new Date().toISOString().split('T')[0],
      role: 'Faculty'
    };
    setFacultyAccounts([...facultyAccounts, newFaculty]);
    setShowAddForm(false);
  };

  const handleEditFaculty = (formData) => {
    setFacultyAccounts(facultyAccounts.map(f => 
      f.id === selectedFaculty.id ? { ...f, ...formData } : f
    ));
    setShowEditForm(false);
    setSelectedFaculty(null);
  };

  const handleDeleteFaculty = () => {
    // Prevent deletion of admin account
    if (selectedFaculty.role === 'Admin') {
      alert('Cannot delete the admin account');
      return;
    }
    setFacultyAccounts(facultyAccounts.filter(f => f.id !== selectedFaculty.id));
    setSelectedFaculty(null);
  };

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
          color: 'var(--text-secondary)',
          margin: '8px 0 0 0',
          fontFamily: "'Inter', sans-serif"
        }}>
          Manage faculty email accounts and permissions
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
              <Users size={20} color="#0074AD" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Total Faculty
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                {facultyAccounts.length}
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
              <Mail size={20} color="#10b981" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Active Accounts
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                {facultyAccounts.filter(f => f.status === 'Active').length}
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
              <Shield size={20} color="#f59e0b" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>
                Admin Accounts
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                {facultyAccounts.filter(f => f.role === 'Admin').length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative' }}>
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
            placeholder="Search faculty name or email..."
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
        
        {/* Department Filter */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              minWidth: '180px',
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
              maxHeight: '300px',
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
                    textAlign: 'left',
                    border: 'none',
                    backgroundColor: selectedDepartment === dept ? '#f0f9ff' : 'white',
                    color: selectedDepartment === dept ? '#0074AD' : '#374151',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif"
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
          )}
        </div>

        <button 
          onClick={() => setShowAddForm(true)}
          style={{
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
            cursor: 'pointer'
          }}
        >
          <Plus size={20} />
          Add Faculty
        </button>
      </div>

      {/* Faculty Accounts Table */}
      <div style={{
        backgroundColor: 'var(--bg-surface)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          overflowY: 'auto',
          flex: 1
        }}>
        {/* Table Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 2.2fr 1fr 1.2fr 1fr 120px',
          padding: '16px 20px',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          fontFamily: "'Inter', sans-serif",
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div>Faculty Name</div>
          <div>Email Account</div>
          <div>Department</div>
          <div>Position</div>
          <div>Role</div>
          <div>Actions</div>
        </div>

        {/* Faculty Account Rows */}
        {filteredFaculty.map((faculty) => (
          <div key={faculty.id} style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 2.2fr 1fr 1.2fr 1fr 120px',
            padding: '16px 20px',
            borderBottom: '1px solid #f3f4f6',
            alignItems: 'center',
            transition: 'background-color 0.2s',
            fontFamily: "'Public Sans', sans-serif"
          }}>
            <div style={{ 
              fontSize: '14px', 
              color: 'var(--text-primary)', 
              fontWeight: '500'
            }}>
              {faculty.name}
            </div>
            <div style={{ 
              fontSize: '14px', 
              color: '#6b7280'
            }}>
              {faculty.email}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {faculty.department}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {faculty.position}
            </div>
            <div>
              <span style={{
                fontSize: '12px',
                fontWeight: '500',
                color: getRoleColor(faculty.role),
                backgroundColor: `${getRoleColor(faculty.role)}20`,
                padding: '4px 8px',
                borderRadius: '4px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {faculty.role}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-start' }}>
              <button
                onClick={() => {
                  setSelectedFaculty(faculty);
                  setShowEditForm(true);
                }}
                title="Edit Faculty"
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
                <Edit size={16} color="#6b7280" />
              </button>
              <button
                onClick={() => {
                  setSelectedFaculty(faculty);
                  handleDeleteFaculty();
                }}
                title="Delete Faculty"
                disabled={faculty.role === 'Admin'}
                style={{
                  padding: '6px',
                  backgroundColor: faculty.role === 'Admin' ? '#f9fafb' : 'transparent',
                  border: faculty.role === 'Admin' ? '#e5e7eb' : '1px solid #e5e7eb',
                  borderRadius: '4px',
                  cursor: faculty.role === 'Admin' ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  opacity: faculty.role === 'Admin' ? 0.5 : 1
                }}
              >
                <Trash2 size={16} color={faculty.role === 'Admin' ? '#9ca3af' : '#dc3545'} />
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Add Faculty Modal */}
      {showAddForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '12px',
            padding: '24px',
            width: '90%',
            maxWidth: '500px',
            boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: '#1f2937' }}>
                Add New Faculty Account
              </h2>
              <button onClick={() => setShowAddForm(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#6b7280' }}>
                ×
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                department: e.target.department.value,
                position: e.target.position.value
              };
              handleAddFaculty(formData);
            }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Faculty Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  placeholder="Enter faculty name"
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Email Address <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  placeholder="faculty@bicoluniversity.edu"
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Department <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="department"
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: '#ffffff'
                  }}
                >
                  {departments.filter(d => d !== 'All Departments' && d !== 'IT').map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Position <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  name="position"
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                  placeholder="e.g., Professor, Instructor"
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#0074AD',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  Add Faculty
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Faculty Modal */}
      {showEditForm && selectedFaculty && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            borderRadius: '12px',
            padding: '24px',
            width: '90%',
            maxWidth: '500px',
            boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: '#1f2937' }}>
                Edit Faculty Account
              </h2>
              <button onClick={() => {
                setShowEditForm(false);
                setSelectedFaculty(null);
              }} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#6b7280' }}>
                ×
              </button>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                department: e.target.department.value,
                position: e.target.position.value,
                status: e.target.status.value
              };
              handleEditFaculty(formData);
            }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Faculty Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  defaultValue={selectedFaculty.name}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Email Address <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  defaultValue={selectedFaculty.email}
                  disabled={selectedFaculty.role === 'Admin'}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: selectedFaculty.role === 'Admin' ? '1px solid #e5e7eb' : '1px solid #e5e7eb',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: selectedFaculty.role === 'Admin' ? '#f9fafb' : '#ffffff',
                    cursor: selectedFaculty.role === 'Admin' ? 'not-allowed' : 'text'
                  }}
                />
                {selectedFaculty.role === 'Admin' && (
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
                    Admin email cannot be changed
                  </p>
                )}
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Department <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="department"
                  required
                  defaultValue={selectedFaculty.department}
                  disabled={selectedFaculty.role === 'Admin'}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: selectedFaculty.role === 'Admin' ? '#f9fafb' : '#ffffff',
                    cursor: selectedFaculty.role === 'Admin' ? 'not-allowed' : 'pointer'
                  }}
                >
                  {departments.filter(d => d !== 'All Departments').map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Position <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  name="position"
                  type="text"
                  required
                  defaultValue={selectedFaculty.position}
                  disabled={selectedFaculty.role === 'Admin'}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: selectedFaculty.role === 'Admin' ? '#f9fafb' : '#ffffff',
                    cursor: selectedFaculty.role === 'Admin' ? 'not-allowed' : 'text'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Account Status
                </label>
                <select
                  name="status"
                  defaultValue={selectedFaculty.status}
                  disabled={selectedFaculty.role === 'Admin'}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: selectedFaculty.role === 'Admin' ? '#f9fafb' : '#ffffff',
                    cursor: selectedFaculty.role === 'Admin' ? 'not-allowed' : 'pointer'
                  }}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => {
                    setShowEditForm(false);
                    setSelectedFaculty(null);
                  }}
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#0074AD',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default AccountManagement;
