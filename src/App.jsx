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

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

  const renderDashboard = () => {
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
  };

  return <Layout>{renderDashboard()}</Layout>;
}

export default App;
