import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Icon from "./Icon";
import { collectionIconsClassName } from "../utility/IconsClassName";

describe("Footer test:", () => {
  it("should render the component", () => {
    render(<Icon name="plus" />);
    const expectedClassName = collectionIconsClassName.find(
      (el) => el.name === "plus"
    )?.classname!;
    expect(screen.getByRole("icon")).toHaveClass(expectedClassName);
  });
});
