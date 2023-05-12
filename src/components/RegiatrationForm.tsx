import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/RegistrationForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { APIUser } from "./axiosWrapper";
import { useAppDispatch } from "../store/hook";
import { loginUser } from "../store/userSlice";

YupPassword(Yup);

interface IRegistrationForm {
  user_type: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmpassword: string;
  policy: boolean;
}

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [passShowHide, setPassShowHide] = useState(true);
  const [confirmPassShowHide, setConfirmPassShowHide] = useState(true);
  const handleShowHidePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.name === "password" && setPassShowHide(!passShowHide);
    e.currentTarget.name === "confirmPass" &&
      setConfirmPassShowHide(!confirmPassShowHide);
  };

  const validationSchemaRegistration = Yup.object().shape({
    user_type: Yup.string()
      .oneOf(["0", "1"])
      .required("*Выберите способ регистрации"),
    first_name: Yup.string().required("*Имя обезательно"),
    last_name: Yup.string().required("*Фамилия обезательна"),
    email: Yup.string().required("*Email обязателен").email("*Неверный email"),
    password: Yup.string()
      .required("*Пароль обязателен")
      .min(6, "*Пароль должен состоять из 8 символов")
      .max(20, "*Пароль не может иметь больше 32 сиволов")
      .minLowercase(1, "*Пароль должен содержать хотя бы 1 строчную букву")
      .minUppercase(1, "*Пароль должен содержать хотя бы 1 заглавную букву")
      .minNumbers(1, "*Пароль должен содержать хотя бы 1 цифру"),
    confirmpassword: Yup.string()
      .required("*Повторите пароль")
      .oneOf([Yup.ref("password")], "*Пароли не совпадают"),
    policy: Yup.boolean().oneOf([true], "*Вы должны согласиться"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(validationSchemaRegistration),
  });

  const onSubmiRegistration = async (data: IRegistrationForm) => {
    const dataResponse = await APIUser.signUpBaseUser({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      device: "postman",
      user_type: Number(data.user_type),
    });
    if (dataResponse) {
      dispatch(loginUser(true));
      localStorage.setItem("access_token", dataResponse.access_token);
      localStorage.setItem("refresh_token", dataResponse.refresh_token);
      data.user_type === "0"
        ? navigate("/regstudent")
        : navigate("/regteacher");
    }
  };

  return (
    <Container className="containerFormRegistration">
      <p>Регистрация</p>
      <Form className="mt-4" onSubmit={handleSubmit(onSubmiRegistration)}>
        <div className="radioButton">
          <p>Зарегистрироваться как:</p>
          <Form.Group>
            <Form.Check
              inline
              id="0"
              value={"0"}
              label="Ученик"
              type="radio"
              {...register("user_type")}
            />
            <Form.Check
              inline
              label="Преподаватель"
              type="radio"
              id="1"
              value={"1"}
              {...register("user_type")}
            />
            <span className="errorMessage">{errors.user_type?.message}</span>
          </Form.Group>
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            placeholder="Имя"
            {...register("first_name")}
          />
          <span className="errorMessage">{errors.first_name?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control
            type="text"
            placeholder="Фамилия"
            {...register("last_name")}
          />
          <span className="errorMessage">{errors.last_name?.message}</span>
        </Form.Group>
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
          <Form.Label>Придумайте пароль</Form.Label>
          <Form.Control
            type={passShowHide ? "password" : "text"}
            placeholder="Пароль"
            {...register("password")}
          />
          <Button
            name="password"
            onClick={handleShowHidePassword}
            className="showHideButton"
          >
            {passShowHide ? (
              <i className="bi bi-eye-slash"></i>
            ) : (
              <i className="bi bi-eye"></i>
            )}
          </Button>
          <span className="errorMessage">{errors.password?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control
            type={confirmPassShowHide ? "password" : "text"}
            placeholder="Пароль"
            {...register("confirmpassword")}
          />
          <Button
            name="confirmPass"
            onClick={handleShowHidePassword}
            className="showHideButton"
          >
            {confirmPassShowHide ? (
              <i className="bi bi-eye-slash"></i>
            ) : (
              <i className="bi bi-eye"></i>
            )}
          </Button>
          <span className="errorMessage">
            {errors.confirmpassword?.message}
          </span>
        </Form.Group>
        <Form.Check
          className="policy"
          label="Я согласен с условиями политики обработки персональных данных"
          type="checkbox"
          {...register("policy")}
        />
        <span className="errorMessage">{errors.policy?.message}</span>
        <Button className="mt-3" type="submit">
          Зарегистрироваться
        </Button>
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
