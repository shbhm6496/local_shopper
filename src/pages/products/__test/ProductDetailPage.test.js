import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import ProductDetailPage from "../ProductDetailPage";
import store from "../../../store";

const renderWithRedux = ({ children }) => {
  render(<Provider store={store}>{children}</Provider>);
};

const mockProductDetailPage = ({ children }) => {
  renderWithRedux(
    <MemoryRouter>
      <ProductDetailPage {...children} />
    </MemoryRouter>
  );
};
describe("Product Details Page", () => {
  test("Product Detail Page should Render", () => {
    render(<mockProductDetailPage />);
    screen.debug();
  });

  test("is loader working on first render", () => {
    render(<mockProductDetailPage />);
    const isLoaderElement = screen.findByDisplayValue(/loading/i);
    expect(isLoaderElement).toBeVisible;
  });

  // test("modal visible on Click", () => {
  //   <mockProductDetailPage />;
  //   const deleteBtnElement = screen.findByTestId("delete-button");
  //   const modalElement = screen.getByTestId("delete-modal");
  //   fireEvent.click(screen.getByRole("button", { name: "Delete" }));
  //   expect(screen.getByTestId("delete-modal")).toBeVisible;
  // });
});
