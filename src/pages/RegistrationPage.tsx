import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "../styles/RegistrationPage.scss";
import LanguageRow from "../components/LanguageRow";
import { v4 as uuid } from "uuid";
import { countries } from "../utility/Language";
import EmailNotification from "../components/EmailNotification";

const user = require("../images/user.png");

const RegistrationPage = () => {
  const location = useLocation();
  const isStudent = location.pathname === "/regstudent";
  const [countLanguage, setCountLanguage] = useState<number>(1);

  const increaseRow = () => {
    setCountLanguage((value) => {
      return value + 1;
    });
  };

  const decreaseRow = () => {
    setCountLanguage((value) => {
      return value - 1;
    });
  };

  const formRow: Array<JSX.Element> = Array(countLanguage)
    .fill(null)
    .map(() => (
      <LanguageRow
        key={uuid()}
        isStudent={isStudent}
        cbDecreaseRow={decreaseRow}
      />
    ));

  return (
    <Container className="registrationPageContainer">
      <Form>
        <Row className="userPhotos">
          <Col>
            <img src={user} alt="user" />
          </Col>
          <Col>
            <Row>
              <Form.Group>
                <Form.Label htmlFor="photo">Загрузить фото</Form.Label>
                <Form.Control type="file" id="photo" />
              </Form.Group>
              <Button>Удалить</Button>
            </Row>
            <Row>
              <p>Формат JPG, GIF или PNG. Максимальный размер до 800 KB</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" placeholder="Имя" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Фамилия</Form.Label>
              <Form.Control type="text" placeholder="Фамилия" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control type="text" placeholder="01.01.2000" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <EmailNotification />
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Откуда вы?</Form.Label>
              <Form.Select className="registrationSelect mb-3">
                <option hidden>Выберете страну</option>
                {countries.map((el, ind) => {
                  return (
                    <option key={ind} value={ind}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        {formRow}
        <div className="roundButton">
          <Button onClick={increaseRow}>
            <i className="bi bi-plus"></i>
          </Button>
          {isStudent ? (
            <p>Добавить язык для изучения</p>
          ) : (
            <p>Добавить язык преподавания</p>
          )}
        </div>
        <Row>
          <Col className="buttonNext">
            <Button>Далее</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RegistrationPage;
