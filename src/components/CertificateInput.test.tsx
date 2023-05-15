import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CertificateInput from "./CertificateInput";

jest.mock("./Icon", () => () => "Icon");

describe("CertificateInput test:", () => {
  it("should render the component", () => {
    render(<CertificateInput />);
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });

  it("should check if user can upload some file", async () => {
    render(<CertificateInput />);
    const file = new File(["test content"], "test-picture.png", {
      type: "image/png",
    });
    const files = [file];
    const inputElement = screen.getByLabelText("Icon");
    user.upload(inputElement, files);
    expect(await screen.findByText("test-picture.png")).toBeInTheDocument();
    expect(await screen.findByText("0 kB")).toBeInTheDocument();
  });
});
