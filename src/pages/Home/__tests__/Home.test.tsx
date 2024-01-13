import { render, screen } from "@testing-library/react";
import Home from "..";

describe("Home Page", () => {
  it("should load Home Page 1", () => {
    render(<Home />);
    expect(screen.findByText("Home Page")).toBeDefined();
  });

  it("should load Home Page 2", () => {
    const { container } = render(<Home />);
    expect(container).toContainHTML("Home Page");
  });
});
