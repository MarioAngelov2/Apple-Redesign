import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "@/app/components/nav/Navbar";

test("Renders Navbar component", () => {
    render(<Navbar />);
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
});

test("Changes background when scrolling", () => {
    render(<Navbar />);
    const navbar = screen.getByTestId("navbar");

    fireEvent.scroll(window, { target: { scrollY: 70 } });

    expect(navbar).toHaveClass("bg-black/75");
});

test("Displays mobile menu when icon is clicked", () => {
    render(<Navbar />);
    const mobileMenuIcon = screen.getByTestId("mobile-menu-icon");

    fireEvent.click(mobileMenuIcon);
    
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeInTheDocument();
});

test("Applies styling interaction", () => {
    render(<Navbar />);
    const searchIcon = screen.getByTestId('search-icon');

    fireEvent.mouseOver(searchIcon);

    expect(searchIcon).toHaveClass('linkHover')
})
