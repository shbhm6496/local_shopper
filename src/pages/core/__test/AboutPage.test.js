import { render, screen } from "@testing-library/react";
import AboutPage from "../AboutUsPage";

test("Home Page should render correct", () => {
  render(<AboutPage />);
  screen.debug();
});

test("Home Page should displays data", () => {
  render(<AboutPage />);
  expect(screen.findByText(/Local Shoppers/i)).toBeInTheDocument;
  expect(screen.findByText(/Online Store for Local, By Local/i))
    .toBeInTheDocument;
});
