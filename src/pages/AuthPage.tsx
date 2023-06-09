import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegiatrationForm";
import Icon from "../components/Icon";
import "../styles/AuthPage.scss";

const mainPicture = require("../images/mainPicture.png");

const AuthPage = () => {
  const location = useLocation();
  const isRegistrForm = location.pathname === "/registration";
  return (
    <Container className="authPageContainer">
      <Row className="mainContent">
        <Col>
          <Row className="mainWords">
            <p>
              <span>TUTOR</span> <Icon name="dash" /> платформа для
              онлайн-обучения иностранным языкам
            </p>
          </Row>
          <Row className="firstPicture">
            Занимайтесь онлайн в удобное время суток из любого места{" "}
          </Row>
          <Row className="secondPicture">
            Выбирайте опытных преподавателей со всего мира
          </Row>
          <Row className="mainPicture">
            <img src={mainPicture} title="main picture" alt="main" />
          </Row>
        </Col>
        <Col>{isRegistrForm ? <RegistrationForm /> : <LoginForm />}</Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
