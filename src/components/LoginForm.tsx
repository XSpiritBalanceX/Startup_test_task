import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/LoginForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { APIUser } from "../utility/axiosWrapper";
import { useAppDispatch } from "../store/hook";
import { loginUser } from "../store/userSlice";

interface ILoginForm {
  email: string;
  password: string;
}

interface IResponseLogin {
  access_token: string;
  refresh_token: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [passShowHide, setPassShowHide] = useState(true);
  const handleShowHidePassword = () => {
    setPassShowHide(!passShowHide);
  };

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

  const onSubmitLogin = async (data: ILoginForm) => {
    const dataResponse: IResponseLogin = await APIUser.signInUser({
      email: data.email,
      password: data.password,
      device: "postman",
    });
    if (dataResponse) {
      dispatch(loginUser(true));
      localStorage.setItem("access_token", dataResponse.access_token);
      localStorage.setItem("refresh_token", dataResponse.refresh_token);
      navigate("/userpage");
    }
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
            type={passShowHide ? "password" : "text"}
            placeholder="Пароль"
            {...register("password")}
          />
          <Button onClick={handleShowHidePassword} className="showHideButton">
            {passShowHide ? (
              <i className="bi bi-eye-slash"></i>
            ) : (
              <i className="bi bi-eye"></i>
            )}
          </Button>
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
