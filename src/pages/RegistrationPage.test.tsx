import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";

jest.mock("../components/StudentForm", () => () => "StudentForm");
jest.mock("../components/TeacherForm", () => () => "TeacherForm");

describe("RegistrationPage test:", () => {
  it("should render the student registration form if pathname=regstudent", () => {
    const studentRoute = "/regstudent";
    render(
      <MemoryRouter initialEntries={[studentRoute]}>
        <RegistrationPage />
      </MemoryRouter>
    );
    expect(screen.getByText("StudentForm")).toBeInTheDocument();
  });

  it("should render the student registration form if pathname=regteacher", () => {
    const teacherRoute = "/regteacher";
    render(
      <MemoryRouter initialEntries={[teacherRoute]}>
        <RegistrationPage />
      </MemoryRouter>
    );
    expect(screen.getByText("TeacherForm")).toBeInTheDocument();
  });
});
