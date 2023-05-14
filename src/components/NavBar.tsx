import { useLocation } from "react-router-dom";
import InitialNavbar from "./InitialNavbar";
import RegistrationNavBar from "./RegistrationNavbar";

const NavBar = () => {
  const location = useLocation();
  const isInitialNavbar =
    location.pathname === "/" || location.pathname === "/registration";
  return (
    <div>{isInitialNavbar ? <InitialNavbar /> : <RegistrationNavBar />}</div>
  );
};

export default NavBar;
