import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Incoming from "../pages/Incoming";
import Outgoing from "../pages/Outgoing";
import DisbursementVoucher from "../pages/DisbursementVoucher";
import TemplateCopies from "../pages/TemplateCopies";
import ServiceLeaveCredit from "../pages/ServiceLeaveCredit";
import SupplyProperty from "../pages/SupplyProperty";
import AccountManagement from "../pages/AccountManagement";
import IncomingRecord from "../pages/IncomingRecord";
import OutgoingRecord from "../pages/OutgoingRecord";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import BUOU52 from "../pages/BUOU52";
import BUJMRIGD53 from "../pages/BUJMRIGD53";
import BUCDM80 from "../pages/BUCDM80";
import BUGS01 from "../pages/BUGS01";
import BUCL39 from "../pages/BUCL39";
import BUCAL03 from "../pages/BUCAL03";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Incoming" element={<Incoming />} />
        <Route path="/Outgoing" element={<Outgoing />} />
        <Route path="/DisbursementVoucher" element={<DisbursementVoucher />} />
        <Route path="/TemplateCopies" element={<TemplateCopies />} />
        <Route path="/ServiceLeaveCredit" element={<ServiceLeaveCredit />} />
        <Route path="/SupplyProperty" element={<SupplyProperty />} />
        <Route path="/AccountManagement" element={<AccountManagement />} />
        <Route path="/IncomingRecord" element={<IncomingRecord />} />
        <Route path="/OutgoingRecord" element={<OutgoingRecord />} />
        <Route path="/BUGS01" element={<BUGS01 />} />
        <Route path="/BUCAL03" element={<BUCAL03 />} />
        <Route path="/BUCL39" element={<BUCL39 />} />
        <Route path="/BUOU52" element={<BUOU52 />} />
        <Route path="/BUJMRIGD53" element={<BUJMRIGD53 />} />
        <Route path="/BUCDM80" element={<BUCDM80 />} />
        </Route>
    </Routes>
  );
}