import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { language, level } from "../utility/Language";
import CertificateInput from "./CertificateInput";

interface LanguageRowProps {
  isStudent: boolean;
  cbDecreaseRow: () => void;
}

const LanguageRow = ({ isStudent, cbDecreaseRow }: LanguageRowProps) => {
  const deleteRow = () => {
    cbDecreaseRow();
  };

  return (
    <React.Fragment>
      <Row className="languageRow">
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>
                {isStudent ? "Язык для изучения" : "Язык преподавания"}
              </Form.Label>
              <Form.Select className="registrationSelect mb-3">
                <option hidden>Выберете язык</option>
                {language.map((el, ind) => {
                  return (
                    <option key={ind} value={ind}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Уровень владения</Form.Label>
              <Form.Select className="registrationSelect mb-3">
                <option hidden>Выберете уровень</option>
                {level.map((el, ind) => {
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
        {isStudent && (
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Цель изучения</Form.Label>
                <Form.Control as="textarea" placeholder="Введите текст" />
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
                <Form.Control type="text" placeholder="Введите стоимость" />
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
