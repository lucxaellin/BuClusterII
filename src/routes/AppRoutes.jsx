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
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Incoming" element={<Incoming />} />
        <Route path="/Outgoing" element={<Outgoing />} />
        <Route path="/DisbursementVoucher" element={<DisbursementVoucher />} />
        <Route path="/TemplateCopies" element={<TemplateCopies />} />
        <Route path="/ServiceLeaveCredit" element={<ServiceLeaveCredit />} />
        <Route path="/SupplyProperty" element={<SupplyProperty />} />
        <Route path="/AccountManagement" element={<AccountManagement />} />
        <Route path="/record/:recordId" element={<IncomingRecord />} />
      </Route>
    </Routes>
  );
}