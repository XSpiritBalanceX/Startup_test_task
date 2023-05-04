import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import RegistrationPage from "../pages/RegistrationPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="/regstudent" element={<RegistrationPage />} />
      <Route path="/regteacher" element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RoutesComponent;
