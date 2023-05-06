import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/LoginForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const validationSchemaLogin = Yup.object().shape({
    email: Yup.string().required("*Email обязателен").email("*Неверный email"),
    password: Yup.string()
      .required("*Пароль обязателен")
      .min(6, "*Пароль должен состьять из 6 символов")
      .max(20, "*Пароль не может иметь больше 20 сиволов"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(validationSchemaLogin),
  });

  const onSubmitLogin = (data: ILoginForm) => {
    console.log(data);
  };
  return (
    <Container className="containerForm">
      <p>Вход</p>
      <Form onSubmit={handleSubmit(onSubmitLogin)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <span className="errorMessage">{errors.email?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Пароль"
            {...register("password")}
          />
          <span className="errorMessage">{errors.password?.message}</span>
        </Form.Group>
        <NavLink to={"/"} className="nav-link">
          Забыли пароль?
        </NavLink>
        <Button className="mt-3" type="submit">
          Войти
        </Button>
        <div className="mt-2">
          <p>У вас ещё нет аккаунта?</p>
          <NavLink to={"/registration"} className="nav-link">
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
