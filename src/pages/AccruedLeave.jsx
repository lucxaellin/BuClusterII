import React, { useState } from 'react';
import { FileText, User, Search, Filter, Plus, ChevronDown } from 'lucide-react';

const AccuredLeave = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [filterValues, setFilterValues] = useState({
    asOfDate: '',
    position: ''
  });
  const [credits, setCredits] = useState([
    { id: 2, facultyName: 'Jane Smith', employeeId: 'T-001', department: 'BUCAL', leaveType: 'Sick Leave', balance: 5, status: 'Active', asOf: '01/15/2025', position: 'Professor' },
    { id: 4, facultyName: 'Sarah Williams', employeeId: 'T-002', department: 'BUJMRIGD', leaveType: 'Personal Leave', balance: 3, status: 'Low Balance', asOf: '01/13/2025', position: 'Instructor' },
    { id: 6, facultyName: 'Emily Davis', employeeId: 'T-003', department: 'BUCDM', leaveType: 'Vacation Leave', balance: 9, status: 'Active', asOf: '01/11/2025', position: 'Associate Professor' },
    { id: 8, facultyName: 'Lisa Anderson', employeeId: 'T-004', department: 'BUCAL', leaveType: 'Maternity Leave', balance: 1, status: 'Low Balance', asOf: '01/09/2025', position: 'Assistant Professor' },
  ]);

  const handleEditClick = (faculty) => {
    setSelectedFaculty(faculty);
    setShowEditForm(true);
  };

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

  const FilterModal = ({ onClose, onApply, onClear }) => {
    const [localFilterValues, setLocalFilterValues] = useState(filterValues);

    const handleInputChange = (field, value) => {
      setLocalFilterValues(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleApply = () => {
      setFilterValues(localFilterValues);
      onApply(localFilterValues);
      onClose();
    };

    const handleClear = () => {
      const clearedValues = { asOfDate: '', position: '' };
      setLocalFilterValues(clearedValues);
      setFilterValues(clearedValues);
      onClear();
      onClose();
    };

    // Get unique positions from credits for dropdown
    const uniquePositions = [...new Set(credits.map(c => c.position).filter(Boolean))];

    return (
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
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          width: '90%',
          maxWidth: '500px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h2 style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: '600',
              color: '#1f2937',
              fontFamily: "'Inter', sans-serif"
            }}>
              Filter Faculty
            </h2>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6b7280'
              }}
            >
              ×
            </button>
          </div>

          {/* Filter Fields */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
                fontFamily: "'Inter', sans-serif"
              }}>
                As Of Date
              </label>
              <input
                type="date"
                value={localFilterValues.asOfDate}
                onChange={(e) => handleInputChange('asOfDate', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Position
              </label>
              <select
                value={localFilterValues.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff'
                }}
              >
                <option value="">All Positions</option>
                {uniquePositions.map((position, index) => (
                  <option key={index} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            marginTop: '20px'
          }}>
            <button
              onClick={handleClear}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#6b7280',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Clear
            </button>
            <button
              onClick={onClose}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#6b7280',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              style={{
                padding: '10px 20px',
                backgroundColor: '#0074AD',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#ffffff',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    );
  };

  const AddFacultyForm = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
      facultyName: '',
      divisionOffice: '',
      firstDayService: '',
      position: '',
      department: 'BUCAL',
      serviceCreditEarned: '',
      leaveTakenUndertime: '',
      remarks: ''
    });

    const handleInputChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleSave = () => {
      // Validate required fields
      if (!formData.facultyName.trim() || !formData.divisionOffice.trim() || !formData.position.trim()) {
        alert('Please fill in all required fields: Faculty Name, Division/Office, and Position');
        return;
      }
      onSave(formData);
      onClose();
    };

    return (
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
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          width: '90%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h2 style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '600',
              color: '#1f2937',
              fontFamily: "'Inter', sans-serif"
            }}>
              Add New Faculty
            </h2>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6b7280'
              }}
            >
              ×
            </button>
          </div>

          {/* Form Fields */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px'
          }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Faculty Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.facultyName}
                onChange={(e) => handleInputChange('facultyName', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                placeholder="Enter faculty name"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Division/Office <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.divisionOffice}
                onChange={(e) => handleInputChange('divisionOffice', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                placeholder="Enter division or office"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px',
                fontFamily: "'Inter', sans-serif"
              }}>
                1st Day of Service
              </label>
              <input
                type="date"
                value={formData.firstDayService}
                onChange={(e) => handleInputChange('firstDayService', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Position <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                placeholder="Enter position"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box',
                  backgroundColor: '#ffffff'
                }}
              >
                <option value="BUGS">BUGS</option>
                <option value="BUCAL">BUCAL</option>
                <option value="BUCL">BUCL</option>
                <option value="BUJMRIGD">BUJMRIGD</option>
                <option value="BUOU">BUOU</option>
                <option value="BUCDM">BUCDM</option>
              </select>
            </div>

            
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px',
                fontFamily: "'Inter', sans-serif"
              }}>
                Remarks
              </label>
              <textarea
                value={formData.remarks}
                onChange={(e) => handleInputChange('remarks', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontFamily: "'Inter', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box',
                  minHeight: '80px',
                  resize: 'vertical'
                }}
                placeholder="Enter any additional remarks"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            marginTop: '20px'
          }}>
            <button
              onClick={onClose}
              style={{
                padding: '12px 24px',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#6b7280',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0074AD',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#ffffff',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Add Faculty
            </button>
          </div>
        </div>
      </div>
    );
  };

  const FacultyLeaveForm = ({ faculty, onClose, onSave }) => {
    const [formData, setFormData] = useState({
      name: faculty?.facultyName || '',
      dateOfBirth: faculty?.dateOfBirth || '',
      firstDayGovService: faculty?.firstDayGovService || '',
      firstDayBU: faculty?.firstDayBU || '',
      position: faculty?.position || '',
      asDate: faculty?.asDate || '',
      univUnit: faculty?.univUnit || '',
      serviceCreditEarned: faculty?.serviceCreditEarned || '',
      leaveTakenUndertime: faculty?.leaveTakenUndertime || '',
      balance: faculty?.balance || '',
      remarks: faculty?.remarks || '',
      asOfDate: faculty?.asOfDate || '',
      noOfDays: faculty?.noOfDays || '',
      inclusiveDates: faculty?.inclusiveDates || '',
      noOfDaysBalance: faculty?.noOfDaysBalance || '',
      dateActedByPO: faculty?.dateActedByPO || '',
      postAudited: faculty?.postAudited || '',
      wpay: faculty?.wpay || '',
      wnoPay: faculty?.wnoPay || ''
    });

    const handleInputChange = (field, value) => {
      // Validate numeric fields
      if (field === 'serviceCreditEarned' || field === 'leaveTakenUndertime') {
        // Allow only numbers and empty string
        const numericValue = value.replace(/[^0-9]/g, '');
        setFormData(prev => ({
          ...prev,
          [field]: numericValue
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [field]: value
        }));
      }
    };

    const handleSave = () => {
      // Validate required fields
      if (!formData.name.trim() || !formData.position.trim()) {
        alert('Please fill in all required fields: Faculty Name and Position');
        return;
      }
      onSave(formData);
      onClose();
    };

    return (
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
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          width: '90%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <h2 style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '600',
              color: '#1f2937',
              fontFamily: "'Inter', sans-serif"
            }}>
              Bicol University
            </h2>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6b7280'
              }}
            >
              ×
            </button>
          </div>

          {/* Faculty Information Table */}
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '20px',
            overflowX: 'auto'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '12px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Faculty Information
            </h3>
            
            {/* Table Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 0.5fr 0.5fr 0.5fr 0.8fr 1fr',
              backgroundColor: '#f1f5f9',
              padding: '8px',
              borderRadius: '6px',
              marginBottom: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              fontFamily: "'Inter', sans-serif",
              marginLeft: '1px'
            }}>
              <div>Faculty Name</div>
              <div>Position</div>
              <div>Service Credit</div>
              <div>Leave Credit</div>
              <div>Balance</div>
              <div>As Of</div>
              <div>Remarks</div>
            </div>
            
            {/* Table Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 0.5fr 0.5fr 0.5fr 0.8fr 1fr',
              padding: '8px',
              gap: '8px',
              borderBottom: '1px solid #e2e8f0',
              fontSize: '14px',
              color: '#374151',
              fontFamily: "'Inter', sans-serif"
            }}>
              <div style={{
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                backgroundColor: '#ffffff'
              }}>
                <input
                  type="text"
                  value={formData.name || faculty?.facultyName || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                backgroundColor: '#ffffff'
              }}>
                <input
                  type="text"
                  value={formData.position || faculty?.position || ''}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                backgroundColor: '#ffffff'
              }}>
                <input
                  type="text"
                  value={formData.serviceCreditEarned || faculty?.serviceCreditEarned || ''}
                  onChange={(e) => handleInputChange('serviceCreditEarned', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                backgroundColor: '#ffffff'
              }}>
                <input
                  type="text"
                  value={formData.leaveTakenUndertime || faculty?.leaveTakenUndertime || ''}
                  onChange={(e) => handleInputChange('leaveTakenUndertime', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                backgroundColor: '#ffffff'
              }}>
                <input
                  type="text"
                  value={formData.balance || faculty?.balance || ''}
                  onChange={(e) => handleInputChange('balance', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                backgroundColor: '#ffffff'
              }}>
                <input
                  type="date"
                  value={formData.asOf || faculty?.asOf || new Date().toISOString().split('T')[0]}
                  onChange={(e) => handleInputChange('asOf', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>
              <div style={{
                padding: '8px',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                backgroundColor: '#ffffff'
              }}>
                <input
                  type="text"
                  value={formData.remarks || faculty?.remarks || ''}
                  onChange={(e) => handleInputChange('remarks', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '4px',
            justifyContent: 'flex-end',
            marginTop: '16px'
          }}>
            <button
              onClick={onClose}
              style={{
                padding: '12px 24px',
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#6b7280',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              style={{
                padding: '12px 24px',
                backgroundColor: '#0074AD',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#ffffff',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#34C759';
      case 'Low Balance': return '#F59E0B';
      case 'Exhausted': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const departments = [
    'All Departments',
    'BUGS',
    'BUCAL',
    'BUCL',
    'BUJMRIGD',
    'BUOU',
    'BUCDM'
  ];

  
  // Filter credits based on department, search term, asOf date, and position
  const filteredCredits = credits.filter(credit => {
    const matchesDepartment = selectedDepartment === 'All Departments' || credit.department === selectedDepartment;
    const matchesSearch = credit.facultyName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // As Of date filtering
    let matchesAsOfDate = true;
    if (filterValues.asOfDate) {
      const creditDate = new Date(credit.asOf);
      const filterDate = new Date(filterValues.asOfDate);
      matchesAsOfDate = creditDate.toDateString() === filterDate.toDateString();
    }
    
    // Position filtering
    const matchesPosition = !filterValues.position || credit.position === filterValues.position;
    
    return matchesDepartment && matchesSearch && matchesAsOfDate && matchesPosition;
  });

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
          Accured Leave
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: '8px 0 0 0',
          fontFamily: "'Inter', sans-serif"
        }}>
          Manage employee leave credits for teaching staff
        </p>
      </div>

      {/* Department Selection Header */}
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
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
            color: '#1f2937',
            fontFamily: "'Inter', sans-serif"
          }}>
            Select Department
          </h3>
          <p style={{
            margin: '4px 0 0 0',
            fontSize: '14px',
            color: '#6b7280',
            fontFamily: "'Inter', sans-serif"
          }}>
            Choose a department to view teacher leave credits
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
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              minWidth: '200px',
              justifyContent: 'space-between',
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
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
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
            placeholder="Search faculty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
        <button 
          onClick={handleFilterClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            backgroundColor: '#ffffff',
            color: '#6B7280',
            border: '1px solid #E5E7EB',
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
        <button 
          onClick={handleAddClick}
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
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            transition: 'background-color 0.2s'
          }}>
            <Plus size={20} />
            Add Faculty
          </button>
      </div>

      {/* Credits Table */}
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
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 0.8fr 1fr 120px',
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
          <div>Faculty Name</div>
          <div>Position</div>
          <div>Service Credit</div>
          <div>Leave Credit</div>
          <div>Balance</div>
          <div>As Of</div>
          <div>Remarks</div>
          <div>Actions</div>
        </div>

        {/* Credit Rows */}
        {filteredCredits.map((credit) => (
          <div key={credit.id} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 0.8fr 1fr 120px',
            padding: '16px 20px',
            borderBottom: '1px solid #f3f4f6',
            alignItems: 'center',
            transition: 'background-color 0.2s',
            fontFamily: "'Public Sans', sans-serif"
          }}>
            <div style={{ 
              fontSize: '14px', 
              color: '#1f2937', 
              fontWeight: '500'
            }}>
              {credit.facultyName}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.position || '0'}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.serviceCreditEarned || '0'}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.leaveTakenUndertime || '0'}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.balance || '0'}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.asOf || new Date().toLocaleDateString()}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {credit.reason || 'N/A'}
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-start' }}>
              <button
                title="Edit"
                onClick={() => handleEditClick(credit)}
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
                <User size={16} color="#6b7280" />
              </button>
              <button
                title="Delete"
                onClick={() => {
                  if (window.confirm(`Are you sure you want to delete ${credit.facultyName}?`)) {
                    setCredits(prevCredits => prevCredits.filter(c => c.id !== credit.id));
                  }
                }}
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
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#fee2e2';
                  e.target.style.borderColor = '#ef4444';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = '#e5e7eb';
                }}
              >
                <FileText size={16} color="#ef4444" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Faculty Edit Form Modal */}
      {showEditForm && selectedFaculty && (
        <FacultyLeaveForm
          faculty={selectedFaculty}
          onClose={() => {
            setShowEditForm(false);
            setSelectedFaculty(null);
          }}
          onSave={(formData) => {
            // Update the faculty data in the credits array
            if (selectedFaculty.id) {
              // Update existing faculty
              setCredits(prevCredits => 
                prevCredits.map(credit => 
                  credit.id === selectedFaculty.id 
                    ? { 
                        ...credit, 
                        facultyName: formData.name,
                        position: formData.position,
                        serviceCreditEarned: formData.serviceCreditEarned,
                        leaveTakenUndertime: formData.leaveTakenUndertime,
                        balance: formData.balance,
                        asOf: formData.asOf,
                        reason: formData.remarks
                      }
                    : credit
                )
              );
            } else {
              // Add new faculty
              const newFaculty = {
                id: Math.max(...credits.map(c => c.id)) + 1,
                facultyName: formData.name,
                position: formData.position,
                serviceCreditEarned: formData.serviceCreditEarned,
                leaveTakenUndertime: formData.leaveTakenUndertime,
                balance: formData.balance,
                asOf: formData.asOf,
                reason: formData.remarks,
                department: 'BUCAL', // Default department
                employeeId: `T-${String(credits.length + 1).padStart(3, '0')}`,
                leaveType: 'General',
                totalDays: 15,
                used: 0,
                dateFrom: new Date().toLocaleDateString(),
                dateTo: new Date().toLocaleDateString(),
                status: 'Active'
              };
              setCredits(prevCredits => [...prevCredits, newFaculty]);
            }
          }}
        />
      )}

      {/* Add Faculty Form Modal */}
      {showAddForm && (
        <AddFacultyForm
          onClose={() => {
            setShowAddForm(false);
          }}
          onSave={(formData) => {
            // Add new faculty to the credits array
            const newFaculty = {
              id: Math.max(...credits.map(c => c.id)) + 1,
              facultyName: formData.facultyName,
              position: formData.position,
              department: formData.department,
              serviceCreditEarned: formData.serviceCreditEarned || '0',
              leaveTakenUndertime: formData.leaveTakenUndertime || '0',
              balance: 0,
              asOf: new Date().toISOString().split('T')[0],
              reason: formData.remarks,
              leaveType: 'General',
              status: 'Active',
              divisionOffice: formData.divisionOffice,
              firstDayService: formData.firstDayService
            };
            setCredits(prevCredits => [...prevCredits, newFaculty]);
          }}
        />
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <FilterModal
          onClose={() => {
            setShowFilterModal(false);
          }}
          onApply={(filters) => {
            // Filter logic is already applied in filteredCredits function
          }}
          onClear={() => {
            // Clear logic is already handled in FilterModal component
          }}
        />
      )}
    </div>
  );
};

export default AccuredLeave;