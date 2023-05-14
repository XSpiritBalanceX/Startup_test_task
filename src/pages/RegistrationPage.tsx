import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../styles/RegistrationPage.scss";
import StudentForm from "../components/StudentForm";
import TeacherForm from "../components/TeacherForm";

const RegistrationPage = () => {
  const location = useLocation();
  const isStudent = location.pathname === "/regstudent";

  return (
    <Container className="registrationPageContainer">
      {isStudent ? <StudentForm /> : <TeacherForm />}
    </Container>
  );
};

export default RegistrationPage;
