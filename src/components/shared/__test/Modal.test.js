import { render, screen } from "@testing-library/react";
import ModalForm from "../ModalForm";

const prop = {
  subject: "hello",
  title: "sample title",
  message: "sample message",
};

test("should first", () => {
  render(<ModalForm />);
  screen.debug();
});

test("should props passed", () => {
  render(<ModalForm props={prop} />);
  expect(screen.findByText("sample subject")).toBeDefined();
  expect(screen.findByText("hello")).toBeDefined();
  expect(screen.findByText("sample message")).toBeDefined();
});
