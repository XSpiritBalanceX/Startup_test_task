import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/AuthPage.scss";
import LoginForm from "../components/LoginForm";

const mainPicture = require("../images/mainPicture.png");

const AuthPage = () => {
  const location = useLocation();
  const isRegistrForm = location.pathname === "/registration";
  return (
    <Container className="authPageContainer">
      <Row>
        <Col>
          <Row className="mainWords">
            <p>
              <span>TUTOR</span> <i className="bi bi-dash-lg"></i> платформа для
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
        <Col>
          {isRegistrForm ? <div>registration Form</div> : <LoginForm />}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;