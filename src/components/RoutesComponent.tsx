import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RoutesComponent;
