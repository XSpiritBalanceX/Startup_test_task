import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/RegistrationForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface IRegistrationForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmpassword: string;
  policy: boolean;
}

const RegistrationForm = () => {
  const validationSchemaRegistration = Yup.object().shape({
    first_name: Yup.string().required("*Имя обезательно"),
    last_name: Yup.string().required("*Фамилия обезательна"),
    email: Yup.string().required("*Email обязателен").email("*Неверный email"),
    password: Yup.string()
      .required("*Пароль обязателен")
      .min(6, "*Пароль должен состьять из 6 символов")
      .max(20, "*Пароль не может иметь больше 20 сиволов"),
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

  const onSubmiRegistration = (data: IRegistrationForm) => {
    console.log(data);
  };
  return (
    <Container className="containerFormRegistration">
      <p>Регистрация</p>
      <div className="radioButton">
        <p>Зарегистрироваться как:</p>
        <Form.Check inline label="Ученик" name="student" type="radio" />
        <Form.Check inline label="Преподаватель" name="teacher" type="radio" />
      </div>
      <Form className="mt-4" onSubmit={handleSubmit(onSubmiRegistration)}>
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
            type="password"
            placeholder="Пароль"
            {...register("password")}
          />
          <span className="errorMessage">{errors.password?.message}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Пароль"
            {...register("confirmpassword")}
          />
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
