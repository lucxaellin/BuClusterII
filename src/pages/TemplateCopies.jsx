import React from 'react';
import { Copy, Download, Eye, Search, Filter, Plus } from 'lucide-react';

const TemplateCopies = () => {
  const templates = [
    { id: 1, name: 'Official Receipt Template', type: 'PDF', date: '01/15/2025', size: '245 KB', downloads: 156 },
    { id: 2, name: 'Leave Application Form', type: 'PDF', date: '01/14/2025', size: '180 KB', downloads: 89 },
    { id: 3, name: 'Purchase Request Form', type: 'PDF', date: '01/13/2025', size: '320 KB', downloads: 234 },
    { id: 4, name: 'Travel Order Template', type: 'PDF', date: '01/12/2025', size: '195 KB', downloads: 67 },
    { id: 5, name: 'Incident Report Form', type: 'PDF', date: '01/11/2025', size: '210 KB', downloads: 45 },
  ];

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
          Template Copies
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: '8px 0 0 0',
          fontFamily: "'Inter', sans-serif"
        }}>
          Manage and download document templates
        </p>
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
            placeholder="Search templates..."
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
          Add Template
        </button>
      </div>

      {/* Templates Table */}
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
          gridTemplateColumns: '2fr 1fr 1fr 1fr 120px',
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
          <div>Template Name</div>
          <div>Type</div>
          <div>Date Added</div>
          <div>Downloads</div>
          <div>Actions</div>
        </div>

        {/* Template Rows */}
        {templates.map((template) => (
          <div key={template.id} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 120px',
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
              <Copy size={20} color="#6b7280" />
              {template.name}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {template.type}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {template.date}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {template.downloads}
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
              <button
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateCopies;
