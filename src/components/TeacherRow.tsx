import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { language, level } from "../utility/Language";
import CertificateInput from "./CertificateInput";

interface TeacherRowProps {
  cbDecreaseRow: () => void;
  cbRegister: Function;
  cbError: any;
  id: number;
}

const TeacherRow = ({
  cbDecreaseRow,
  cbRegister,
  cbError,
  id,
}: TeacherRowProps) => {
  const deleteRow = () => {
    cbDecreaseRow();
  };

  return (
    <React.Fragment>
      <Row className="languageRow">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Язык преподавания</Form.Label>
              <Form.Select
                className="registrationSelect mb-3"
                {...cbRegister(`teaching_languages.${id}.language`)}
              >
                <option hidden value={""}>
                  Выберете язык
                </option>
                {language.map((el, ind) => {
                  return (
                    <option key={ind} value={el}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
              <span className="errorMessage">
                {cbError.teaching_languages &&
                  cbError.teaching_languages[id]?.language?.message}
              </span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Уровень владения</Form.Label>
              <Form.Select
                className="registrationSelect mb-3"
                {...cbRegister(`teaching_languages.${id}.level`)}
              >
                <option hidden value={""}>
                  Выберете уровень
                </option>
                {level.map((el, ind) => {
                  return (
                    <option key={ind} value={el}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
              <span className="errorMessage">
                {cbError.teaching_languages &&
                  cbError.teaching_languages[id]?.level?.message}
              </span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <CertificateInput />
          <Col className="priceLesson">
            <Form.Group>
              <Form.Label>Стоимость занятия (USD)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите стоимость"
                {...cbRegister(`teaching_languages.${id}.price`)}
              />
              <span className="errorMessage">
                {cbError.teaching_languages &&
                  cbError.teaching_languages[id]?.price?.message}
              </span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="button"
              onClick={deleteRow}
              className="deleteLanguageButton"
            >
              Удалить язык
            </Button>
          </Col>
        </Row>
      </Row>
    </React.Fragment>
  );
};

export default TeacherRow;
