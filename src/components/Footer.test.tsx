import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer test:", () => {
  it("should render the component", () => {
    render(<Footer />);
    expect(screen.getByText("О компании")).toBeInTheDocument();
  });

  it("should check src attribute of logo", () => {
    render(<Footer />);
    const image = screen.getByAltText("logo");
    expect(image.getAttribute("src")).toEqual("logoWhite.png");
  });
});
