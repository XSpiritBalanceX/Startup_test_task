import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/RegistrationPage.scss";

const RegistrationPage = () => {
  const location = useLocation();
  const isStudent = location.pathname === "/regstudent";
  return <Container>{isStudent ? <p>student</p> : <p>teacher</p>}</Container>;
};

export default RegistrationPage;
