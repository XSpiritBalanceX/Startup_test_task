import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const logo = require("../images/logo.png");

const InitialNavbar = () => {
  return (
    <Navbar>
      <Container className="navBarContainer">
        <Navbar.Brand>
          <NavLink to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </Navbar.Brand>
        <Nav>
          <div>
            <NavLink to={"/"} className="nav-link">
              Найти преподавателя
            </NavLink>
            <NavLink to={"/"} className="nav-link">
              Стать преподавателем
            </NavLink>
          </div>
          <div>
            <Form.Select className="mb-3">
              <option hidden>RU</option>
              <option value="1">RU</option>
              <option value="2">EN</option>
            </Form.Select>
            <NavLink to={"/"} className="nav-link enterButton">
              Войти
            </NavLink>
            <NavLink to={"/registration"} className="nav-link">
              Зарегистрироваться
            </NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default InitialNavbar;
