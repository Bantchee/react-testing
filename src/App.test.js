import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App compnent", () => {
  test("renders Magnificent Monkeys", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot()
  });

  test("renders Radical Rhinos after button click", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me!" });

    userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/Radical Rhinos/i);
  });
});
