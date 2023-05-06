import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { language, level } from "../utility/Language";
import CertificateInput from "./CertificateInput";

interface LanguageRowProps {
  isStudent: boolean;
  cbDecreaseRow: () => void;
  cbRegister: Function;
  cbError: any;
}

const LanguageRow = ({
  isStudent,
  cbDecreaseRow,
  cbRegister,
  cbError,
}: LanguageRowProps) => {
  const deleteRow = () => {
    cbDecreaseRow();
  };
  console.log(cbRegister);
  return (
    <React.Fragment>
      <Row className="languageRow">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>
                {isStudent ? "Язык для изучения" : "Язык преподавания"}
              </Form.Label>
              <Form.Select
                className="registrationSelect mb-3"
                {...cbRegister("language")}
              >
                <option hidden value={""}>
                  Выберете язык
                </option>
                {language.map((el, ind) => {
                  return (
                    <option key={ind} value={ind}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
              <span className="errorMessage">{cbError.language?.message}</span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Уровень владения</Form.Label>
              <Form.Select
                className="registrationSelect mb-3"
                {...cbRegister("level")}
              >
                <option hidden value={""}>
                  Выберете уровень
                </option>
                {level.map((el, ind) => {
                  return (
                    <option key={ind} value={ind}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
              <span className="errorMessage">{cbError.level?.message}</span>
            </Form.Group>
          </Col>
        </Row>
        {isStudent && (
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Цель изучения</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Введите текст"
                  {...cbRegister("description")}
                />
                <span className="errorMessage">
                  {cbError.description?.message}
                </span>
              </Form.Group>
            </Col>
          </Row>
        )}
        {!isStudent && (
          <Row>
            <CertificateInput />
            <Col className="priceLesson">
              <Form.Group>
                <Form.Label>Стоимость занятия (USD)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите стоимость"
                  {...cbRegister("price")}
                />
                <span className="errorMessage">{cbError.price?.message}</span>
              </Form.Group>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <Button onClick={deleteRow} className="deleteLanguageButton">
              Удалить язык
            </Button>
          </Col>
        </Row>
      </Row>
    </React.Fragment>
  );
};

export default LanguageRow;
