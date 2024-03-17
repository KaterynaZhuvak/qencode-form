import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ResetPassword from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
