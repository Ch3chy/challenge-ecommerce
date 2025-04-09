import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MenuItem from "./menu-item";

describe("Componente MenuItem", () => {
  const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it("debería renderizar el label", () => {
    const { container } = renderWithRouter(
      <MenuItem
        icon="House"
        label="Home"
        path="/home"
        active={false}
        className=""
      />
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("debería incluir una clase adicional si se proporciona", () => {
    renderWithRouter(
      <MenuItem
        icon="House"
        label="Home"
        path="/home"
        active={false}
        className="custom-class"
      />
    );

    const linkElement = screen.getByRole("link", { name: /home/i });
    expect(linkElement).toHaveClass("custom-class");
  });

  it("debería renderizar sin label si no se proporciona", () => {
    renderWithRouter(
      <MenuItem
        icon="House"
        label=""
        path="/home"
        active={false}
        className=""
      />
    );

    expect(screen.queryByText("Home")).not.toBeInTheDocument();
  });
});
