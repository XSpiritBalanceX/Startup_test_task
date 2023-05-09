import { Route, Routes, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import RegistrationPage from "../pages/RegistrationPage";
import UserPage from "../pages/UserPage";
import { useAppSelector } from "../store/hook";
import * as userSelectors from "../store/selectors";

const RoutesComponent = () => {
  const isLogin = useAppSelector(userSelectors.isLoginSelect);
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/registration" element={<AuthPage />} />
      <Route path="/regstudent" element={<RegistrationPage />} />
      <Route path="/regteacher" element={<RegistrationPage />} />
      {isLogin && <Route path="userpage" element={<UserPage />} />}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default RoutesComponent;
