import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Plus, FileText, Download, Trash2, Eye, User, Filter, MoreVertical, X, Edit } from 'lucide-react';

const Outgoing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 2,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 3,
      name: 'Incoming Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 4,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 5,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 6,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 7,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 8,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 9,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 10,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 11,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 12,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 13,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 14,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 15,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 16,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 17,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 18,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 19,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 20,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 21,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 22,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 23,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 24,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 25,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 26,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 27,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 28,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 29,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 30,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 31,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 32,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 33,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 34,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    },
    {
      id: 35,
      name: 'Outgoing Document',
      type: 'PDF',
      date: '02/03/2025',
      size: '1.2 MB',
      receivedBy: 'John Doe'
    }
  ]);

  const recipients = ['Ms Mitch', 'Ms. Mau', 'Ms. Jing', 'Ms. Rubs'];

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = files.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(files.length / rowsPerPage);

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
    if (location.pathname === '/Outgoing') {
      console.log('Outgoing page is active - sidebar should show Outgoing as active');
    }
  }, [location.pathname]);
 
  //MODAL
  const handleViewClick = (file) => {
    setSelectedFile(file);
    setFileName(file.name);
    setSelectedRecipient('');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFile(null);
    setFileName('');
    setSelectedRecipient('');
  };

  const handleSaveChanges = () => {
    if (selectedFile && (fileName !== selectedFile.name || selectedRecipient !== selectedFile.receivedBy)) {
      // Update the file in the files array
      setFiles(prevFiles => 
        prevFiles.map(file => 
          file.id === selectedFile.id 
            ? { 
                ...file, 
                name: fileName || file.name,
                receivedBy: selectedRecipient || file.receivedBy
              }
            : file
        )
      );
      
      console.log('File updated:', {
        id: selectedFile.id,
        oldName: selectedFile.name,
        newName: fileName,
        oldRecipient: selectedFile.receivedBy,
        newRecipient: selectedRecipient
      });
    }
    
    handleCloseModal();
  };

  return (
    <div style={{ 
      fontFamily: "'Inter', sans-serif", 
      backgroundColor: '#f8f9fa',
      height: 'calc(100vh - 48px)', // Account for padding
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      {/* Header - Fixed */}
      <div style={{ marginBottom: '32px', flexShrink: 0 }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '600', 
          color: '#0074AD', 
          margin: 0,
          fontFamily: "'Public Sans', sans-serif"
        }}>
          OUTGOING DOCUMENTS BU-LB-CLUSTER II-80
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
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
            <Search size={20} color="#6b7280" />
          </button>
          <input
            type="text"
            placeholder="Search File"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '198%',
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

        {/* Filter and Add Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
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
            backgroundColor: '#FF9500',
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
            Add New File
          </button>
        </div>
      </div>

      {/* Files Table - Scrollable Rows Only */}
      <div style={{
        flex: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0 // Important for flex child to shrink properly
      }}>
        {/* Table Header - Fixed */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '40px 2fr 1fr 1fr 1fr 139px 150px',
          padding: '16px 20px',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
          fontSize: '12px',
          fontWeight: '600',
          color: '#6b7280',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          fontFamily: "'Inter', sans-serif",
          flexShrink: 0
        }}>
          <div></div>
          <div>FILE NAME</div>
          <div>TYPE</div>
          <div>DATE</div>
          <div>SIZE</div>
          <div>RECEIVED BY</div>
          <div>ACTIONS</div>
        </div>

        {/* File Rows - Paginated */}
        <div style={{ 
          flex: 1, 
          overflow: 'auto',
          minHeight: 0,
          maxHeight: '400px'
        }}>
          {currentRows.map((file) => (
            <div key={file.id} style={{
              display: 'grid',
              gridTemplateColumns: '40px 2fr 1fr 1fr 1fr 120px 150px',
              padding: '16px 20px',
              borderBottom: '1px solid #f3f4f6',
              alignItems: 'center',
              transition: 'background-color 0.2s',
              fontFamily: "'Public Sans', sans-serif"
            }}>
              {/* Checkbox */}
              <div>
                <input
                  type="checkbox"
                  style={{
                    width: '16px',
                    height: '16px',
                    cursor: 'pointer'
                  }}
                />
              </div>

              {/* File Name */}
              <div style={{ 
                fontSize: '14px', 
                color: '#1f2937', 
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FileText size={20} color="#6b7280" />
                {file.name}
              </div>

              {/* Type */}
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                {file.type}
              </div>

              {/* Date */}
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                {file.date}
              </div>

              {/* Size */}
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                {file.size}
              </div>

              {/* Received By */}
              <div style={{ 
                fontSize: '14px', 
                color: '#6b7280',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <User size={16} color="#6b7280" />
                {file.receivedBy}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => console.log('View clicked for', file.name)}
                  title="View"
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
                  <Eye size={16} color="#6b7280" />
                </button>
                <button
                  onClick={() => handleViewClick(file)}
                  title="Edit"
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
                  onClick={() => console.log('Download clicked for', file.name)}
                  title="Download"
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
                  <Download size={16} color="#6b7280" />
                </button>
                <button
                  onClick={() => console.log('Delete clicked for', file.name)}
                  title="Delete"
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

      {/* Pagination Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '16px',
        padding: '12px 16px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        fontFamily: "'Inter', sans-serif",
        flexShrink: 0
      }}>
        <div style={{ fontSize: '14px', color: '#6b7280' }}>
          Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, files.length)} of {files.length} entries
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '8px 12px',
              backgroundColor: currentPage === 1 ? '#f3f4f6' : '#0074AD',
              color: currentPage === 1 ? '#9ca3af' : 'white',
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
                  color: '#6b7280',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}
              >
                1
              </button>
              {startPage > 2 && <span style={{ padding: '8px 4px', color: '#6b7280' }}>...</span>}
            </>
          )}
          
          {[...Array(endPage - startPage + 1)].map((_, index) => (
            <button
              key={startPage + index}
              onClick={() => handlePageChange(startPage + index)}
              style={{
                padding: '8px 12px',
                backgroundColor: currentPage === startPage + index ? '#0074AD' : 'transparent',
                color: currentPage === startPage + index ? 'white' : '#6b7280',
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
              {endPage < totalPages - 1 && <span style={{ padding: '8px 4px', color: '#6b7280' }}>...</span>}
              <button
                onClick={() => handlePageChange(totalPages)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: 'transparent',
                  color: '#6b7280',
                  border: '1px solid #e5e7eb',
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
              backgroundColor: currentPage === totalPages ? '#f3f4f6' : '#0074AD',
              color: currentPage === totalPages ? '#9ca3af' : 'white',
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
            backgroundColor: 'white',
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
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h2 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
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
                <X size={20} color="#6b7280" />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '24px' }}>
              {/* File Name Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  File Name
                </label>
                <input
                  type="text"
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              {/* Recipient Selection */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                  fontFamily: "'Public Sans', sans-serif"
                }}>
                  Recieved by
                </label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {recipients.map((recipient) => (
                    <button
                      key={recipient}
                      onClick={() => setSelectedRecipient(recipient)}
                      style={{
                        padding: '12px 16px',
                        border: selectedRecipient === recipient ? '2px solid #0074AD' : '1px solid #e5e7eb',
                        borderRadius: '8px',
                        backgroundColor: selectedRecipient === recipient ? '#f0f9ff' : 'white',
                        color: '#374151',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedRecipient !== recipient) {
                          e.target.style.backgroundColor = '#f8f9fa';
                          e.target.style.borderColor = '#0074AD';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedRecipient !== recipient) {
                          e.target.style.backgroundColor = 'white';
                          e.target.style.borderColor = '#e5e7eb';
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
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  color: '#6b7280',
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
                  backgroundColor: '#0074AD',
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
    </div>
  );
};

export default Outgoing;