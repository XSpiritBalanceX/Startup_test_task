import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Icon from "./Icon";
import "../styles/Footer.scss";

const logo = require("../images/logoWhite.png");

const Footer = () => {
  return (
    <Container className="footerContainer">
      <Row>
        <Col className="logoFooter">
          <img src={logo} alt="logo" className="logo" />
        </Col>
        <Col className="aboutUs">
          <p>О компании</p>
          <ListGroup>
            <ListGroup.Item>О нас</ListGroup.Item>
            <ListGroup.Item>Найти репетитора</ListGroup.Item>
            <ListGroup.Item>Стать преподавателем</ListGroup.Item>
            <ListGroup.Item>Задать вопрос</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="teachersDiv">
          <p>Преподаватели</p>
          <ListGroup horizontal>
            <ListGroup.Item>Английского</ListGroup.Item>
            <ListGroup.Item>Португальского</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>Испанского</ListGroup.Item>
            <ListGroup.Item>Иврита</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>Немецкого</ListGroup.Item>
            <ListGroup.Item>Японского</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>Китайского</ListGroup.Item>
            <ListGroup.Item>Греческого</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>Русского</ListGroup.Item>
            <ListGroup.Item>Арабского</ListGroup.Item>
          </ListGroup>
          <span>Ещё</span>
        </Col>
        <Col className="emailDiv">
          <p>Связаться с нами</p>
          <p>Email: asktutor24@gmail.com</p>
        </Col>
      </Row>
      <Row className="secondRow">
        <Col className="nullFlex"></Col>
        <Col className="firstFlex">
          <p>Условия использования</p>
        </Col>
        <Col className="secondFlex">
          <p>Политика конфиденциальности</p>
        </Col>
        <Col className="thirdFlex">
          <p>
            <Icon name="coopywriter" /> 2021-2022 All rights reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
