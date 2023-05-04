import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/RegistrationForm.scss";

const RegistrationForm = () => {
  return (
    <Container className="containerFormRegistration">
      <p>Регистрация</p>
      <div className="radioButton">
        <p>Зарегистрироваться как:</p>
        <Form.Check inline label="Ученик" name="student" type="radio" />
        <Form.Check inline label="Преподаватель" name="teacher" type="radio" />
      </div>
      <Form className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Имя" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control type="text" placeholder="Фамилия" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Придумайте пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <Form.Check
          className="policy"
          label="Я согласен с условиями политики обработки персональных данных"
          name="checkbox"
          type="checkbox"
        />
        <Button className="mt-3">Зарегистрироваться</Button>
        <div className="enteredLink ">
          <p>У вас уже есть аккаунт?</p>
          <NavLink to={"/"} className="nav-link">
            Войти
          </NavLink>
        </div>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
