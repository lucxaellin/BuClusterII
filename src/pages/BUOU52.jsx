import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, Eye, Edit2, Trash2, X, FileText, ChevronLeft, ChevronRight, Calendar , Plus, Edit} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BUOU52 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  // Filter modal states
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterMonth, setFilterMonth] = useState('');
  const [filterDay, setFilterDay] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [selectedOfficers, setSelectedOfficers] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  // File upload modal states
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadRecipient, setUploadRecipient] = useState('');

  // Delete confirmation modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [fileToDelete, setFileToDelete] = useState(null);

  const [files, setFiles] = useState([
    {
      id: 1,
      date: '02/03/2025',
      pageNumber: '1-5',
      title: 'Elaine Mae Bertiz',
      particulars: 'The table now efficiently handles long particulars without disrupting the layout, and users can easily expand to read full descriptions when needed.',
      admin: 'Mitch',
      dean: 'Dr. Smith',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Chabs'
    },
    {
      id: 2,
      date: '02/03/2025',
      pageNumber: '1-3',
      title: 'Document Processing',
      particulars: 'This document requires immediate attention from the administrative department for proper processing and verification.',
      admin: 'Mau',
      dean: '',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 3,
      date: '02/03/2025',
      pageNumber: '2-8',
      title: 'Budget Approval',
      particulars: 'Budget proposal for the upcoming fiscal year needs to be reviewed and approved by the finance committee before implementation.',
      admin: 'Jing',
      dean: 'Dr. Johnson',
      bac: '',
      budget: 'Malyn',
      accounting: 'Jay'
    },
    {
      id: 4,
      date: '02/03/2025',
      pageNumber: '1-2',
      title: 'Academic Records',
      particulars: 'Student academic records need to be updated with the latest semester grades and attendance information for the registrar office.',
      admin: 'Ruby',
      dean: 'Dr. Williams',
      bac: 'Jhen',
      budget: '',
      accounting: 'Eliza'
    },
    {
      id: 5,
      date: '02/03/2025',
      pageNumber: '3-7',
      title: 'Research Proposal',
      particulars: 'New research proposal submission requires departmental review and approval before forwarding to the research committee for final evaluation.',
      admin: 'Mitch',
      dean: '',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 6,
      date: '02/03/2025',
      pageNumber: '1-4',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mau',
      dean: 'Dr. Brown',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Jenny'
    },
    {
      id: 7,
      date: '02/03/2025',
      pageNumber: '2-6',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Jing',
      dean: 'Dr. Davis',
      bac: '',
      budget: 'Malyn',
      accounting: 'Eliza'
    },
    {
      id: 8,
      date: '02/03/2025',
      pageNumber: '1-3',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Ruby',
      dean: '',
      bac: 'Jhen',
      budget: '',
      accounting: 'Karen'
    },
    {
      id: 9,
      date: '02/03/2025',
      pageNumber: '4-9',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mitch',
      dean: 'Dr. Miller',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 10,
      date: '02/03/2025',
      pageNumber: '1-2',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mau',
      dean: 'Dr. Wilson',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Sarah'
    },
    {
      id: 11,
      date: '02/03/2025',
      pageNumber: '3-5',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Jing',
      dean: '',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Saroh'
    },
    {
      id: 12,
      date: '02/03/2025',
      pageNumber: '1-4',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Ruby',
      dean: 'Dr. Moore',
      bac: '',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 13,
      date: '02/03/2025',
      pageNumber: '2-7',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mitch',
      dean: 'Dr. Taylor',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Chabs'
    },
    {
      id: 14,
      date: '02/03/2025',
      pageNumber: '1-3',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mau',
      dean: '',
      bac: 'Jhen',
      budget: '',
      accounting: 'Jay'
    },
    {
      id: 15,
      date: '02/03/2025',
      pageNumber: '4-8',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Jing',
      dean: 'Dr. Anderson',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 16,
      date: '02/03/2025',
      pageNumber: '1-2',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Ruby',
      dean: 'Dr. Thomas',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Eliza'
    },
    {
      id: 17,
      date: '02/03/2025',
      pageNumber: '3-6',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mitch',
      dean: '',
      bac: '',
      budget: 'Malyn',
      accounting: 'Jenny'
    },
    {
      id: 18,
      date: '02/03/2025',
      pageNumber: '1-5',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mau',
      dean: 'Dr. Jackson',
      bac: 'Jhen',
      budget: '',
      accounting: ''
    },
    {
      id: 19,
      date: '02/03/2025',
      pageNumber: '2-4',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Jing',
      dean: 'Dr. White',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Karen'
    },
    {
      id: 20,
      date: '02/03/2025',
      pageNumber: '1-3',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Ruby',
      dean: '',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Sarah'
    },
    {
      id: 21,
      date: '02/03/2025',
      pageNumber: '5-9',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mitch',
      dean: 'Dr. Harris',
      bac: '',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 22,
      date: '02/03/2025',
      pageNumber: '1-2',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mau',
      dean: 'Dr. Martin',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Saroh'
    },
    {
      id: 23,
      date: '02/03/2025',
      pageNumber: '3-7',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Jing',
      dean: '',
      bac: 'Jhen',
      budget: '',
      accounting: 'Chabs'
    },
    {
      id: 24,
      date: '02/03/2025',
      pageNumber: '1-4',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Ruby',
      dean: 'Dr. Thompson',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 25,
      date: '02/03/2025',
      pageNumber: '2-6',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mitch',
      dean: 'Dr. Garcia',
      bac: '',
      budget: 'Malyn',
      accounting: 'Jay'
    },
    {
      id: 26,
      date: '02/03/2025',
      pageNumber: '1-3',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mau',
      dean: '',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Eliza'
    },
    {
      id: 27,
      date: '02/03/2025',
      pageNumber: '4-8',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Jing',
      dean: 'Dr. Martinez',
      bac: 'Jhen',
      budget: '',
      accounting: ''
    },
    {
      id: 28,
      date: '02/03/2025',
      pageNumber: '1-2',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Ruby',
      dean: 'Dr. Robinson',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Jenny'
    },
    {
      id: 29,
      date: '02/03/2025',
      pageNumber: '3-5',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mitch',
      dean: '',
      bac: '',
      budget: 'Malyn',
      accounting: 'Karen'
    },
    {
      id: 30,
      date: '02/03/2025',
      pageNumber: '1-4',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mau',
      dean: 'Dr. Clark',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 31,
      date: '02/03/2025',
      pageNumber: '2-7',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Jing',
      dean: 'Dr. Rodriguez',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Sarah'
    },
    {
      id: 32,
      date: '02/03/2025',
      pageNumber: '1-3',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Ruby',
      dean: '',
      bac: 'Jhen',
      budget: '',
      accounting: 'Saroh'
    },
    {
      id: 33,
      date: '02/03/2025',
      pageNumber: '5-9',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mitch',
      dean: 'Dr. Lewis',
      bac: '',
      budget: 'Malyn',
      accounting: ''
    },
    {
      id: 34,
      date: '02/03/2025',
      pageNumber: '1-2',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Mau',
      dean: 'Dr. Lee',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Chabs'
    },
    {
      id: 35,
      date: '02/03/2025',
      pageNumber: '3-6',
      title: 'Incoming Document',
      particulars: 'Incoming Document',
      admin: 'Jing',
      dean: '',
      bac: 'Jhen',
      budget: 'Malyn',
      accounting: 'Jay'
    }
  ]);

  // Department recipients
  const adminRecipients = ['Mitch', 'Mau', 'Jing', 'Ruby'];
  const bacRecipients = ['Jhen', 'Marj'];
  const budgetRecipients = ['Malyn', 'Cindy'];
  const accountingRecipients = ['Chabs', 'Jay', 'Eliza', 'Jenny', 'Karen', 'Sarah', 'Saroh'];

  // Pagination logic with search filtering
  const filteredFiles = files.filter(file => {
    // Search term filtering (title search)
    const matchesSearch = (file.title || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    // Department filtering
    let matchesDepartment = true;
    if (selectedDepartments.length > 0) {
      matchesDepartment = selectedDepartments.some(dept => {
        const deptValue = (file[dept.toLowerCase()] || '').toLowerCase();
        return deptValue !== '';
      });
    }
    
    // Officer filtering (multi-select across all officer fields - ALL must match)
    let matchesOfficer = true;
    if (selectedOfficers.length > 0) {
      matchesOfficer = selectedOfficers.every(officer => {
        const searchOfficer = officer.replace('Dean: ', '').toLowerCase();
        return (
          (file.admin || '').toLowerCase() === searchOfficer ||
          (file.dean || '').toLowerCase().includes(searchOfficer) ||
          (file.bac || '').toLowerCase() === searchOfficer ||
          (file.budget || '').toLowerCase() === searchOfficer ||
          (file.accounting || '').toLowerCase() === searchOfficer
        );
      });
    }
    
    // Date filtering
    let matchesDate = true;
    if (filterMonth || filterDay || filterYear) {
      const fileDate = file.date || '';
      const [fileMonth, fileDay, fileYear] = fileDate.split('/');
      
      if (filterMonth && fileMonth !== filterMonth) matchesDate = false;
      if (filterDay && fileDay !== filterDay) matchesDate = false;
      if (filterYear && fileYear !== filterYear) matchesDate = false;
    }
    
    return matchesSearch && matchesDepartment && matchesOfficer && matchesDate;
  });
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredFiles.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(filteredFiles.length / rowsPerPage);

  // Reset to page 1 when search or filter terms change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedOfficers, selectedDepartments, filterMonth, filterDay, filterYear]);

  // Handler functions
  const handleViewFile = (file) => {
    // In a real app, this would open the PDF file
    // For demo, we'll open in a new window with a placeholder
    window.open(`data:application/pdf;base64,placeholder`, '_blank');
  };

  const handleDownloadFile = (file) => {
    // In a real app, this would download the actual file
    // For demo, we'll create a dummy download
    const element = document.createElement('a');
    element.href = `data:application/pdf;base64,placeholder`;
    element.download = file.name;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleDeleteClick = (file) => {
    setFileToDelete(file);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (fileToDelete) {
      setFiles(files.filter(file => file.id !== fileToDelete.id));
      setShowDeleteModal(false);
      setFileToDelete(null);
    }
  };

  // Calculate page range to display
  const getPageRange = () => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    return { startPage, endPage };
  };

  const { startPage, endPage } = getPageRange();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/Incoming') {
      console.log('Incoming page is active - sidebar should show Incoming as active');
    }
  }, [location.pathname]);
 
  //MODAL
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPageNumber, setSelectedPageNumber] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedAdmin, setSelectedAdmin] = useState('');
  const [selectedDean, setSelectedDean] = useState('');
  const [selectedBac, setSelectedBac] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedAccounting, setSelectedAccounting] = useState('');
  
  // Date picker state
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [pickerMonth, setPickerMonth] = useState(new Date().getMonth());
  const [pickerYear, setPickerYear] = useState(new Date().getFullYear());

  // State for expanded rows
  const [expandedRows, setExpandedRows] = useState(new Set());

  // Utility functions
  const validateAndFormatDate = (dateString) => {
    if (!dateString) return '';
    
    // Remove any non-digit characters except slash
    const cleanDate = dateString.replace(/[^0-9/]/g, '');
    
    // Check if it matches MM/DD/YYYY format
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    
    if (dateRegex.test(cleanDate)) {
      return cleanDate;
    }
    
    // Try to auto-format if user enters digits only
    if (/^\d{8}$/.test(cleanDate)) {
      const month = cleanDate.substring(0, 2);
      const day = cleanDate.substring(2, 4);
      const year = cleanDate.substring(4, 8);
      return `${month}/${day}/${year}`;
    }
    
    return dateString; // Return original if invalid format
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return validateAndFormatDate(dateString);
  };

  const displayDate = (dateString) => {
    if (!dateString) return '';
    const formatted = validateAndFormatDate(dateString);
    return formatted || dateString;
  };

  const handleDateChange = (e) => {
    let value = e.target.value;
    
    // Only allow digits and slashes
    value = value.replace(/[^0-9/]/g, '');
    
    // Auto-add slashes as user types
    if (value.length === 2 && !value.includes('/')) {
      value += '/';
    } else if (value.length === 5 && value.split('/').length === 2) {
      value += '/';
    }
    
    // Limit to MM/DD/YYYY format (10 characters)
    if (value.length <= 10) {
      setSelectedDate(value);
    }
  };

  // Date picker functions
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day) => {
    const month = String(pickerMonth + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const formattedDate = `${month}/${dayStr}/${pickerYear}`;
    setSelectedDate(formattedDate);
    setShowDatePicker(false);
  };

  const handleMonthChange = (direction) => {
    if (direction === 'prev') {
      if (pickerMonth === 0) {
        setPickerMonth(11);
        setPickerYear(pickerYear - 1);
      } else {
        setPickerMonth(pickerMonth - 1);
      }
    } else {
      if (pickerMonth === 11) {
        setPickerMonth(0);
        setPickerYear(pickerYear + 1);
      } else {
        setPickerMonth(pickerMonth + 1);
      }
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(pickerMonth, pickerYear);
    const firstDay = getFirstDayOfMonth(pickerMonth, pickerYear);
    const days = [];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} style={{ width: '30px', height: '30px' }}></div>);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate === `${String(pickerMonth + 1).padStart(2, '0')}/${String(day).padStart(2, '0')}/${pickerYear}`;
      days.push(
        <div
          key={day}
          onClick={() => handleDateSelect(day)}
          style={{
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            borderRadius: '4px',
            backgroundColor: isSelected ? '#0074AD' : 'transparent',
            color: isSelected ? 'white' : '#374151',
            fontSize: '14px',
            border: isSelected ? 'none' : '1px solid #e5e7eb',
            '&:hover': {
              backgroundColor: isSelected ? '#0056b3' : '#f3f4f6'
            }
          }}
        >
          {day}
        </div>
      );
    }
    
    return (
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid #9ca3af',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        marginTop: '4px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <button
            onClick={() => handleMonthChange('prev')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--text-secondary)'
          }}>
            {monthNames[pickerMonth]} {pickerYear}
          </div>
          <button
            onClick={() => handleMonthChange('next')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
        
        {/* Days of week */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '2px',
          marginBottom: '8px'
        }}>
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day} style={{
              fontSize: '12px',
              fontWeight: '600',
              color: 'var(--text-secondary)',
              textAlign: 'center'
            }}>
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '2px'
        }}>
          {days}
        </div>
      </div>
    );
  };

  const truncateText = (text, maxLength = 50) => {
    if (!text || text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const toggleRowExpansion = (fileId) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(fileId)) {
        newSet.delete(fileId);
      } else {
        newSet.add(fileId);
      }
      return newSet;
    });
  };

  const handleViewClick = (file) => {
    setSelectedFile(file);
    setSelectedDate(displayDate(file.date || ''));
    setSelectedPageNumber(file.pageNumber || '');
    setSelectedTitle(file.title || '');
    setFileName(file.particulars || '');
    setSelectedAdmin(file.admin || '');
    setSelectedDean(file.dean || '');
    setSelectedBac(file.bac || '');
    setSelectedBudget(file.budget || '');
    setSelectedAccounting(file.accounting || '');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
    setSelectedDate('');
    setSelectedPageNumber('');
    setSelectedTitle('');
    setFileName('');
    setSelectedAdmin('');
    setSelectedDean('');
    setSelectedBac('');
    setSelectedBudget('');
    setSelectedAccounting('');
  };

  const handleSaveChanges = () => {
    if (selectedFile) {
      // Validate and format the date before saving
      const formattedDate = validateAndFormatDate(selectedDate);
      
      // Update the file in the files array
      setFiles(prevFiles => 
        prevFiles.map(file => 
          file.id === selectedFile.id 
            ? { 
                ...file, 
                date: formattedDate !== undefined ? formattedDate : file.date,
                pageNumber: selectedPageNumber !== undefined ? selectedPageNumber : file.pageNumber,
                title: selectedTitle !== undefined ? selectedTitle : file.title,
                particulars: fileName !== undefined ? fileName : file.particulars,
                admin: selectedAdmin !== undefined ? selectedAdmin : file.admin,
                dean: selectedDean !== undefined ? selectedDean : file.dean,
                bac: selectedBac !== undefined ? selectedBac : file.bac,
                budget: selectedBudget !== undefined ? selectedBudget : file.budget,
                accounting: selectedAccounting !== undefined ? selectedAccounting : file.accounting
              }
            : file
        )
      );
      
      console.log('File updated:', {
        id: selectedFile.id,
        date: formattedDate,
        pageNumber: selectedPageNumber,
        title: selectedTitle,
        particulars: fileName,
        admin: selectedAdmin,
        dean: selectedDean,
        bac: selectedBac,
        budget: selectedBudget,
        accounting: selectedAccounting
      });
    }
    
    handleCloseModal();
  };

  return (
    <div style={{ 
      fontFamily: "'Inter', sans-serif", 
      backgroundColor: 'var(--bg-page)',
      height: 'calc(100vh - 48px)', // Account for padding
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Header - Fixed */}
      <div style={{ marginBottom: '20px', flexShrink: 0 }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '600', 
          color: 'var(--text-primary)', 
          margin: 0,
          fontFamily: "'Public Sans', sans-serif"
        }}>
          BU OPEN UNIVERSITY BU-LB-CLUSTER II-52
        </h1>
        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          margin: '8px 2px 0',
          fontFamily: "'Inter', sans-serif",
          fontWeight: '400'
        }}>
          Bicol University Cluster II Administrative Office
        </p>
      </div>

      {/* Search and Filter Section - Fixed */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '24px',
        gap: '16px',
        flexShrink: 0
      }}>
        {/* Search Bar */}
        <div style={{ 
          position: 'relative', 
          flex: 1,
          maxWidth: '400px'
        }}>
          <button
            onClick={() => console.log('Search clicked')}
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <Search size={20} color="var(--text-muted)" />
          </button>
          <input
