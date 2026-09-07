import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./components/Layout";

import OwnerDashboard from "./pages/OwnerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProjectManagerDashboard from "./pages/ProjectMangaerDashboard";
import SiteManagerDashboard from "./pages/SiteManagerDashbaord";
import AccountantDashboard from "./pages/AccountantDashboard";
import ProcurementDashboard from "./pages/ProcurementDashboard";
import SupervisorDashboard from "./pages/SupervisroDashboard";
import ContractorDashboard from "./pages/ContractorDashboard";
import Projects from "./projects/Project";
import ProjectDetails from "./projects/ProjectDetail";
import Sites from "./sites/Sites";
import SiteDetails from "./sites/SiteDetails";
function Dashboard() {
  const currentUser = useSelector((state) => state.user.currentUser);

  switch (currentUser.role) {
    case "owner":
      return <OwnerDashboard />;

    case "admin":
      return <AdminDashboard />;

    case "project_manager":
      return <ProjectManagerDashboard />;

    case "site_manager":
      return <SiteManagerDashboard />;

    case "accountant":
      return <AccountantDashboard />;

    case "procurement_manager":
      return <ProcurementDashboard />;

    case "supervisor":
      return <SupervisorDashboard />;

    case "contractor":
      return <ContractorDashboard />;

    default:
      return <OwnerDashboard />;
  }
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/projects/:id" element={<ProjectDetails />} />

        <Route path="/sites" element={<Sites />} />
        <Route path="/sites/:id" element={<SiteDetails />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
