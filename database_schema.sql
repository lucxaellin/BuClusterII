-- BICOL UNIVERSITY CLUSTER II RECORDS MANAGEMENT SYSTEM - DATABASE SCHEMA

-- Drop tables if exist
DROP TABLE IF EXISTS audit_logs, leave_balances, leave_applications, leave_types, employee_departments, employees CASCADE;
DROP TABLE IF EXISTS department_users, departments, users, outgoing_records, incoming_records CASCADE;

-- USERS TABLE
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('admin', 'user', 'super_admin')),
    department_id INTEGER,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DEPARTMENTS TABLE
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    cluster_number VARCHAR(10) NOT NULL,
    campus VARCHAR(50) DEFAULT 'Legazpi',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add foreign key to users
ALTER TABLE users ADD CONSTRAINT fk_users_dept FOREIGN KEY (department_id) REFERENCES departments(id);

-- INCOMING RECORDS TABLE
CREATE TABLE incoming_records (
    id SERIAL PRIMARY KEY,
    record_number VARCHAR(50) UNIQUE NOT NULL,
    date_received DATE NOT NULL,
    page_number VARCHAR(20),
    title VARCHAR(255) NOT NULL,
    particulars TEXT NOT NULL,
    origin VARCHAR(100),
    admin_name VARCHAR(100),
    dean_name VARCHAR(100),
    bac_name VARCHAR(100),
    budget_name VARCHAR(100),
    accounting_name VARCHAR(100),
    status VARCHAR(20) DEFAULT 'pending',
    priority VARCHAR(10) DEFAULT 'normal',
    department_id INTEGER REFERENCES departments(id),
    assigned_to INTEGER REFERENCES users(id),
    file_path VARCHAR(500),
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN DEFAULT FALSE
);

-- OUTGOING RECORDS TABLE
CREATE TABLE outgoing_records (
    id SERIAL PRIMARY KEY,
    record_number VARCHAR(50) UNIQUE NOT NULL,
    date_sent DATE NOT NULL,
    page_number VARCHAR(20),
    title VARCHAR(255) NOT NULL,
    particulars TEXT NOT NULL,
    destination VARCHAR(100),
    recipient_name VARCHAR(100),
    admin_name VARCHAR(100),
    dean_name VARCHAR(100),
    bac_name VARCHAR(100),
    budget_name VARCHAR(100),
    accounting_name VARCHAR(100),
    status VARCHAR(20) DEFAULT 'draft',
    priority VARCHAR(10) DEFAULT 'normal',
    department_id INTEGER REFERENCES departments(id),
    sent_by INTEGER REFERENCES users(id),
    file_path VARCHAR(500),
    tracking_number VARCHAR(100),
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN DEFAULT FALSE
);

-- DEPARTMENT-SPECIFIC RECORDS (Generic for all BU units)
CREATE TABLE department_records (
    id SERIAL PRIMARY KEY,
    department_code VARCHAR(10) NOT NULL REFERENCES departments(code),
    record_type VARCHAR(20) NOT NULL CHECK (record_type IN ('incoming', 'outgoing')),
    record_number VARCHAR(50) NOT NULL,
    date_recorded DATE NOT NULL,
    page_number VARCHAR(20),
    title VARCHAR(255) NOT NULL,
    particulars TEXT NOT NULL,
    admin_name VARCHAR(100),
    dean_name VARCHAR(100),
    bac_name VARCHAR(100),
    budget_name VARCHAR(100),
    accounting_name VARCHAR(100),
    file_path VARCHAR(500),
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(department_code, record_number)
);

