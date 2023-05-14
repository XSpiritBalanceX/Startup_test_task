import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hook";
import * as userSelectors from "../store/selectors";

interface ProtectedRouterProps {
  children: JSX.Element;
}

const ProtectedRouter = ({ children }: ProtectedRouterProps) => {
  const token = localStorage.getItem("access_token");
  const isLogin = useAppSelector(userSelectors.isLoginSelect);
  if (!token || !isLogin) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default ProtectedRouter;
