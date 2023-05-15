import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EmailNotification from "./EmailNotification";

jest.mock("./Icon", () => () => "Icon");

describe("EmailNotification test:", () => {
  it("should render the component", () => {
    render(<EmailNotification />, { wrapper: BrowserRouter });
    expect(
      screen.getByText(
        "Ваш email не подтвержден. Пожалуйста перейдите в почту."
      )
    ).toBeInTheDocument();
  });

  it("should return empty body if user clicked on close button", () => {
    render(<EmailNotification />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByText("Icon"));
    expect(
      screen.queryByText(
        "Ваш email не подтвержден. Пожалуйста перейдите в почту."
      )
    ).not.toBeInTheDocument();
  });

  it("should set new url when user clicked on navlink", () => {
    render(<EmailNotification />, { wrapper: BrowserRouter });
    fireEvent.click(screen.getByText("Прислать подтверждение еще раз"));
    expect(global.window.location.href).toContain("http://localhost/");
  });
});
