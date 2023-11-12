import { fireEvent, render, screen } from "@testing-library/react";
import SectionIphone from "@/app/components/hero/SectionIphone";

test("Renders SectionIphone component", () => {
    render(<SectionIphone />);
    const sectionIphone = screen.getByTestId("section-iphone");

    expect(sectionIphone).toBeInTheDocument();
});

test("Renders correct text", () => {
    render(<SectionIphone />);
    const sectionIphone = screen.getByTestId("section-iphone");

    expect(sectionIphone).toHaveTextContent("iPhone 15");
    expect(sectionIphone).toHaveTextContent(
        "Нова камера. Нов дизайн. Чуднология."
    );
    expect(sectionIphone).toHaveTextContent("Научи повече →");
});

test("Renders correct image", () => {
    render(<SectionIphone />);
    const sectionIphone = screen.getByTestId("section-iphone");

    const image = screen.getByAltText("iphone15");

    expect(image).toBeInTheDocument();
});
