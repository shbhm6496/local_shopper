import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import store from "../../../store";

const renderWithRedux = ({ children }) => {
  render(<Provider store={store}>{children}</Provider>);
};

test("Not Found Must Contain", () => {
  renderWithRedux(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );
  expect(screen.findByText(/you are lost, let me help/i)).toBeInTheDocument;
});

// test("Not Found Page should contains", () => {
//   render(<NotFoundPage />);
//   expect(screen.findByText(/you are lost, let me help to/i)).toBeInTheDocument;
//   expect(screen.findByText(/you are lost, let me help to/i)).toBeInTheDocument;
// });
