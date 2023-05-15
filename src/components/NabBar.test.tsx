import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

jest.mock("./InitialNavbar", () => () => "InitialNavbar");
jest.mock("./RegistrationNavBar", () => () => "RegistrationNavBar");

describe("InitialNavbar test:", () => {
  it("should display InitialNavbar on the page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText("InitialNavbar")).toBeInTheDocument();
  });

  it("should display RegistrationNavBar on the page", () => {
    render(
      <MemoryRouter initialEntries={["/regteacher"]}>
        <NavBar />
      </MemoryRouter>
    );
    expect(screen.getByText("RegistrationNavBar")).toBeInTheDocument();
  });
});
