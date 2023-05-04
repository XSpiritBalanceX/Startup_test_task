import { Container, Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/RegistrationNavbar.scss";

const logo = require("../images/logo.png");
const student = require("../images/student.jpg");
const notif = require("../images/notif.png");
const message = require("../images/message.png");

const RegistrationNavBar = () => {
  return (
    <Container className="registrationNavbar">
      <Row>
        <Col>
          <img src={logo} alt="logo" className="logo" />
        </Col>
        <Col>
          <InputGroup>
            <Form.Control placeholder="Баланс ($)" />
            <InputGroup.Text>50</InputGroup.Text>
          </InputGroup>
          <Form.Select className="mb-3">
            <option hidden>USD</option>
            <option value="1">USD</option>
            <option value="2">BYN</option>
          </Form.Select>
          <Button>Пополнить</Button>
        </Col>
        <Col>
          <Form.Select className="mb-3">
            <option hidden>RU</option>
            <option value="1">RU</option>
            <option value="2">EN</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <NavLink to={"/regstudent"}>Мои уроки</NavLink>
          <NavLink to={"/regstudent"}>Найти преподавателя</NavLink>
          <NavLink to={"/regstudent"}>Пригласить друга</NavLink>
        </Col>
        <Col className="personalGroup">
          <img src={notif} alt="notification" />
          <img src={message} alt="message" />
          <img src={student} alt="student" />
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationNavBar;
