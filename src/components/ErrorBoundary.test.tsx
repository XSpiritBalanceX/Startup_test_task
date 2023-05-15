import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary test:", () => {
  it("should renders its children without throwing an error", () => {
    const mockChild = <div>Child component</div>;
    render(<ErrorBoundary>{mockChild}</ErrorBoundary>);

    expect(screen.getByText("Child component")).toBeInTheDocument();
  });
});
