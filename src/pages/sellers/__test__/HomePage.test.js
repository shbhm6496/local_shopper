import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../store";
import SellerHomePage from "../HomePage";

const renderWithRedux = ({ children }) => {
  <Provider store={store}>{children}</Provider>;
};

const mockHomePage = () => {
  renderWithRedux(
    <MemoryRouter>
      <SellerHomePage />
    </MemoryRouter>
  );
};
describe("Home Page ", () => {
  test("Should render", () => {
    render(<mockHomePage />);
    screen.debug();
  });
  test("Should Display", () => {
    render(<mockHomePage />);
    expect(screen.findByText("Start your online business now")).toBeDefined;
  });
  test("should routre to", () => {
    render(<mockHomePage />);
  });
});