type="text"
            placeholder="Search File"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '185%',
              display: 'flex',
              padding: '12px 16px 12px 44px',
              border: '1px solid #9ca3af',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: "'Inter', sans-serif",
              outline: 'none',
              boxSizing: 'border-box',
              backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
              color: 'var(--text-primary)'
            }}
          />
        </div>

        {/* Filter and Add Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={() => setShowFilterModal(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
              color: 'var(--text-primary)',
              color: 'var(--text-secondary)',
              border: '1px solid #9ca3af',
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
            onClick={() => setShowUploadModal(true)}
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
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              transition: 'background-color 0.2s'
            }}>
            <Plus size={20} />
            Add New Record
          </button>
        </div>
      </div>

      {/* Files Table - Scrollable Rows Only */}
      <div style={{
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: '12px',
        border: '1px solid #9ca3af',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0 // Important for flex child to shrink properly
      }}>
        {/* Table Header - Fixed */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '100px 50px 2fr 1fr 1fr 1fr 1fr 1fr 100px',
          padding: '16px 20px',
          backgroundColor: 'var(--bg-surface2)',
          borderBottom: '1px solid var(--border-color)',
          fontSize: '12px',
          fontWeight: '600',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          fontFamily: "'Inter', sans-serif",
          flexShrink: 0
        }}>
          <div style={{ textAlign: 'left' }}>DATE</div>
          <div style={{ textAlign: 'left' }}>PN</div>
          <div style={{ textAlign: 'left' }}>PARTICULARS</div>
          <div style={{ textAlign: 'left' }}>ADMIN</div>
          <div style={{ textAlign: 'left' }}>DEAN</div>
          <div style={{ textAlign: 'left' }}>BAC</div>
          <div style={{ textAlign: 'left' }}>BUDGET</div>
          <div style={{ textAlign: 'left' }}>ACCOUNTING</div>
          <div style={{ textAlign: 'left' }}>ACTIONS</div>
        </div>

        {/* File Rows - Paginated */}
        <div style={{ 
          flex: 1, 
          overflow: 'auto',
          minHeight: 0
        }}>
          {currentRows.map((file) => (
            <div key={file.id} style={{
              display: 'grid',
              gridTemplateColumns: '100px 50px 2fr 1fr 1fr 1fr 1fr 1fr 85px',
              padding: expandedRows.has(file.id) ? '20px' : '16px 20px',
              borderBottom: '1px solid var(--border-color)',
              alignItems: expandedRows.has(file.id) ? 'start' : 'center',
              backgroundColor: selectedFile && selectedFile.id === file.id ? 'var(--bg-hover)' : 'var(--bg-surface)',
              transition: 'all 0.2s',
              cursor: 'pointer',
              minHeight: expandedRows.has(file.id) ? 'auto' : '60px'
            }}>

              {/* Date */}
              <div style={{ fontSize: '14px', color: file.date ? 'white' : '#d1d5db', textAlign: 'left' }}>
                {displayDate(file.date)}
              </div>

              {/* Page Number */}
              <div style={{ fontSize: '14px', color: file.pageNumber ? 'white' : '#d1d5db', textAlign: 'left' }}>
                {file.pageNumber}
              </div>

              {/* Particulars */}
              <div style={{ 
                fontSize: '14px', 
                color: 'var(--text-primary)', 
                fontWeight: '500',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                cursor: file.particulars ? 'pointer' : 'default',
                textAlign: 'left'
              }}
              onClick={() => file.particulars && !expandedRows.has(file.id) && toggleRowExpansion(file.id)}>
                {/* Title */}
                <div style={{ fontWeight: '600' }}>
                  {file.title || '-'}
                </div>
                
                {/* Expandable particulars */}
                {file.particulars && (
                  <div>
                    {expandedRows.has(file.id) ? (
                      <div>
                        <div style={{ 
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-word',
                          lineHeight: '1.5',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          marginBottom: '8px',
                          textAlign: 'justify',
                          textJustify: 'inter-word',
                          maxWidth: '175px',  // or whatever width works
                          overflow: 'hidden'
                        }}>
                          {file.particulars}
                        </div>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleRowExpansion(file.id);
                          }}
                          style={{
                            color: '#3b74f0',
                            fontSize: '12px',
                            cursor: 'pointer',
                            textDecoration: 'underline'
                          }}>
                          see less
                        </span>
                      </div>
                    ) : (
                      <div>
                        <span style={{ 
                          color: '#3b74f0',
                          fontSize: '12px',
                          cursor: 'pointer',
                          textDecoration: 'underline'
                        }}>
                          view full particulars
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Admin */}
              <div style={{ 
                fontSize: '14px', 
                color: file.admin ? 'white' : '#d1d5db',
                fontWeight: file.admin ? '500' : '400',
                textAlign: 'left'
              }}>
                {file.admin || '-'}
              </div>

              {/* Dean */}
              <div style={{ 
                fontSize: '14px', 
                color: file.dean ? 'white' : '#d1d5db',
                fontWeight: file.dean ? '500' : '400',
                textAlign: 'left'
              }}>
                {file.dean || '-'}
              </div>

              {/* BAC */}
              <div style={{ 
                fontSize: '14px', 
                color: file.bac ? 'white' : '#d1d5db',
                fontWeight: file.bac ? '500' : '400',
                textAlign: 'left'
              }}>
                {file.bac || '-'}
              </div>

              {/* Budget */}
              <div style={{ 
                fontSize: '14px', 
                color: file.budget ? 'white' : '#d1d5db',
                fontWeight: file.budget ? '500' : '400',
                textAlign: 'left'
              }}>
                {file.budget || '-'}
              </div>

              {/* Accounting */}
              <div style={{ 
                fontSize: '14px', 
                color: file.accounting ? 'white' : '#d1d5db',
                fontWeight: file.accounting ? '500' : '400',
                textAlign: 'left'
              }}>
                {file.accounting || '-'}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '2px', justifyContent: 'flex-start', textAlign: 'left' }}>

                <button
                  onClick={() => handleViewClick(file)}
                  title="Edit"
                  style={{
                    padding: '6px',
                    backgroundColor: 'transparent',
                    border: '1px solid #9ca3af',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    color: 'white'
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDeleteClick(file)}
                  title="Delete"
                  style={{
                    padding: '6px',
                    backgroundColor: 'transparent',
                    border: '1px solid #9ca3af',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    color: 'white'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '16px',
        padding: '12px 16px',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: '8px',
        border: '1px solid #9ca3af',
        fontFamily: "'Inter', sans-serif",
        flexShrink: 0
      }}>
        <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
          Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, files.length)} of {files.length} entries
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '8px 12px',
              backgroundColor: currentPage === 1 ? 'var(--bg-surface2)' : '#3b74f0',
              color: currentPage === 1 ? 'var(--text-tertiary)' : 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Previous
          </button>
          
          {/* Page Numbers */}
          {startPage > 1 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid #9ca3af',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                1
              </button>
              {startPage > 2 && <span style={{ padding: '8px 4px', color: 'var(--text-muted)' }}>...</span>}
            </>
          )}
          
          {[...Array(endPage - startPage + 1)].map((_, index) => (
            <button
              key={startPage + index}
              onClick={() => handlePageChange(startPage + index)}
              style={{
                padding: '8px 12px',
                backgroundColor: currentPage === startPage + index ? '#3b74f0' : 'transparent',
                color: currentPage === startPage + index ? 'white' : 'var(--text-muted)',
                border: currentPage === startPage + index ? 'none' : '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              {startPage + index}
            </button>
          ))}
          
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && <span style={{ padding: '8px 4px', color: 'var(--text-muted)' }}>...</span>}
              <button
                onClick={() => handlePageChange(totalPages)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid #9ca3af',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                {totalPages}
              </button>
            </>
          )}
          
          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: '8px 12px',
              backgroundColor: currentPage === totalPages ? 'var(--bg-surface2)' : '#3b74f0',
              color: currentPage === totalPages ? 'var(--text-tertiary)' : 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
            }}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
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
            width: '90%',
            maxWidth: '500px',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <h2 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: 0,
                fontFamily: "'Public Sans', sans-serif"
              }}>
                Document Details
              </h2>
              <button
                onClick={handleCloseModal}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} color="var(--text-muted)" />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              {/* Date Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Date (MM/DD/YYYY)
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={selectedDate}
                    onChange={handleDateChange}
                    placeholder="MM/DD/YYYY"
                    maxLength={10}
                    onFocus={() => setShowDatePicker(false)}
                    style={{
                      width: '100%',
                      padding: '12px 40px 12px 12px',
                      border: '1px solid #9ca3af',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                      color: '#6b7280'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Calendar size={18} color="var(--text-muted)" />
                  </button>
                  
                  {/* Date Picker Popup */}
                  {showDatePicker && renderCalendar()}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  marginTop: '4px'
                }}>
                  Format: MM/DD/YYYY (e.g., 02/15/2025)
                </div>
              </div>

              {/* Page Number Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Page Number
                </label>
                <input
                  type="text"
                  value={selectedPageNumber}
                  onChange={(e) => setSelectedPageNumber(e.target.value)}
                  placeholder="e.g., 1-5, 3, 7-12"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #9ca3af',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                    color: '#6b7280'
                  }}
                />
              </div>

              {/* Title Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Title
                </label>
                <input
                  type="text"
                  value={selectedTitle}
                  onChange={(e) => setSelectedTitle(e.target.value)}
                  placeholder="Enter document title..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #9ca3af',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                    color: '#6b7280'
                  }}
                />
              </div>

              {/* Particulars Textarea */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Particulars
                </label>
                <textarea
                  value={fileName}
                  onChange={(e) => {
                    if (e.target.value.length <= 1000) {
                      setFileName(e.target.value);
                    }
                  }}
                  placeholder="Enter one or two sentences describing the document..."
                  rows={3}
                  maxLength={1000}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #9ca3af',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    minHeight: '80px',
                    backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                    color: '#6b7280'
                  }}
                />
                <div style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  marginTop: '4px',
                  textAlign: 'right'
                }}>
                  {fileName.length}/1000 characters
                </div>
              </div>

              {/* Admin Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Admin
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {adminRecipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedAdmin(selectedAdmin === recipient ? '' : recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedAdmin === recipient ? '2px solid #0074AD' : '1px solid white',
                        borderRadius: '8px',
                        backgroundColor: selectedAdmin === recipient ? 'var(--bg-hover)' : 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedAdmin !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-hover)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedAdmin !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-surface)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dean Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Dean
                </label>
                <input
                  type="text"
                  value={selectedDean}
                  onChange={(e) => setSelectedDean(e.target.value)}
                  placeholder="Enter dean name or leave empty"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #9ca3af',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                    color: '#6b7280'
                  }}
                />
              </div>

              {/* BAC Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  BAC
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {bacRecipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedBac(selectedBac === recipient ? '' : recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedBac === recipient ? '2px solid #0074AD' : '1px solid #e5e7eb',
                        borderRadius: '8px',
                        backgroundColor: selectedBac === recipient ? 'var(--bg-hover)' : 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedBac !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-hover)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedBac !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-surface)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Budget
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {budgetRecipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedBudget(selectedBudget === recipient ? '' : recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedBudget === recipient ? '2px solid #0074AD' : '1px solid #e5e7eb',
                        borderRadius: '8px',
                        backgroundColor: selectedBudget === recipient ? 'var(--bg-hover)' : 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedBudget !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-hover)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedBudget !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-surface)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accounting Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Accounting
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {accountingRecipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedAccounting(selectedAccounting === recipient ? '' : recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedAccounting === recipient ? '2px solid #0074AD' : '1px solid #e5e7eb',
                        borderRadius: '8px',
                        backgroundColor: selectedAccounting === recipient ? 'var(--bg-hover)' : 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedAccounting !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-hover)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedAccounting !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-surface)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              padding: '24px',
              borderTop: '1px solid #e5e7eb'
            }}>
              <button
                onClick={handleCloseModal}
                style={{
                  padding: '12px 24px',
                  border: '1px solid #9ca3af',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#3b74f0',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
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
            width: '95%',
            maxWidth: '800px',
            height: 'auto',
            overflow: 'visible',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 24px',
              borderBottom: '1px solid var(--border-color)',
              background: 'var(--bg-surface2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div>
                  <h2 style={{
                    margin: 0,
                    fontSize: '22px',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '-0.025em'
                  }}>
                    Filter Documents
                  </h2>
                  <p style={{
                    margin: '4px 0 0 0',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: '400'
                  }}>
                    Filter by date and officers
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowFilterModal(false)}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid #9ca3af',
                  cursor: 'pointer',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'var(--bg-hover)';
                  e.target.style.borderColor = 'white';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'var(--bg-surface)';
                  e.target.style.borderColor = 'white';
                }}
              >
                <X size={18} color="#64748b" />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ 
              padding: '16px',
              background: 'var(--bg-surface)'
            }}>
              {/* Date Filter */}
              <div style={{ 
                marginBottom: '20px',
                padding: '16px',
                background: 'var(--bg-surface2)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <label style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.025em'
                  }}>
                    Date Range
                  </label>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <select
                    value={filterMonth}
                    onChange={(e) => setFilterMonth(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      border: '1px solid #9ca3af',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
              color: 'var(--text-primary)'
                    }}
                  >
                    <option value="">Month</option>
                    <option value="01">January</option>
                    <option value="02">February</option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                  <select
                    value={filterDay}
                    onChange={(e) => setFilterDay(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      border: '1px solid #9ca3af',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
              color: 'var(--text-primary)'
                    }}
                  >
                    <option value="">Day</option>
                    {Array.from({ length: 31 }, (_, i) => (
                      <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                  <select
                    value={filterYear}
                    onChange={(e) => setFilterYear(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '10px 12px',
                      border: '1px solid #9ca3af',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
              color: 'var(--text-primary)'
                    }}
                  >
                    <option value="">Year</option>
                    {Array.from({ length: 7 }, (_, i) => (
                      <option key={2026 - i} value={2026 - i}>
                        {2026 - i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Officer Filter */}
              <div style={{ 
                marginBottom: '20px',
                padding: '16px',
                background: 'var(--bg-surface2)',
                borderRadius: '12px',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <label style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.025em'
                  }}>
                    Section Officers
                  </label>
                </div>
                
                {/* Horizontal Layout for Officer Departments */}
                <div style={{ 
                  display: 'flex', 
                  gap: '20px',
                  flexWrap: 'wrap'
                }}>
                  {/* Admin Officers */}
                  <div style={{ flex: '1', minWidth: '120px' }}>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      marginBottom: '8px',
                      fontFamily: "'Inter', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Admin
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {adminRecipients.map(officer => (
                        <label key={officer} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontFamily: "'Inter', sans-serif",
                          color: 'var(--text-secondary)'
                        }}>
                          <input
                            type="checkbox"
                            checked={selectedOfficers.includes(officer)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedOfficers([...selectedOfficers, officer]);
                              } else {
                                setSelectedOfficers(selectedOfficers.filter(o => o !== officer));
                              }
                            }}
                            style={{
                              width: '16px',
                              height: '16px',
                              cursor: 'pointer',
                              backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                              accentColor: '#3b74f0'
                            }}
                          />
                          {officer}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* BAC Officers */}
                  <div style={{ flex: '1', minWidth: '120px' }}>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      marginBottom: '8px',
                      fontFamily: "'Inter', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Bac
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {bacRecipients.map(officer => (
                        <label key={officer} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontFamily: "'Inter', sans-serif",
                          color: 'var(--text-secondary)'
                        }}>
                          <input
                            type="checkbox"
                            checked={selectedOfficers.includes(officer)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedOfficers([...selectedOfficers, officer]);
                              } else {
                                setSelectedOfficers(selectedOfficers.filter(o => o !== officer));
                              }
                            }}
                            style={{
                              width: '16px',
                              height: '16px',
                              cursor: 'pointer'
                            }}
                          />
                          {officer}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget Officers */}
                  <div style={{ flex: '1', minWidth: '120px' }}>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      marginBottom: '8px',
                      fontFamily: "'Inter', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Budget
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {budgetRecipients.map(officer => (
                        <label key={officer} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontFamily: "'Inter', sans-serif",
                          color: 'var(--text-secondary)'
                        }}>
                          <input
                            type="checkbox"
                            checked={selectedOfficers.includes(officer)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedOfficers([...selectedOfficers, officer]);
                              } else {
                                setSelectedOfficers(selectedOfficers.filter(o => o !== officer));
                              }
                            }}
                            style={{
                              width: '16px',
                              height: '16px',
                              cursor: 'pointer'
                            }}
                          />
                          {officer}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Accounting Officers */}
                  <div style={{ flex: '1', minWidth: '120px' }}>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      marginBottom: '8px',
                      fontFamily: "'Inter', sans-serif",
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Accounting
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {accountingRecipients.map(officer => (
                        <label key={officer} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontFamily: "'Inter', sans-serif",
                          color: 'var(--text-secondary)'
                        }}>
                          <input
                            type="checkbox"
                            checked={selectedOfficers.includes(officer)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedOfficers([...selectedOfficers, officer]);
                              } else {
                                setSelectedOfficers(selectedOfficers.filter(o => o !== officer));
                              }
                            }}
                            style={{
                              width: '16px',
                              height: '16px',
                              cursor: 'pointer'
                            }}
                          />
                          {officer}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Dean Section - Separate Row */}
                <div style={{ marginTop: '16px' }}>
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    marginBottom: '8px',
                    fontFamily: "'Inter', sans-serif",
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Dean
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <input
                      id="dean-input"
                      type="text"
                      placeholder="Type dean name..."
                      defaultValue={selectedOfficers.find(o => o.startsWith('Dean: '))?.replace('Dean: ', '') || ''}
                      onChange={(e) => {
                        const deanName = e.target.value.trim();
                        if (deanName) {
                          // Add dean to selected officers for filtering
                          if (!selectedOfficers.some(o => o.startsWith('Dean: '))) {
                            setSelectedOfficers([...selectedOfficers, `Dean: ${deanName}`]);
                          } else {
                            // Update existing dean search term
                            setSelectedOfficers([...selectedOfficers.filter(o => !o.startsWith('Dean: ')), `Dean: ${deanName}`]);
                          }
                        } else {
                          // Remove dean filter if input is empty
                          setSelectedOfficers(selectedOfficers.filter(o => !o.startsWith('Dean: ')));
                        }
                      }}
                      style={{
                        width: '300px',
                        padding: '8px 12px',
                        border: '1px solid #9ca3af',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontFamily: "'Inter', sans-serif",
                        outline: 'none',
                        boxSizing: 'border-box',
                        backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                        color: '#6b7280'
                      }}
                    />
                                      </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 20px',
              borderTop: '1px solid var(--border-color)',
              background: 'var(--bg-surface2)'
            }}>
              <div style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                fontFamily: "'Inter', sans-serif",
                fontStyle: 'italic'
              }}>
                Select multiple options to refine your search
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => {
                    // Reset filters but keep modal open
                    setFilterMonth('');
                    setFilterDay('');
                    setFilterYear('');
                    setSelectedOfficers([]);
                    setSelectedDepartments([]);
                    // Clear the dean input field
                    const deanInput = document.getElementById('dean-input');
                    if (deanInput) deanInput.value = '';
                  }}
                  style={{
                    padding: '12px 24px',
                    border: '1px solid #9ca3af',
                    borderRadius: '10px',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'all 0.2s ease',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'var(--bg-hover)';
                    e.target.style.borderColor = 'white';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'var(--bg-surface)';
                    e.target.style.borderColor = 'white';
                    e.target.style.transform = 'translateY(0px)';
                  }}
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilterModal(false)}
                  style={{
                    padding: '12px 28px',
                    border: 'none',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)';
                    e.target.style.transform = 'translateY(-1px)';
                    e.target.style.boxShadow = '0 6px 8px -1px rgba(59, 130, 246, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
                    e.target.style.transform = 'translateY(0px)';
                    e.target.style.boxShadow = '0 4px 6px -1px rgba(59, 130, 246, 0.3)';
                  }}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* File Upload Modal */}
      {showUploadModal && (
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
            width: '90%',
            maxWidth: '500px',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                fontFamily: "'Inter', sans-serif"
              }}>
                Add New Record
              </h2>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadedFile(null);
                  setUploadRecipient('');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} color="var(--text-muted)" />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              {/* Date Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Date (MM/DD/YYYY) *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={selectedDate}
                    onChange={handleDateChange}
                    placeholder="MM/DD/YYYY"
                    maxLength={10}
                    onFocus={() => setShowDatePicker(false)}
                    style={{
                      width: '100%',
                      padding: '12px 40px 12px 12px',
                      border: '1px solid #9ca3af',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontFamily: "Inter, sans-serif",
                      outline: 'none',
                      boxSizing: 'border-box',
                      backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                      color: '#6b7280'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Calendar size={18} color="var(--text-muted)" />
                  </button>
                  
                  {/* Date Picker Popup */}
                  {showDatePicker && renderCalendar()}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  marginTop: '4px'
                }}>
                  Format: MM/DD/YYYY (e.g., 02/15/2025)
                </div>
              </div>

              {/* Page Number Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Page Number *
                </label>
                <input
                  type="text"
                  value={selectedPageNumber}
                  onChange={(e) => {
                    // Only allow numbers and hyphens
                    const value = e.target.value.replace(/[^0-9-]/g, '');
                    setSelectedPageNumber(value);
                  }}
                  placeholder="e.g., 1-5, 3, 7-12"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #9ca3af',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                    color: '#6b7280'
                  }}
                />
              </div>

              {/* Title Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Title
                </label>
                <input
                  type="text"
                  value={selectedTitle}
                  onChange={(e) => setSelectedTitle(e.target.value)}
                  placeholder="Enter document title..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #9ca3af',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                    color: '#6b7280'
                  }}
                />
              </div>

              {/* Particulars Textarea */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Particulars
                </label>
                <textarea
                  value={fileName}
                  onChange={(e) => {
                    if (e.target.value.length <= 1000) {
                      setFileName(e.target.value);
                    }
                  }}
                  placeholder="Enter one or two sentences describing the document..."
                  rows={3}
                  maxLength={1000}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #9ca3af',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    minHeight: '80px',
                    backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                    color: '#6b7280'                  }}
                />
                <div style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  marginTop: '4px',
                  textAlign: 'right'
                }}>
                  {fileName.length}/1000 characters
                </div>
              </div>

              {/* Admin Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Admin
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {adminRecipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedAdmin(selectedAdmin === recipient ? '' : recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedAdmin === recipient ? '2px solid #0074AD' : '1px solid white',
                        borderRadius: '8px',
                        backgroundColor: selectedAdmin === recipient ? 'var(--bg-hover)' : 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedAdmin !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-hover)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedAdmin !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-surface)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dean Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Dean
                </label>
                <input
                  type="text"
                  value={selectedDean}
                  onChange={(e) => setSelectedDean(e.target.value)}
                  placeholder="Enter dean name or leave empty"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #9ca3af',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box',
                    backgroundColor: 'var(--bg-surface2)', border: '1px solid #9ca3af',
                    color: '#6b7280'
                  }}
                />
              </div>

              {/* BAC Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  BAC
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {bacRecipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedBac(selectedBac === recipient ? '' : recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedBac === recipient ? '2px solid #0074AD' : '1px solid #e5e7eb',
                        borderRadius: '8px',
                        backgroundColor: selectedBac === recipient ? 'var(--bg-hover)' : 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedBac !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-hover)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedBac !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-surface)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Budget
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {budgetRecipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedBudget(selectedBudget === recipient ? '' : recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedBudget === recipient ? '2px solid #0074AD' : '1px solid #e5e7eb',
                        borderRadius: '8px',
                        backgroundColor: selectedBudget === recipient ? 'var(--bg-hover)' : 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedBudget !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-hover)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedBudget !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-surface)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accounting Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Accounting
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {accountingRecipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedAccounting(selectedAccounting === recipient ? '' : recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedAccounting === recipient ? '2px solid #0074AD' : '1px solid #e5e7eb',
                        borderRadius: '8px',
                        backgroundColor: selectedAccounting === recipient ? 'var(--bg-hover)' : 'var(--bg-surface)',
                        color: 'var(--text-secondary)',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedAccounting !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-hover)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedAccounting !== recipient) {
                          e.target.style.backgroundColor = 'var(--bg-surface)';
                          e.target.style.borderColor = 'white';
                        }
                      }}
                    >
                      {recipient}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              padding: '24px',
              borderTop: '1px solid #e5e7eb'
            }}>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  // Clear all fields
                  setSelectedDate('');
                  setSelectedPageNumber('');
                  setSelectedTitle('');
                  setFileName('');
                  setSelectedAdmin('');
                  setSelectedDean('');
                  setSelectedBac('');
                  setSelectedBudget('');
                  setSelectedAccounting('');
                }}
                style={{
                  padding: '12px 24px',
                  border: '1px solid #9ca3af',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Validate required fields
                  const dateValid = selectedDate && selectedDate.trim() !== '';
                  const titleValid = selectedTitle && selectedTitle.trim() !== '';
                  const particularsValid = fileName && fileName.trim() !== '';
                  const pageNumberValid = selectedPageNumber && selectedPageNumber.trim() !== '';
                  
                  if (dateValid && titleValid && particularsValid && pageNumberValid) {
                    // Add new record to the list
                    const newRecord = {
                      id: files.length + 1,
                      date: validateAndFormatDate(selectedDate) || new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
                      pageNumber: selectedPageNumber || '',
                      title: selectedTitle,
                      particulars: fileName,
                      admin: selectedAdmin || '',
                      dean: selectedDean || '',
                      bac: selectedBac || '',
                      budget: selectedBudget || '',
                      accounting: selectedAccounting || ''
                    };
                    setFiles([newRecord, ...files]);
                    setShowUploadModal(false);
                    // Clear all fields
                    setSelectedDate('');
                    setSelectedPageNumber('');
                    setSelectedTitle('');
                    setFileName('');
                    setSelectedAdmin('');
                    setSelectedDean('');
                    setSelectedBac('');
                    setSelectedBudget('');
                    setSelectedAccounting('');
                  } else {
                    alert('Please fill in all required fields: Date, Page Number, Title, and Particulars');
                  }
                }}
                disabled={!(selectedDate && selectedDate.trim() !== '' && 
                         selectedTitle && selectedTitle.trim() !== '' && 
                         fileName && fileName.trim() !== '' && 
                         selectedPageNumber && selectedPageNumber.trim() !== '')}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: (selectedDate && selectedDate.trim() !== '' && 
                                   selectedTitle && selectedTitle.trim() !== '' && 
                                   fileName && fileName.trim() !== '' && 
                                   selectedPageNumber && selectedPageNumber.trim() !== '') 
                                   ? '#0074AD' : '#9ca3af',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: (selectedDate && selectedDate.trim() !== '' && 
                          selectedTitle && selectedTitle.trim() !== '' && 
                          fileName && fileName.trim() !== '' && 
                          selectedPageNumber && selectedPageNumber.trim() !== '') 
                          ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Add Record
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
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
            width: '90%',
            maxWidth: '400px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '24px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                fontFamily: "'Inter', sans-serif"
              }}>
                Confirm Delete
              </h2>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setFileToDelete(null);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} color="var(--text-muted)" />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <Trash2 size={24} color="#dc3545" />
                <div>
                  <p style={{
                    margin: 0,
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'var(--text-primary)',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    Are you sure you want to delete this record?
                  </p>
                  <p style={{
                    margin: '4px 0 0 0',
                    fontSize: '14px',
                    color: 'var(--text-secondary)',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {fileToDelete?.name}
                  </p>
                </div>
              </div>
              <p style={{
                margin: 0,
                fontSize: '14px',
                color: 'var(--text-secondary)',
                fontFamily: "'Inter', sans-serif"
              }}>
                This action cannot be undone. The file will be permanently removed from the system.
              </p>
            </div>

            {/* Modal Footer */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              padding: '24px',
              borderTop: '1px solid #e5e7eb'
            }}>
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setFileToDelete(null);
                }}
                style={{
                  padding: '12px 24px',
                  border: '1px solid #9ca3af',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.2s'
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BUOU52;