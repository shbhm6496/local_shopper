import { render, screen } from "@testing-library/react";
import HomePage from "../HomePage";

test("Home Page should render", () => {
  render(<HomePage />);
  screen.debug();
});

test("should contain", () => {
  render(<HomePage />);
  expect(screen.findByText(/Welcome to Local Shoppers/i)).toBeInTheDocument;
});
