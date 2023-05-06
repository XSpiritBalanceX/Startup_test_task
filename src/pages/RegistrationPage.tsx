import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "../styles/RegistrationPage.scss";
import LanguageRow from "../components/LanguageRow";
import { v4 as uuid } from "uuid";
import { countries } from "../utility/Language";
import EmailNotification from "../components/EmailNotification";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const user = require("../images/user.png");

type LearningLanguage = {
  language: string;
  level: string;
  description: string;
};

type TeachingLanguage = {
  language: string;
  level: string;
  description: string;
  price: number;
};

interface IRegistrationPage {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birthday: string;
  country?: string;
  learning_languages?: LearningLanguage[];
  teaching_languages?: TeachingLanguage[];
}

const RegistrationPage = () => {
  const validationSchemaExtendedReg = Yup.object().shape({
    first_name: Yup.string().required("*Имя обезательно"),
    last_name: Yup.string().required("*Фамилия обезательна"),
    email: Yup.string().required("*Email обязателен").email("*Неверный email"),
    date_of_birthday: Yup.string()
      .required("*Дата рождения обязательна")
      .min(10, "*Дата рождения в формате ДД.ММ.ГГГГ")
      .max(10, "*Дата рождения в формате ДД.ММ.ГГГГ"),
    country: Yup.string().required("*Выберете Вашу страну"),
    language: Yup.string().required("*Выберете язык"),
    level: Yup.string().required("*Выберете уровень владения"),
    description: Yup.string().required("*Заполните цель изучения"),
    price: Yup.string().required("*Укажите стоимость занятия"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationPage>({
    resolver: yupResolver(validationSchemaExtendedReg),
  });
  const onSubmitRegistration = (data: IRegistrationPage) => {
    console.log(data);
  };
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
        cbRegister={register}
        cbError={errors}
      />
    ));

  return (
    <Container className="registrationPageContainer">
      <Form onSubmit={handleSubmit(onSubmitRegistration)}>
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
              <Form.Control
                type="text"
                placeholder="Имя"
                {...register("first_name")}
              />
              <span className="errorMessage">{errors.first_name?.message}</span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                placeholder="Фамилия"
                {...register("last_name")}
              />
              <span className="errorMessage">{errors.last_name?.message}</span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              <span className="errorMessage">{errors.email?.message}</span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control
                type="text"
                placeholder="01.01.2000"
                {...register("date_of_birthday")}
              />
              <span className="errorMessage">
                {errors.date_of_birthday?.message}
              </span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <EmailNotification />
          </Col>
          <Col>
            {!isStudent && (
              <Form.Group>
                <Form.Label>Откуда вы?</Form.Label>
                <Form.Select
                  className="registrationSelect mb-3"
                  {...register("country")}
                >
                  <option hidden value={""}>
                    Выберете страну
                  </option>
                  {countries.map((el, ind) => {
                    return (
                      <option key={ind} value={ind}>
                        {el}
                      </option>
                    );
                  })}
                </Form.Select>
                <span className="errorMessage">{errors.country?.message}</span>
              </Form.Group>
            )}
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
            <Button type="submit">Далее</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RegistrationPage;
