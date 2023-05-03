import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const logo = require("../images/logo.png");

const NavBar = () => {
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
            <Button>
              Ru <i className="bi bi-chevron-compact-down"></i>
            </Button>
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

export default NavBar;
