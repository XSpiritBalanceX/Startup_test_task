import React, { useState } from "react";
import { Container, Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/RegistrationNavbar.scss";

const logo = require("../images/logo.png");
const student = require("../images/student.jpg");
const notif = require("../images/notif.png");
const message = require("../images/message.png");

const RegistrationNavBar = () => {
  const [sum, setSum] = useState<string>("");
  const [currentSum, setCurrentSum] = useState<number>(50);
  const handleSetSum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSum(e.currentTarget.value);
  };
  const handleSetCurrentSum = () => {
    setCurrentSum((state) => state + Number(sum));
    setSum("");
  };
  return (
    <Container className="registrationNavbar">
      <Row>
        <Col>
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </Col>
        <Col>
          <InputGroup>
            <Form.Control
              placeholder="Баланс ($)"
              onChange={handleSetSum}
              value={sum}
            />
            <InputGroup.Text>{currentSum}</InputGroup.Text>
          </InputGroup>
          <Form.Select className="mb-3">
            <option hidden>USD</option>
            <option value="1">USD</option>
            <option value="2">BYN</option>
          </Form.Select>
          <Button onClick={handleSetCurrentSum}>Пополнить</Button>
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
          <NavLink to={"/"}>Мои уроки</NavLink>
          <NavLink to={"/"}>Найти преподавателя</NavLink>
          <NavLink to={"/"}>Пригласить друга</NavLink>
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
