import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import InitialNavbar from "./InitialNavbar";

describe("InitialNavbar test:", () => {
  it("should render the component", () => {
    render(<InitialNavbar />, { wrapper: BrowserRouter });
    expect(screen.getByText("Найти преподавателя")).toBeInTheDocument();
  });

  it("should navigate to the correct url when user clicked on link", () => {
    render(<InitialNavbar />, { wrapper: BrowserRouter });

    fireEvent.click(screen.getByText("Найти преподавателя"));
    expect(global.window.location.pathname).toBe("/");

    fireEvent.click(screen.getByText("Стать преподавателем"));
    expect(global.window.location.pathname).toBe("/");

    fireEvent.click(screen.getByText("Войти"));
    expect(global.window.location.pathname).toBe("/");

    fireEvent.click(screen.getByText("Зарегистрироваться"));
    expect(global.window.location.pathname).toBe("/registration");
  });

  it("should check src attribute of logo", () => {
    render(<InitialNavbar />, { wrapper: BrowserRouter });
    const image = screen.getByAltText("logo");
    expect(image.getAttribute("src")).toEqual("logo.png");
  });
});
