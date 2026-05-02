import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import Homepage from "../pages/Homepage";
import Dashboard from "../pages/Dashboard";
import Incoming from "../pages/Incoming";
import Outgoing from "../pages/Outgoing";
import TemplateCopies from "../pages/TemplateCopies";
import ServiceLeaveCredit from "../pages/ServiceLeaveCredit";
import SupplyProperty from "../pages/SupplyProperty";
import AccountManagement from "../pages/AccountManagement";
import AccountSettings from "../pages/AccountSettings";
import IncomingRecord from "../pages/IncomingRecord";
import OutgoingRecord from "../pages/OutgoingRecord";
import Layout from "../components/Layout";
import LoginPage from "../auth/LoginPage";

import BUOU52 from "../pages/BUOU52";
import BUJMRIGD53 from "../pages/BUJMRIGD53";
import BUCDM80 from "../pages/BUCDM80";
import BUGS01 from "../pages/BUGS01";
import BUCL39 from "../pages/BUCL39";
import BUCAL03 from "../pages/BUCAL03";
import AccruedLeave from "../pages/AccruedLeave";
import TeachersLeave from "../pages/TeachersLeave";

// LoadingPageWrapper component that handles loading flow and redirects to homepage
function LoadingPageWrapper() {
  const navigate = useNavigate();
  
  const handleLoadingComplete = () => {
    navigate('/home');
  };
  
  return <LoadingPage onComplete={handleLoadingComplete} />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<LoadingPageWrapper />} />
      <Route path="/home" element={<Homepage />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/incoming" element={<Incoming />} />
        <Route path="/outgoing" element={<Outgoing />} />
        <Route path="/template-copies" element={<TemplateCopies />} />
        <Route path="/accrued-leave" element={<AccruedLeave />} />
        <Route path="/teachers-leave" element={<TeachersLeave />} />
        <Route path="/service-leave-credit" element={<ServiceLeaveCredit />} />
        <Route path="/supply-property" element={<SupplyProperty />} />
        <Route path="/SupplyProperty" element={<Navigate to="/supply-property" replace />} />
        <Route path="/account-management" element={<AccountManagement />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/accounts" element={<Navigate to="/account-management" replace />} />
        <Route path="/incoming-record" element={<IncomingRecord />} />
        <Route path="/outgoing-record" element={<OutgoingRecord />} />
        <Route path="/AccruedLeave" element={<Navigate to="/accrued-leave" replace />} />
        <Route path="/TeachersLeave" element={<Navigate to="/teachers-leave" replace />} />
        <Route path="/settings" element={<Navigate to="/account-management" replace />} />

        <Route path="/bugs01" element={<BUGS01 />} />
        <Route path="/bucal03" element={<BUCAL03 />} />
        <Route path="/bucl39" element={<BUCL39 />} />
        <Route path="/buou52" element={<BUOU52 />} />
        <Route path="/bujmrigd53" element={<BUJMRIGD53 />} />
        <Route path="/bucdm80" element={<BUCDM80 />} />
      </Route>
    </Routes>
  );
}