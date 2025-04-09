import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SideMenu from "./sidemenu";
import { MenuItemProps } from "./sidemenu.types";

describe("Componente SideMenu", () => {
  const mockMenuItems: MenuItemProps[] = [
    { icon: "ArrowArcRight", label: "Home", path: "/", active: true },
    { icon: "House", label: "About", path: "/about", active: false },
  ];

  const mockFooterItems: MenuItemProps[] = [
    { icon: "ShoppingCart", label: "Contact", path: "/contact", active: false },
  ];

  it("renderiza el logo", () => {
    render(
      <Router>
        <SideMenu menuItems={mockMenuItems} footerItems={mockFooterItems} />
      </Router>
    );
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
  });

  it("renderiza los elementos del menú", () => {
    render(
      <Router>
        <SideMenu menuItems={mockMenuItems} footerItems={mockFooterItems} />
      </Router>
    );
    mockMenuItems.forEach((item) => {
      expect(screen.getByText(item.label || "")).toBeInTheDocument();
    });
  });

  it("renderiza los elementos del footer del menu", () => {
    render(
      <Router>
        <SideMenu menuItems={mockMenuItems} footerItems={mockFooterItems} />
      </Router>
    );
    mockFooterItems.forEach((item) => {
      expect(screen.getByText(item.label || "")).toBeInTheDocument();
    });
  });

  it("aplica una clase personalizada", () => {
    const customClass = "custom-class";
    render(
      <Router>
        <SideMenu
          menuItems={mockMenuItems}
          footerItems={mockFooterItems}
          className={customClass}
        />
      </Router>
    );
    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass(customClass);
  });
});
