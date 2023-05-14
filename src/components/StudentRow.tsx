import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { language, level } from "../utility/Language";

interface StudentRowProps {
  cbDecreaseRow: () => void;
  cbRegister: Function;
  cbError: any;
  id: number;
}

const StudentRow = ({
  cbDecreaseRow,
  cbRegister,
  cbError,
  id,
}: StudentRowProps) => {
  const deleteRow = () => {
    cbDecreaseRow();
  };
  return (
    <React.Fragment>
      <Row className="languageRow">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Язык для изучения</Form.Label>
              <Form.Select
                className="registrationSelect mb-3"
                {...cbRegister(`learning_languages.${id}.language`)}
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
                {cbError.learning_languages &&
                  cbError.learning_languages[id]?.language?.message}
              </span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Уровень владения</Form.Label>
              <Form.Select
                className="registrationSelect mb-3"
                {...cbRegister(`learning_languages.${id}.level`)}
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
                {cbError.learning_languages &&
                  cbError.learning_languages[id]?.level?.message}
              </span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Цель изучения</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Введите текст"
                {...cbRegister(`learning_languages.${id}.description`)}
              />
              <span className="errorMessage">
                {cbError.learning_languages &&
                  cbError.learning_languages[id]?.description?.message}
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

export default StudentRow;
