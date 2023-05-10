import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import RegistrationPage from "../pages/RegistrationPage";
import UserPage from "../pages/UserPage";
import ProtectedRouter from "./ProtectedRoute";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="/regstudent" element={<RegistrationPage />} />
      <Route path="/regteacher" element={<RegistrationPage />} />
      <Route
        path="userpage"
        element={
          <ProtectedRouter>
            <UserPage />
          </ProtectedRouter>
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RoutesComponent;