-- EMPLOYEES TABLE (For Leave Management)
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    employee_id VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    employee_type VARCHAR(30) NOT NULL CHECK (employee_type IN ('teaching', 'non_teaching', 'official')),
    position VARCHAR(100),
    date_hired DATE,
    vacation_leave_balance DECIMAL(5,2) DEFAULT 0,
    sick_leave_balance DECIMAL(5,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- LEAVE TYPES TABLE
CREATE TABLE leave_types (
    id SERIAL PRIMARY KEY,
    code VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    default_days INTEGER DEFAULT 15,
    is_carry_over_allowed BOOLEAN DEFAULT TRUE,
    max_carry_over_days INTEGER DEFAULT 30,
    is_active BOOLEAN DEFAULT TRUE
);

-- LEAVE APPLICATIONS TABLE
CREATE TABLE leave_applications (
    id SERIAL PRIMARY KEY,
    application_number VARCHAR(30) UNIQUE NOT NULL,
    employee_id INTEGER NOT NULL REFERENCES employees(id),
    leave_type_id INTEGER NOT NULL REFERENCES leave_types(id),
    date_from DATE NOT NULL,
    date_to DATE NOT NULL,
    total_days INTEGER NOT NULL,
    reason TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    recommended_by INTEGER REFERENCES users(id),
    recommended_date TIMESTAMP,
    approved_by INTEGER REFERENCES users(id),
    approved_date TIMESTAMP,
    attachment_path VARCHAR(500),
    created_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_deleted BOOLEAN DEFAULT FALSE
);

-- LEAVE BALANCES TABLE (Annual tracking)
CREATE TABLE leave_balances (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER NOT NULL REFERENCES employees(id),
    leave_type_id INTEGER NOT NULL REFERENCES leave_types(id),
    year INTEGER NOT NULL,
    earned_days DECIMAL(5,2) DEFAULT 0,
    used_days DECIMAL(5,2) DEFAULT 0,
    remaining_days DECIMAL(5,2) DEFAULT 0,
    carried_over_days DECIMAL(5,2) DEFAULT 0,
    UNIQUE(employee_id, leave_type_id, year)
);

-- AUDIT LOGS TABLE
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    table_name VARCHAR(50) NOT NULL,
    record_id INTEGER NOT NULL,
    action VARCHAR(10) NOT NULL,
    old_values JSONB,
    new_values JSONB,
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SYSTEM CONFIGURATION TABLE
CREATE TABLE system_config (
    id SERIAL PRIMARY KEY,
    config_key VARCHAR(50) UNIQUE NOT NULL,
    config_value TEXT NOT NULL,
    description TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- INSERT DEFAULT DATA

-- Insert departments
INSERT INTO departments (code, name, cluster_number) VALUES
('BU-LB-02', 'BU Legazpi Main Campus', 'II'),
('BU-LB-39', 'BU College of Law', 'II'),
('BU-LB-53', 'BU Jesse M. Robredo Institute', 'II'),
('BU-LB-80', 'BU College of Dental Medicine', 'II'),
('BU-LB-01', 'BU Graduate School', 'II'),
('BU-LB-03', 'BU College of Arts and Letters', 'II'),
('BU-LB-52', 'BU Open University', 'II');

-- Insert leave types
INSERT INTO leave_types (code, name, default_days, max_carry_over_days) VALUES
('VL', 'Vacation Leave', 15, 30),
('SL', 'Sick Leave', 15, 30),
('SPL', 'Special Privilege Leave', 3, 0),
('ML', 'Maternity Leave', 105, 0),
('PL', 'Paternity Leave', 7, 0),
('SIL', 'Solo Parent Leave', 7, 0);

-- Insert system config
INSERT INTO system_config (config_key, config_value, description) VALUES
('max_file_size', '10485760', 'Maximum upload file size in bytes (10MB)'),
('leave_accrual_rate', '1.25', 'Monthly leave accrual rate'),
('fiscal_year_start', '01-01', 'Fiscal year start date (MM-DD)');

-- CREATE INDEXES FOR PERFORMANCE
CREATE INDEX idx_incoming_date ON incoming_records(date_received);
CREATE INDEX idx_incoming_status ON incoming_records(status);
CREATE INDEX idx_incoming_dept ON incoming_records(department_id);

CREATE INDEX idx_outgoing_date ON outgoing_records(date_sent);
CREATE INDEX idx_outgoing_status ON outgoing_records(status);
CREATE INDEX idx_outgoing_dept ON outgoing_records(department_id);

CREATE INDEX idx_leave_employee ON leave_applications(employee_id);
CREATE INDEX idx_leave_status ON leave_applications(status);
CREATE INDEX idx_leave_dates ON leave_applications(date_from, date_to);

-- CREATE FUNCTION FOR AUTO-UPDATE TIMESTAMP
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- APPLY TRIGGERS
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_incoming_updated_at BEFORE UPDATE ON incoming_records FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_outgoing_updated_at BEFORE UPDATE ON outgoing_records FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_leave_apps_updated_at BEFORE UPDATE ON leave_applications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- CREATE HELPER FUNCTION FOR GENERATING RECORD NUMBERS
CREATE OR REPLACE FUNCTION generate_record_number(p_dept_code VARCHAR, p_type VARCHAR)
RETURNS VARCHAR AS $$
DECLARE
    v_year TEXT := EXTRACT(YEAR FROM CURRENT_DATE)::TEXT;
    v_seq INTEGER;
    v_prefix TEXT;
BEGIN
    v_prefix := CASE WHEN p_type = 'incoming' THEN 'IN' ELSE 'OUT' END;
    
    SELECT COALESCE(MAX(CAST(SPLIT_PART(record_number, '-', 4) AS INTEGER)), 0) + 1
    INTO v_seq
    FROM (SELECT record_number FROM incoming_records WHERE record_number LIKE p_dept_code || '-' || v_prefix || '-' || v_year || '-%'
          UNION ALL
          SELECT record_number FROM outgoing_records WHERE record_number LIKE p_dept_code || '-' || v_prefix || '-' || v_year || '-%') AS combined;
    
    RETURN p_dept_code || '-' || v_prefix || '-' || v_year || '-' || LPAD(v_seq::TEXT, 5, '0');
END;
$$ LANGUAGE plpgsql;

-- CREATE VIEW FOR RECORDS SUMMARY
CREATE VIEW vw_all_records AS
SELECT 'incoming' as type, record_number, date_received as date, title, particulars, status, department_id, created_at 
FROM incoming_records WHERE is_deleted = FALSE
UNION ALL
SELECT 'outgoing' as type, record_number, date_sent as date, title, particulars, status, department_id, created_at 
FROM outgoing_records WHERE is_deleted = FALSE;

-- CREATE VIEW FOR LEAVE APPLICATIONS WITH DETAILS
CREATE VIEW vw_leave_applications AS
SELECT 
    la.*,
    e.employee_id,
    e.first_name || ' ' || e.last_name as employee_name,
    e.employee_type,
    lt.code as leave_type_code,
    lt.name as leave_type_name
FROM leave_applications la
JOIN employees e ON la.employee_id = e.id
JOIN leave_types lt ON la.leave_type_id = lt.id
WHERE la.is_deleted = FALSE;

COMMIT;
