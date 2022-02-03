import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import AddProductPage from "../AddProductPage";
import store from "../../../store";
import { MemoryRouter } from "react-router-dom";

const match = { params: { category_id: "hello" } };

const renderWithRedux = ({ children }) => {
  render(<Provider store={store}>{children}</Provider>);
};

const mockAddProductPage = ({ children }) => {
  renderWithRedux(
    <MemoryRouter>
      <AddProductPage {...children} />
    </MemoryRouter>
  );
};

describe("Add Product Page", () => {
  test("Add Product Page Should render", () => {
    render(<mockAddProductPage />);
    screen.debug();
  });
  test("Loader Works Fine", () => {
    render(<mockAddProductPage />);
    expect(screen.findByDisplayValue("Loading...")).toBeInTheDocument;
  });
  // test("Considering Same Data", () => {
  //   render(<mockAddProductPage />);
  //   const inputElementName = screen.getByPlaceholderText("iPhone 13");
  //   const inputElementdescription =
  //     screen.getByPlaceholderText("Best iPhone Ever");
  //   const inputElementprice = screen.getByPlaceholderText("90000");
  //   const inputElementQuantity = screen.getByPlaceholderText("5");
  //   const buttonSaveEle = screen.findByRole("button", { name: "Save" });
  //   fireEvent.change(inputElementName);
  //   fireEvent.change(inputElementdescription);
  //   fireEvent.change(inputElementprice);
  //   fireEvent.change(inputElementQuantity);

  //   fireEvent.click(buttonSaveEle);
  // });
});
