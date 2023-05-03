import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/Form.scss";

const LoginForm = () => {
  return (
    <Container className="containerForm">
      <p>Вход</p>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль" />
        </Form.Group>
        <NavLink to={"/"} className="nav-link">
          Забыли пароль?
        </NavLink>
        <Button className="mt-3">Войти</Button>
        <div className="mt-2">
          <p>У вас ещё нет аккаунта?</p>
          <NavLink to={"/"} className="nav-link">
            Зарегистрироваться
          </NavLink>
        </div>
      </Form>
      <div className="socialNetwork mt-2">
        <p>или</p>
        <p>Войдите с помощью</p>
        <ul>
          <li>
            <i className="bi bi-facebook"></i>
          </li>
          <li>
            <i className="bi bi-twitter"></i>
          </li>
          <li>
            <i className="bi bi-google"></i>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default LoginForm;
