import { render, screen } from "@testing-library/react";
import Title from "./title";

describe("Componente Title", () => {
  it("renderiza el texto pasado", () => {
    render(<Title>Test Title</Title>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("aplica la clase proporcionada", () => {
    render(<Title className="custom-class">Test Title</Title>);
    const container = screen.getByText("Test Title").parentElement;
    expect(container).toHaveClass("custom-class");
  });
});
