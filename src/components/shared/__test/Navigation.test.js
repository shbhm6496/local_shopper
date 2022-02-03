import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../store";
import Navigation from "../Navigation";

const renderWithRedux = ({ children }) => {
  render(<Provider store={store}>{children}</Provider>);
};

test("should first", () => {
  renderWithRedux(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  screen.debug();
});
