import { render, screen } from "@testing-library/react";
import Message from "../Message";

test("should first", () => {
  render(<Message />);
  screen.debug();
});

test("should go", () => {
  render(<Message children="hello" />);
  expect(screen.getByText("hello")).toBeInTheDocument;
});
