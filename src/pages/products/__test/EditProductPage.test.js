import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import EditProductPage from "../EditProductPage";
import store from "../../../store";
import { MemoryRouter } from "react-router-dom";

const match = { params: { product_id: "demo" } };
const renderWithRedux = ({ children }) => {
  render(<Provider store={store}>{children}</Provider>);
};

const mockEditProductPage = ({ children }) => {
  renderWithRedux(
    <MemoryRouter>
      <EditProductPage {...children} />
    </MemoryRouter>
  );
};
describe("first Edit Product Page", () => {
  test("should render correctly", () => {
    <mockEditProductPage match={match} />;
    screen.debug();
  });

  test("is loader working", () => {
    <mockEditProductPage match={match} />;
    expect(screen.findByDisplayValue("Loading...")).toBeInTheDocument;
  });
});
