import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import "../styles/RegistrationPage.scss";
import { v4 as uuid } from "uuid";
import { countries } from "../utility/Language";
import EmailNotification from "../components/EmailNotification";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import TeacherRow from "./TeacherRow";
import { APIUser } from "./axiosWrapper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const user = require("../images/user.png");

type TeacherLanguage = {
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
  country: string;
  skills: string;
  teaching_languages: TeacherLanguage[];
}

const TeacherForm = () => {
  const navigate = useNavigate();

  const validationSchemaTeacherReg = Yup.object().shape({
    first_name: Yup.string().required("*Имя обезательно"),
    last_name: Yup.string().required("*Фамилия обезательна"),
    email: Yup.string().required("*Email обязателен").email("*Неверный email"),
    date_of_birthday: Yup.string()
      .required("*Дата рождения обязательна")
      .min(10, "*Дата рождения в формате ДД.ММ.ГГГГ")
      .max(10, "*Дата рождения в формате ДД.ММ.ГГГГ"),
    country: Yup.string().required("*Выберете Вашу страну"),
    skills: Yup.string().required("*Укажите Ваши навыки"),
    teaching_languages: Yup.array().of(
      Yup.object({
        language: Yup.string().required("*Выберете язык"),
        level: Yup.string().required("*Выберете уровень владения"),
        description: Yup.string().default("qweqweqwe"),
        price: Yup.number()
          .required("*Укажите стоимость занятия")
          .typeError("*Укажите стоимость занятия"),
      })
    ),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationPage>({
    resolver: yupResolver(validationSchemaTeacherReg),
  });

  const onSubmitRegistration = async (data: IRegistrationPage) => {
    const dataResponse = await APIUser.signupTeacher({
      date_of_birthday: data.date_of_birthday.split(".").reverse().join("-"),
      country: data.country,
      teaching_languages: data.teaching_languages,
    });
    if (dataResponse) {
      toast.success("Вы успешно зарегистрировались");
      navigate("/userpage");
    }
  };

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
    .map((_, ind) => (
      <TeacherRow
        key={uuid()}
        id={ind}
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
              <Button type="button">Удалить</Button>
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
                    <option key={ind} value={el}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
              <span className="errorMessage">{errors.country?.message}</span>
            </Form.Group>
          </Col>
        </Row>
        {formRow}
        <div className="roundButton">
          <Button type="button" onClick={increaseRow}>
            <i className="bi bi-plus"></i>
          </Button>
          <p>Добавить язык преподавания</p>
        </div>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Опишите свои профессиональные навыки</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Введите текст"
                {...register("skills")}
              />
              <span className="errorMessage">{errors.skills?.message}</span>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="buttonNext">
            <Button type="submit">Далее</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default TeacherForm;
