import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter, Plus, Trash2, Edit, ChevronDown } from 'lucide-react';

const RecordPage = () => {
  const { recordId } = useParams();
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  
  // Map record IDs to display names and descriptions
  const recordInfo = {
    'bugs01': { name: 'BUGS-01', description: 'Budget Utilization and General Services' },
    'bucal03': { name: 'BUCAL-03', description: 'College of Arts and Letters' },
    'bucl39': { name: 'BUCL-39', description: 'College of Law' },
    'buou52': { name: 'BUOU-52', description: 'Open University' },
    'bujmrigd53': { name: 'BUJMRIGD-53', description: 'John M. Rice Graduate School' },
    'bucdm80': { name: 'BUCDM-80', description: 'College of Dentistry and Medicine' }
  };

  const currentRecord = recordInfo[recordId] || { name: 'Unknown Record', description: 'Record not found' };

  // Sample data for the records with separate section columns
  const records = [
    { id: 1, date: '01/15/2025', pageNumber: '001', particulars: 'Budget Report Q1 2025 - Comprehensive financial analysis of first quarter expenditures including operational costs, capital investments, and departmental budgets with detailed breakdowns and variance analysis.', admin: '', bac: '', dean: '', budget: 'Ms. Mitch', accounting: '' },
    { id: 2, date: '01/14/2025', pageNumber: '002', particulars: 'Service Request Form - Request for additional office supplies including printer paper, ink cartridges, and filing cabinets for the administrative department to ensure smooth operations.', admin: '', bac: '', dean: '', budget: '', accounting: 'Ms. Mau' },
    { id: 3, date: '01/13/2025', pageNumber: '003', particulars: 'Procurement Order #1234 - Official purchase order for new computer equipment including laptops, monitors, and docking stations for the IT department upgrade project.', admin: '', bac: 'Ms. Jing', dean: '', budget: '', accounting: '' },
    { id: 4, date: '01/12/2025', pageNumber: '004', particulars: 'Memorandum Circular - Important notice regarding upcoming policy changes in document management procedures and new guidelines for record keeping across all departments.', admin: '', bac: '', dean: 'Ms. Rubz', budget: '', accounting: '' },
    { id: 5, date: '01/11/2025', pageNumber: '005', particulars: 'Annual Report 2024 - Complete yearly summary including financial statements, operational achievements, challenges faced, and strategic goals for the upcoming fiscal year.', admin: '', bac: '', dean: '', budget: 'Ms. Mitch', accounting: '' },
    { id: 6, date: '01/10/2025', pageNumber: '006', particulars: 'Employee Training Manual - Comprehensive guide for new employee onboarding including company policies, procedures, and best practices for workplace conduct and performance expectations.', admin: 'Ms. Chen', bac: '', dean: '', budget: '', accounting: '' },
    { id: 7, date: '01/09/2025', pageNumber: '007', particulars: 'Facility Maintenance Request - Request for urgent repairs to building infrastructure including electrical systems, plumbing, and HVAC maintenance to ensure safe working conditions.', admin: '', bac: 'Mr. Santos', dean: '', budget: '', accounting: '' },
    { id: 8, date: '01/08/2025', pageNumber: '008', particulars: 'Academic Curriculum Update - Proposed changes to degree program requirements and course offerings for the upcoming academic year with detailed justification and implementation timeline.', admin: '', bac: '', dean: 'Dr. Reyes', budget: '', accounting: '' },
    { id: 9, date: '01/07/2025', pageNumber: '009', particulars: 'Quarterly Financial Statement - Detailed financial report including revenue, expenses, profit margins, and cash flow analysis for the fourth quarter of fiscal year 2024.', admin: '', bac: '', dean: '', budget: 'Ms. Garcia', accounting: '' },
    { id: 10, date: '01/06/2025', pageNumber: '010', particulars: 'Audit Compliance Report - Annual audit findings and recommendations for improving internal controls and financial reporting processes across all university departments.', admin: '', bac: '', dean: '', budget: '', accounting: 'Mr. Lopez' },
    { id: 11, date: '01/05/2025', pageNumber: '011', particulars: 'Research Grant Proposal - Detailed proposal for government research funding including project objectives, methodology, budget requirements, and expected outcomes.', admin: '', bac: 'Dr. Kim', dean: '', budget: '', accounting: '' },
    { id: 12, date: '01/04/2025', pageNumber: '012', particulars: 'Student Enrollment Report - Comprehensive analysis of student enrollment trends, demographic data, and projections for future academic planning and resource allocation.', admin: '', bac: '', dean: 'Prof. Lee', budget: '', accounting: '' },
    { id: 13, date: '01/03/2025', pageNumber: '013', particulars: 'Capital Expenditure Budget - Proposed budget for major capital improvements including building renovations, equipment purchases, and infrastructure upgrades for the next fiscal year.', admin: '', bac: '', dean: '', budget: 'Mr. Wilson', accounting: '' },
    { id: 14, date: '01/02/2025', pageNumber: '014', particulars: 'Tax Compliance Documentation - Complete set of tax documents and filings required for annual tax compliance including income statements, expense reports, and supporting documentation.', admin: '', bac: '', dean: '', budget: '', accounting: 'Ms. Davis' },
    { id: 15, date: '01/01/2025', pageNumber: '015', particulars: 'Strategic Plan 2025-2030 - Long-term strategic planning document outlining university goals, objectives, and key performance indicators for the next five years with detailed implementation roadmap.', admin: 'Dr. Johnson', bac: '', dean: '', budget: '', accounting: '' },
    { id: 16, date: '12/31/2024', pageNumber: '016', particulars: 'Year-End Financial Closing - Documentation and procedures for closing the fiscal year 2024 including account reconciliations and year-end adjustments.', admin: 'Ms. Chen', bac: '', dean: '', budget: '', accounting: 'Mr. Reyes' },
    { id: 17, date: '12/30/2024', pageNumber: '017', particulars: 'Staff Performance Evaluation - Annual performance review forms and documentation for all administrative staff members.', admin: '', bac: '', dean: 'Ms. Santos', budget: '', accounting: '' },
    { id: 18, date: '12/29/2024', pageNumber: '018', particulars: 'Vendor Contract Renewal - Updated contracts and agreements with existing suppliers and service providers for the upcoming year.', admin: '', bac: 'Mr. Lim', dean: '', budget: '', accounting: '' },
    { id: 19, date: '12/28/2024', pageNumber: '019', particulars: 'IT Security Audit Report - Comprehensive assessment of cybersecurity measures and recommendations for system improvements.', admin: '', bac: '', dean: '', budget: '', accounting: '' },
    { id: 20, date: '12/27/2024', pageNumber: '020', particulars: 'Library Acquisition Request - List of new books, journals, and digital resources requested for the university library collection.', admin: '', bac: '', dean: 'Dr. Martinez', budget: '', accounting: '' },
    { id: 21, date: '12/26/2024', pageNumber: '021', particulars: 'Research Ethics Approval - Documentation for research projects requiring ethical review and approval from the university ethics committee.', admin: '', bac: 'Dr. Park', dean: '', budget: '', accounting: '' },
    { id: 22, date: '12/25/2024', pageNumber: '022', particulars: 'Holiday Schedule Memo - Official announcement of university holidays and non-working days for the calendar year.', admin: 'Mr. Garcia', bac: '', dean: '', budget: '', accounting: '' },
    { id: 23, date: '12/24/2024', pageNumber: '023', particulars: 'Equipment Inventory Report - Complete listing of all university assets including computers, furniture, and laboratory equipment.', admin: '', bac: '', dean: '', budget: 'Ms. Lee', accounting: '' },
    { id: 24, date: '12/23/2024', pageNumber: '024', particulars: 'Student Scholarship Awards - List of scholarship recipients with award amounts and terms for the academic year.', admin: '', bac: '', dean: 'Prof. Wang', budget: '', accounting: '' },
    { id: 25, date: '12/22/2024', pageNumber: '025', particulars: 'Building Permit Application - Documents submitted for approval of new construction and renovation projects on campus.', admin: '', bac: '', dean: '', budget: '', accounting: '' },
    { id: 26, date: '12/21/2024', pageNumber: '026', particulars: 'Alumni Donation Records - Documentation of contributions from alumni and friends of the university for development projects.', admin: '', bac: '', dean: '', budget: '', accounting: 'Ms. Taylor' },
    { id: 27, date: '12/20/2024', pageNumber: '027', particulars: 'International Student Visa - Processing documents for foreign students requiring visa extensions and renewals.', admin: 'Ms. Anderson', bac: '', dean: '', budget: '', accounting: '' },
    { id: 28, date: '12/19/2024', pageNumber: '028', particulars: 'Conference Registration Forms - Applications for faculty members attending international academic conferences and symposiums.', admin: '', bac: 'Dr. Brown', dean: '', budget: '', accounting: '' },
    { id: 29, date: '12/18/2024', pageNumber: '029', particulars: 'Medical Insurance Claims - Health insurance documentation and claims processing for university employees.', admin: '', bac: '', dean: '', budget: '', accounting: 'Mr. White' },
    { id: 30, date: '12/17/2024', pageNumber: '030', particulars: 'Curriculum Accreditation - Self-study reports and documentation for program accreditation by professional bodies.', admin: '', bac: '', dean: 'Dr. Green', budget: '', accounting: '' },
    { id: 31, date: '12/16/2024', pageNumber: '031', particulars: 'Transportation Service Contract - Agreement with bus service providers for student and staff transportation.', admin: '', bac: '', dean: '', budget: '', accounting: '' },
    { id: 32, date: '12/15/2024', pageNumber: '032', particulars: 'Dormitory Assignment List - Room allocations and housing arrangements for residential students.', admin: '', bac: '', dean: '', budget: '', accounting: '' },
    { id: 33, date: '12/14/2024', pageNumber: '033', particulars: 'Graduation Ceremony Plan - Schedule, venue arrangements, and protocol for the upcoming commencement exercises.', admin: '', bac: '', dean: 'Prof. Black', budget: '', accounting: '' },
    { id: 34, date: '12/13/2024', pageNumber: '034', particulars: 'Faculty Recruitment Package - Job offers and employment contracts for newly hired professors and instructors.', admin: '', bac: '', dean: '', budget: '', accounting: '' },
    { id: 35, date: '12/12/2024', pageNumber: '035', particulars: 'Environmental Compliance Report - Documentation of sustainability initiatives and environmental impact assessments.', admin: '', bac: '', dean: '', budget: 'Ms. Gray', accounting: '' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Approved': return '#10b981';
      case 'Pending': return '#f59e0b';
      case 'Processing': return '#0074AD';
      case 'Draft': return '#6b7280';
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
      gap: '24px',
      overflow: 'hidden'
    }}>
      {/* Header with New Entry button and controls */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '8px' 
      }}>
        <div>
          <h1 style={{ 
            fontSize: '20px', 
            fontWeight: '600', 
            color: '#0074AD', 
            margin: 0, 
            fontFamily: "'Public Sans', sans-serif" 
          }}>
            {currentRecord.name}
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: '8px 0 0 0',
            fontFamily: "'Inter', sans-serif"
          }}>
            {currentRecord.description}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search" 
              style={{ 
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                fontFamily: "'Inter', sans-serif",
                outline: 'none',
                width: '200px' 
              }} 
            />
            <Search 
              size={16} 
              color="#6b7280" 
              style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)' 
              }} 
            />
          </div>
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setShowFilterDropdown(!showFilterDropdown)} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                padding: '8px 12px',
                backgroundColor: 'white',
                color: '#6b7280',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              <Filter size={16} />
              Filter
              <ChevronDown size={14} />
            </button>
            
            {showFilterDropdown && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: '0',
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                minWidth: '180px',
                overflow: 'hidden',
                zIndex: 1000
              }}>
                <div style={{
                  padding: '8px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#6b7280',
                  backgroundColor: '#f9fafb',
                  borderBottom: '1px solid #e5e7eb',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  FILTER BY SECTION
                </div>
                {['All', 'BAC', 'DEAN', 'BUDGET', 'ACCOUNTING'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      // Handle filter selection
                      setShowFilterDropdown(false);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '10px 12px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#374151',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'background-color 0.2s',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f9fafb';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {section}
                  </button>
                ))}
              </div>
            )}
            
            {showFilterDropdown && (
              <div
                onClick={() => setShowFilterDropdown(false)}
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
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 20px',
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
            New Entry
          </button>
        </div>
      </div>

    {/* Records Table */}
      <div style={{ 
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      }}>
        <div style={{ 
          flex: 1,
          overflow: 'auto',
          minHeight: 0
        }}>
        <table style={{
          width: '100%', 
          minWidth: '1100px',
          borderCollapse: 'collapse',
          fontFamily: "'Inter', sans-serif",
          tableLayout: 'fixed'
        }}>
          <colgroup>
            <col style={{ width: '120px' }} /> {/* Date */}
            <col style={{ width: '100px' }} /> {/* Page Number */}
            <col style={{ width: 'auto', minWidth: '400px' }} /> {/* Particulars - flexible width */}
            <col style={{ width: '100px' }} /> {/* Admin */}
            <col style={{ width: '100px' }} /> {/* BAC */}
            <col style={{ width: '100px' }} /> {/* Dean */}
            <col style={{ width: '100px' }} /> {/* Budget */}
            <col style={{ width: '120px' }} /> {/* Accounting */}
            <col style={{ width: '200px' }} /> {/* Actions */}
          </colgroup>
          <thead style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backgroundColor: '#f9fafb'
          }}>
          <tr style={{ backgroundColor: '#f9fafb' }}>
            <th style={{
              padding: '12px 20px',
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              Date
            </th>
            <th style={{
              padding: '12px 20px',
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              Page Number
            </th>
            <th style={{
              padding: '12px 20px',
              textAlign: 'left',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              Particulars
            </th>
            <th style={{
              padding: '12px 20px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              Admin
            </th>
            <th style={{
              padding: '12px 20px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              BAC
            </th>
            <th style={{
              padding: '12px 20px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              Dean
            </th>
            <th style={{
              padding: '12px 20px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              Budget
            </th>
            <th style={{
              padding: '12px 20px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              Accounting
            </th>
            <th style={{
              padding: '12px 20px',
              textAlign: 'center',
              fontSize: '12px',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {records.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage).map((record) => (
            <tr key={record.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1f2937' }}>
                {record.date}
              </td>
              <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1f2937' }}>
                {record.pageNumber}
              </td>
              <td style={{ 
                padding: '16px 20px', 
                fontSize: '14px', 
                color: '#1f2937',
                verticalAlign: 'top',
                lineHeight: '1.5'
              }}>
                {record.particulars}
              </td>
              <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1f2937', textAlign: 'center' }}>
                {record.admin || '-'}
              </td>
              <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1f2937', textAlign: 'center' }}>
                {record.bac || '-'}
              </td>
              <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1f2937', textAlign: 'center' }}>
                {record.dean || '-'}
              </td>
              <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1f2937', textAlign: 'center' }}>
                {record.budget || '-'}
              </td>
              <td style={{ padding: '16px 20px', fontSize: '14px', color: '#1f2937', textAlign: 'center' }}>
                {record.accounting || '-'}
              </td>
              <td style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                  <button
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
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        </div>
      </div>
      
      {/* Pagination */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 16px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '13px',
        flexWrap: 'wrap',
        gap: '8px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              style={{
                padding: '4px 8px',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                backgroundColor: currentPage === 1 ? '#f3f4f6' : 'white',
                color: currentPage === 1 ? '#9ca3af' : '#6b7280',
                fontSize: '13px',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                fontFamily: "'Inter', sans-serif",
                whiteSpace: 'nowrap'
              }}
            >
              Previous
            </button>
            
            {Array.from({ length: Math.ceil(records.length / recordsPerPage) }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  padding: '4px 8px',
                  border: '1px solid ' + (page === currentPage ? '#0074AD' : '#e5e7eb'),
                  borderRadius: '4px',
                  backgroundColor: page === currentPage ? '#0074AD' : 'white',
                  color: page === currentPage ? 'white' : '#374151',
                  fontSize: '13px',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  minWidth: '24px'
                }}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(Math.ceil(records.length / recordsPerPage), prev + 1))}
              disabled={currentPage === Math.ceil(records.length / recordsPerPage)}
              style={{
                padding: '4px 8px',
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                backgroundColor: currentPage === Math.ceil(records.length / recordsPerPage) ? '#f3f4f6' : 'white',
                color: currentPage === Math.ceil(records.length / recordsPerPage) ? '#9ca3af' : '#6b7280',
                fontSize: '13px',
                cursor: currentPage === Math.ceil(records.length / recordsPerPage) ? 'not-allowed' : 'pointer',
                fontFamily: "'Inter', sans-serif",
                whiteSpace: 'nowrap'
              }}
            >
              Next
            </button>
          </div>
          
          <span style={{ color: '#6b7280', whiteSpace: 'nowrap' }}>
            Showing {(currentPage - 1) * recordsPerPage + 1} to {Math.min(currentPage * recordsPerPage, records.length)} of {records.length} entries
          </span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 10px',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '500',
              whiteSpace: 'nowrap'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            Print
          </button>
          
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 10px',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '13px',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontWeight: '500',
              whiteSpace: 'nowrap'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordPage;
