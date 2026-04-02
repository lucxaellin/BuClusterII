import React from 'react';
import { Package, Box, Tag, TrendingUp, Search, Filter, Plus, AlertCircle } from 'lucide-react';

const SupplyProperty = () => {
  const supplies = [
    { id: 1, name: 'Office Paper A4', category: 'Office Supplies', quantity: 150, unit: 'reams', status: 'In Stock', lastUpdated: '01/15/2025' },
    { id: 2, name: 'Printer Ink - Black', category: 'Office Supplies', quantity: 25, unit: 'cartridges', status: 'Low Stock', lastUpdated: '01/14/2025' },
    { id: 3, name: 'Whiteboard Markers', category: 'Office Supplies', quantity: 45, unit: 'pieces', status: 'In Stock', lastUpdated: '01/13/2025' },
    { id: 4, name: 'Cleaning Supplies', category: 'Maintenance', quantity: 12, unit: 'kits', status: 'In Stock', lastUpdated: '01/12/2025' },
    { id: 5, name: 'Computer Mouse', category: 'Equipment', quantity: 8, unit: 'units', status: 'Low Stock', lastUpdated: '01/11/2025' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'In Stock': return '#10b981';
      case 'Low Stock': return '#f59e0b';
      case 'Out of Stock': return '#ef4444';
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
          Supply and Property
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: '8px 0 0 0',
          fontFamily: "'Inter', sans-serif"
        }}>
          Manage office supplies and property inventory
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
              <Package size={20} color="#0074AD" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', fontFamily: "'Inter', sans-serif" }}>
                Total Items
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1f2937', fontFamily: "'Inter', sans-serif" }}>
                234
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
              <Box size={20} color="#10b981" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', fontFamily: "'Inter', sans-serif" }}>
                In Stock
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1f2937', fontFamily: "'Inter', sans-serif" }}>
                198
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
              <AlertCircle size={20} color="#f59e0b" />
            </div>
            <div>
              <p style={{ margin: 0, fontSize: '12px', color: '#6b7280', fontFamily: "'Inter', sans-serif" }}>
                Low Stock
              </p>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: '600', color: '#1f2937', fontFamily: "'Inter', sans-serif" }}>
                36
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
            placeholder="Search supplies..."
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
          Add Item
        </button>
      </div>

      {/* Supplies Table */}
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
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 120px',
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
          <div>Item Name</div>
          <div>Category</div>
          <div>Quantity</div>
          <div>Status</div>
          <div>Last Updated</div>
          <div>Actions</div>
        </div>

        {/* Supply Rows */}
        {supplies.map((supply) => (
          <div key={supply.id} style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 120px',
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
              <Package size={20} color="#6b7280" />
              {supply.name}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {supply.category}
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {supply.quantity} {supply.unit}
            </div>
            <div>
              <span style={{
                fontSize: '12px',
                fontWeight: '500',
                color: getStatusColor(supply.status),
                backgroundColor: `${getStatusColor(supply.status)}20`,
                padding: '4px 8px',
                borderRadius: '4px',
                fontFamily: "'Inter', sans-serif"
              }}>
                {supply.status}
              </span>
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              {supply.lastUpdated}
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
              <button
                title="View Details"
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
                <Tag size={16} color="#6b7280" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyProperty;
