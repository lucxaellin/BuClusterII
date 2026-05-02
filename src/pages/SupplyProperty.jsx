import React, { useState, useEffect } from 'react';
import { Package, User, Building2, Briefcase, Calendar, Search, Filter, Plus, Edit2, Trash2, X, ChevronDown } from 'lucide-react';

const SupplyProperty = () => {
  // Add CSS for white calendar icons in dark mode
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      /* Light mode - black calendar icon */
      input[type="date"]::-webkit-calendar-picker-indicator {
        filter: none !important;
        cursor: pointer !important;
      }
      input[type="date"]::-moz-calendar-picker-indicator {
        filter: none !important;
        cursor: pointer !important;
      }
      
      /* Dark mode - white calendar icon */
      @media (prefers-color-scheme: dark) {
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1) !important;
          cursor: pointer !important;
        }
        input[type="date"]::-moz-calendar-picker-indicator {
          filter: invert(1) !important;
          cursor: pointer !important;
        }
      }
      
      /* Dark mode using data attribute or class */
      [data-theme="dark"] input[type="date"]::-webkit-calendar-picker-indicator,
      .dark input[type="date"]::-webkit-calendar-picker-indicator,
      body.dark input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1) !important;
        cursor: pointer !important;
      }
      
      [data-theme="dark"] input[type="date"]::-moz-calendar-picker-indicator,
      .dark input[type="date"]::-moz-calendar-picker-indicator,
      body.dark input[type="date"]::-moz-calendar-picker-indicator {
        filter: invert(1) !important;
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [facultyList, setFacultyList] = useState([
    {
      id: 1,
      facultyName: 'Dr. Maria Santos',
      department: 'BUCAL',
      position: 'Professor',
      items: [
        { id: 1, itemName: 'Laptop Dell Latitude', dateIssued: '2024-01-15', status: 'Active' },
        { id: 2, itemName: 'Office Chair Ergonomic', dateIssued: '2024-01-15', status: 'Active' },
        { id: 3, itemName: 'Projector', dateIssued: '2024-03-10', status: 'Active' }
      ]
    },
    {
      id: 2,
      facultyName: 'Prof. Juan Dela Cruz',
      department: 'BUCDM',
      position: 'Associate Professor',
      items: [
        { id: 4, itemName: 'Desktop Computer', dateIssued: '2024-02-01', status: 'Active' },
        { id: 5, itemName: 'Printer HP LaserJet', dateIssued: '2024-02-01', status: 'Active' }
      ]
    },
    {
      id: 3,
      facultyName: 'Dr. Elena Rodriguez',
      department: 'BUJMRIGD',
      position: 'Assistant Professor',
      items: [
        { id: 6, itemName: 'MacBook Pro', dateIssued: '2024-01-20', status: 'Active' },
        { id: 7, itemName: 'Wireless Mouse', dateIssued: '2024-01-20', status: 'Active' },
        { id: 8, itemName: 'Keyboard Mechanical', dateIssued: '2024-01-20', status: 'Active' },
        { id: 9, itemName: 'Webcam 4K', dateIssued: '2024-04-05', status: 'Active' }
      ]
    },
    {
      id: 4,
      facultyName: 'Prof. Michael Tan',
      department: 'BUGS',
      position: 'Instructor',
      items: [
        { id: 10, itemName: 'Tablet iPad Pro', dateIssued: '2024-03-01', status: 'Active' }
      ]
    },
    {
      id: 5,
      facultyName: 'Dr. Ana Reyes',
      department: 'BUCL',
      position: 'Professor',
      items: [
        { id: 11, itemName: 'Monitor LG 27"', dateIssued: '2024-01-10', status: 'Active' },
        { id: 12, itemName: 'Desk Lamp LED', dateIssued: '2024-01-10', status: 'Active' }
      ]
    },
    {
      id: 6,
      facultyName: 'Prof. Carlos Mendoza',
      department: 'BUOU',
      position: 'Associate Professor',
      items: [
        { id: 13, itemName: 'Laptop HP EliteBook', dateIssued: '2024-02-15', status: 'Active' },
        { id: 14, itemName: 'USB Hub 7-Port', dateIssued: '2024-02-15', status: 'Active' },
        { id: 15, itemName: 'External SSD 1TB', dateIssued: '2024-02-15', status: 'Active' }
      ]
    },
    {
      id: 7,
      facultyName: 'Dr. Patricia Gomez',
      department: 'BUCAL',
      position: 'Assistant Professor',
      items: [
        { id: 16, itemName: 'Document Scanner', dateIssued: '2024-03-20', status: 'Active' },
        { id: 17, itemName: 'Filing Cabinet', dateIssued: '2024-03-20', status: 'Active' }
      ]
    },
    {
      id: 8,
      facultyName: 'Prof. Roberto Santiago',
      department: 'BUGS',
      position: 'Instructor',
      items: [
        { id: 18, itemName: 'Whiteboard Mobile', dateIssued: '2024-01-25', status: 'Active' },
        { id: 19, itemName: 'Marker Set', dateIssued: '2024-01-25', status: 'Active' },
        { id: 20, itemName: 'Eraser Board', dateIssued: '2024-01-25', status: 'Active' }
      ]
    },
    {
      id: 9,
      facultyName: 'Dr. Liza Fernandez',
      department: 'BUCDM',
      position: 'Professor',
      items: [
        { id: 21, itemName: 'iPad Air', dateIssued: '2024-02-10', status: 'Active' },
        { id: 22, itemName: 'Apple Pencil', dateIssued: '2024-02-10', status: 'Active' },
        { id: 23, itemName: 'Keyboard Folio', dateIssued: '2024-02-10', status: 'Active' }
      ]
    },
    {
      id: 10,
      facultyName: 'Prof. Mark Villanueva',
      department: 'BUJMRIGD',
      position: 'Associate Professor',
      items: [
        { id: 24, itemName: 'Microphone USB', dateIssued: '2024-04-01', status: 'Active' },
        { id: 25, itemName: 'Headset Wireless', dateIssued: '2024-04-01', status: 'Active' }
      ]
    },
    {
      id: 11,
      facultyName: 'Dr. Sarah Lim',
      department: 'BUCL',
      position: 'Assistant Professor',
      items: [
        { id: 26, itemName: 'Laptop Lenovo ThinkPad', dateIssued: '2024-01-05', status: 'Active' },
        { id: 27, itemName: 'Docking Station', dateIssued: '2024-01-05', status: 'Active' },
        { id: 28, itemName: 'Monitor Stand', dateIssued: '2024-01-05', status: 'Active' }
      ]
    },
    {
      id: 12,
      facultyName: 'Prof. James Cruz',
      department: 'BUOU',
      position: 'Instructor',
      items: [
        { id: 29, itemName: 'Calculator Scientific', dateIssued: '2024-03-15', status: 'Active' },
        { id: 30, itemName: 'Ruler Set', dateIssued: '2024-03-15', status: 'Active' }
      ]
    },
    {
      id: 13,
      facultyName: 'Dr. Christine Lee',
      department: 'BUGS',
      position: 'Professor',
      items: [
        { id: 31, itemName: 'Smartboard Interactive', dateIssued: '2024-02-20', status: 'Active' },
        { id: 32, itemName: 'Projector Ceiling', dateIssued: '2024-02-20', status: 'Active' },
        { id: 33, itemName: 'Screen Motorized', dateIssued: '2024-02-20', status: 'Active' }
      ]
    },
    {
      id: 14,
      facultyName: 'Prof. Daniel Martinez',
      department: 'BUCAL',
      position: 'Associate Professor',
      items: [
        { id: 34, itemName: 'Camera DSLR', dateIssued: '2024-04-10', status: 'Active' },
        { id: 35, itemName: 'Tripod', dateIssued: '2024-04-10', status: 'Active' },
        { id: 36, itemName: 'Lighting Kit', dateIssued: '2024-04-10', status: 'Active' }
      ]
    },
    {
      id: 15,
      facultyName: 'Dr. Rachel Kim',
      department: 'BUCDM',
      position: 'Assistant Professor',
      items: [
        { id: 37, itemName: 'Table Wacom', dateIssued: '2024-01-30', status: 'Active' },
        { id: 38, itemName: 'Stylus Pen', dateIssued: '2024-01-30', status: 'Active' }
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const departments = ['All Departments', 'BUGS', 'BUCAL', 'BUCL', 'BUJMRIGD', 'BUOU', 'BUCDM'];

  const handleAddFaculty = (formData) => {
    const newFaculty = {
      id: Math.max(...facultyList.map(f => f.id), 0) + 1,
      ...formData,
      items: formData.items || []
    };
    setFacultyList([...facultyList, newFaculty]);
    setShowAddForm(false);
  };

  const handleEditFaculty = (formData) => {
    setFacultyList(facultyList.map(f => 
      f.id === selectedFaculty.id ? { ...f, ...formData } : f
    ));
    setShowEditForm(false);
    setSelectedFaculty(null);
  };

  const handleDeleteFaculty = () => {
    setFacultyList(facultyList.filter(f => f.id !== selectedFaculty.id));
    setShowDeleteConfirm(false);
    setSelectedFaculty(null);
  };

  const filteredFaculty = facultyList.filter(faculty => {
    const matchesDepartment = selectedDepartment === 'All Departments' || faculty.department === selectedDepartment;
    const matchesSearch = faculty.facultyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.items.some(item => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDepartment && matchesSearch;
  });

  const AddFacultyForm = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
      facultyName: '',
      department: 'BUGS',
      position: '',
      items: []
    });
    const [currentItem, setCurrentItem] = useState({ itemName: '', dateIssued: '' });

    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleAddItem = () => {
      if (currentItem.itemName && currentItem.dateIssued) {
        setFormData(prev => ({
          ...prev,
          items: [...prev.items, { 
            id: Date.now(), 
            itemName: currentItem.itemName, 
            dateIssued: currentItem.dateIssued,
            status: 'Active'
          }]
        }));
        setCurrentItem({ itemName: '', dateIssued: '' });
      }
    };

    const handleRemoveItem = (itemId) => {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter(item => item.id !== itemId)
      }));
    };

    const handleSave = () => {
      if (!formData.facultyName.trim() || !formData.position.trim()) {
        alert('Please fill in Faculty Name and Position');
        return;
      }
      onSave(formData);
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
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '12px',
          padding: '24px',
          width: '90%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)' }}>
              Add New Faculty
            </h2>
            <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--text-muted)' }}>
              ×
            </button>
          </div>

          <div style={{ backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px' }}>
            {/* Faculty Info */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Faculty Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.facultyName}
                onChange={(e) => handleInputChange('facultyName', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                                      boxSizing: 'border-box',
                  backgroundColor: 'var(--input-bg)',
                  color: 'var(--text-primary)'
                }}
                placeholder="Enter faculty name"
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                                      boxSizing: 'border-box',
                  backgroundColor: 'var(--input-bg)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)'
                }}
              >
                {departments.filter(d => d !== 'All Departments').map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Position <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                                      boxSizing: 'border-box',
                  backgroundColor: 'var(--input-bg)',
                  color: 'var(--text-primary)'
                }}
                placeholder="e.g., Professor, Instructor"
              />
            </div>

            {/* Add Items Section */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Add Items
              </label>
              
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <input
                  type="text"
                  value={currentItem.itemName}
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, itemName: e.target.value }))}
                  placeholder="Item name"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                                        backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                    '::-webkit-calendar-picker-indicator': {
                      filter: 'invert(100%)',
                      cursor: 'pointer'
                    },
                    '::-moz-calendar-picker-indicator': {
                      filter: 'invert(100%)',
                      cursor: 'pointer'
                    }
                  }}
                />
                <input
                  type="date"
                  value={currentItem.dateIssued}
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, dateIssued: e.target.value }))}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                    '::-webkit-calendar-picker-indicator': {
                      filter: 'invert(100%)',
                      cursor: 'pointer'
                    },
                    '::-moz-calendar-picker-indicator': {
                      filter: 'invert(100%)',
                      cursor: 'pointer'
                    }
                  }}
                />
                <button
                  onClick={handleAddItem}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#3b74f0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Add
                </button>
              </div>

              {/* Items List */}
              {formData.items.length > 0 && (
                <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '12px' }}>
                  {formData.items.map((item) => (
                    <div key={item.id} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: '1px solid var(--border-color)'
                    }}>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '500' }}>{item.itemName}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Issued: {item.dateIssued}</div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ef4444',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button
              onClick={onClose}
              style={{
                padding: '12px 24px',
                backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              style={{
                padding: '12px 24px',
                backgroundColor: '#3b74f0',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              Save Faculty
            </button>
          </div>
        </div>
      </div>
    );
  };

  const EditFacultyForm = ({ faculty, onClose, onSave }) => {
    const [formData, setFormData] = useState({
      facultyName: faculty.facultyName,
      department: faculty.department,
      position: faculty.position,
      items: [...faculty.items]
    });
    const [currentItem, setCurrentItem] = useState({ itemName: '', dateIssued: '' });

    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleAddItem = () => {
      if (currentItem.itemName && currentItem.dateIssued) {
        setFormData(prev => ({
          ...prev,
          items: [...prev.items, { 
            id: Date.now(), 
            itemName: currentItem.itemName, 
            dateIssued: currentItem.dateIssued,
            status: 'Active'
          }]
        }));
        setCurrentItem({ itemName: '', dateIssued: '' });
      }
    };

    const handleRemoveItem = (itemId) => {
      setFormData(prev => ({
        ...prev,
        items: prev.items.filter(item => item.id !== itemId)
      }));
    };

    const handleSave = () => {
      if (!formData.facultyName.trim() || !formData.position.trim()) {
        alert('Please fill in Faculty Name and Position');
        return;
      }
      onSave(formData);
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
          backgroundColor: 'var(--bg-surface)',
          borderRadius: '12px',
          padding: '24px',
          width: '90%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)' }}>
              Edit Faculty
            </h2>
            <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--text-muted)' }}>
              ×
            </button>
          </div>

          <div style={{ backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '20px' }}>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Faculty Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.facultyName}
                onChange={(e) => handleInputChange('facultyName', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                                      boxSizing: 'border-box',
                  backgroundColor: 'var(--input-bg)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Department
              </label>
              <select
                value={formData.department}
                onChange={(e) => handleInputChange('department', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                                      boxSizing: 'border-box',
                  backgroundColor: 'var(--input-bg)',
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)'
                }}
              >
                {departments.filter(d => d !== 'All Departments').map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '6px' }}>
                Position <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                                      boxSizing: 'border-box',
                  backgroundColor: 'var(--input-bg)',
                  color: 'var(--text-primary)'
                }}
              />
            </div>

            {/* Edit Items Section */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                Manage Items
              </label>
              
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                <input
                  type="text"
                  value={currentItem.itemName}
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, itemName: e.target.value }))}
                  placeholder="Add new item"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                    '::-webkit-calendar-picker-indicator': {
                      filter: 'invert(100%)',
                      cursor: 'pointer'
                    },
                    '::-moz-calendar-picker-indicator': {
                      filter: 'invert(100%)',
                      cursor: 'pointer'
                    }
                  }}
                />
                <input
                  type="date"
                  value={currentItem.dateIssued}
                  onChange={(e) => setCurrentItem(prev => ({ ...prev, dateIssued: e.target.value }))}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid var(--border-color)',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none',
                    backgroundColor: 'var(--input-bg)',
                    color: 'var(--text-primary)',
                    '::-webkit-calendar-picker-indicator': {
                      filter: 'invert(100%)',
                      cursor: 'pointer'
                    },
                    '::-moz-calendar-picker-indicator': {
                      filter: 'invert(100%)',
                      cursor: 'pointer'
                    }
                  }}
                />
                <button
                  onClick={handleAddItem}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#3b74f0',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  Add
                </button>
              </div>

              {/* Items List */}
              {formData.items.length > 0 && (
                <div style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '12px' }}>
                  {formData.items.map((item) => (
                    <div key={item.id} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      padding: '8px 0',
                      borderBottom: '1px solid var(--border-color)'
                    }}>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '500' }}>{item.itemName}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Issued: {item.dateIssued}</div>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#ef4444',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button
              onClick={onClose}
              style={{
                padding: '12px 24px',
                backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              style={{
                padding: '12px 24px',
                backgroundColor: '#3b74f0',
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
        </div>
      </div>
    );
  };

  const DeleteConfirmModal = ({ faculty, onClose, onConfirm }) => (
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
        maxWidth: '400px',
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'var(--icon-bg-amber)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px'
          }}>
            <Trash2 size={24} color="#f59e0b" />
          </div>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }}>
            Delete Faculty?
          </h3>
          <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: 'var(--text-muted)' }}>
            Are you sure you want to delete <strong>{faculty.facultyName}</strong>? This action cannot be undone.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)',
              border: '1px solid #4b5563',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: '#ef4444',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#ffffff',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

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
          Supply and Property
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-muted)',
          margin: '8px 0 0 0',
          fontFamily: "'Inter', sans-serif"
        }}>
          Manage property and equipment lent to faculty members
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
              backgroundColor: 'var(--icon-bg-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User size={20} color="#3b74f0" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)' }}>
                Total Faculty
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)' }}>
                {facultyList.length}
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
              backgroundColor: 'var(--icon-bg-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Package size={20} color="#10b981" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)' }}>
                Total Items Lent
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)' }}>
                {facultyList.reduce((sum, f) => sum + f.items.length, 0)}
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
              backgroundColor: 'var(--icon-bg-amber)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Building2 size={20} color="#f59e0b" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)' }}>
                Departments
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: 'var(--text-primary)' }}>
                {new Set(facultyList.map(f => f.department)).size}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div style={{ flex: 1, position: 'relative', maxWidth: '1000px' }}>
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
            <Search size={20} color="var(--text-muted)" />
          </button>
          <input
            type="text"
            placeholder="Search faculty or items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px 12px 44px',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
              boxSizing: 'border-box',
              backgroundColor: 'var(--input-bg)',
              color: 'var(--text-primary)'
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
              backgroundColor: 'var(--bg-surface2)',
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
            <ChevronDown size={16} color="var(--text-muted)" />
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
              maxHeight: '500px',
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
                    backgroundColor: selectedDepartment === dept ? 'var(--bg-hover)' : 'var(--bg-surface)',
                    color: selectedDepartment === dept ? 'var(--text-primary)' : 'var(--text-secondary)',
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
            backgroundColor: '#3b74f0',
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

      {/* Faculty Table */}
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
        {/* Fixed Table Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1.5fr 2fr 120px',
          padding: '16px 20px',
          backgroundColor: 'var(--bg-surface2)',
          borderBottom: '1px solid var(--border-color)',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          fontFamily: "'Inter', sans-serif",
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div>Faculty Name</div>
          <div>Department</div>
          <div>Position</div>
          <div>Items Lent</div>
          <div>Actions</div>
        </div>

        {/* Scrollable Table Body */}
        <div style={{
          overflowY: 'auto',
          flex: 1
        }}>
        {filteredFaculty.map((faculty) => (
          <div key={faculty.id} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1.5fr 2fr 120px',
            padding: '16px 20px',
            borderBottom:'1px solid var(--border-color)',
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
              <User size={18} color="var(--text-muted)" />
              {faculty.facultyName}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-primary)' }}>
              {faculty.department}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-primary)' }}>
              {faculty.position}
            </div>
            <div>
              {faculty.items.length === 0 ? (
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  No items assigned
                </span>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {faculty.items.map((item, index) => (
                    <div key={item.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      color: 'var(--text-primary)'
                    }}>
                      <Package size={12} color="var(--text-muted)" />
                      <span>{item.itemName}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        ({item.dateIssued})
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
              <button
                onClick={() => {
                  setSelectedFaculty(faculty);
                  setShowEditForm(true);
                }}
                style={{
                  padding: '6px',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  color: 'var(--text-primary)'
                }}
                title="Edit"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  setSelectedFaculty(faculty);
                  setShowDeleteConfirm(true);
                }}
                style={{
                  padding: '6px',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--border-color)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  color: 'var(--text-primary)'
                }}
                title="Delete"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredFaculty.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#9ca3af'
        }}>
          <Package size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
          <p style={{ fontSize: '16px', margin: 0 }}>No faculty found matching your search.</p>
        </div>
      )}

      {/* Modals */}
      {showAddForm && (
        <AddFacultyForm
          onClose={() => setShowAddForm(false)}
          onSave={handleAddFaculty}
        />
      )}

      {showEditForm && selectedFaculty && (
        <EditFacultyForm
          faculty={selectedFaculty}
          onClose={() => {
            setShowEditForm(false);
            setSelectedFaculty(null);
          }}
          onSave={handleEditFaculty}
        />
      )}

      {showDeleteConfirm && selectedFaculty && (
        <DeleteConfirmModal
          faculty={selectedFaculty}
          onClose={() => {
            setShowDeleteConfirm(false);
            setSelectedFaculty(null);
          }}
          onConfirm={handleDeleteFaculty}
        />
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

export default SupplyProperty;
