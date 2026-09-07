import { useSelector } from "react-redux";

import Layout from "./components/Layout";
import OwnerDashboard from "./pages/OwnerDashboard";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);

  return <Layout>{currentUser.role === "owner" && <OwnerDashboard />}</Layout>;
}

export default App;
