import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import AuthPage from "./AuthPage";

jest.mock("../components/LoginForm", () => () => "LoginForm");
jest.mock("../components/RegiatrationForm", () => () => "RegistrationForm");
jest.mock("../components/Icon", () => () => "Icon");

describe("RegistrationPage test:", () => {
  it("should render the registration form if pathname=registration", () => {
    const registrationRoute = "/registration";
    render(
      <MemoryRouter initialEntries={[registrationRoute]}>
        <AuthPage />
      </MemoryRouter>
    );
    expect(screen.getByText("RegistrationForm")).toBeInTheDocument();
  });

  it("should render the login form if pathname=login", () => {
    const loginRoute = "/login";
    render(
      <MemoryRouter initialEntries={[loginRoute]}>
        <AuthPage />
      </MemoryRouter>
    );
    expect(screen.getByText("LoginForm")).toBeInTheDocument();
  });

  it("should check src attribute of image", () => {
    render(<AuthPage />, { wrapper: BrowserRouter });
    const image = screen.getByAltText("main");
    expect(image.getAttribute("src")).toEqual("mainPicture.png");
  });
});
