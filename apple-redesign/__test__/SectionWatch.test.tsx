import { fireEvent, render, screen } from "@testing-library/react";
import SectionWatch from "@/app/components/hero/SectionWatch";

test("Renders SectionWatch component", () => {
    render(<SectionWatch />);
    const sectionWatch = screen.getByTestId("section-watch");

    expect(sectionWatch).toBeInTheDocument();
});

test("Renders correct text", () => {
    render(<SectionWatch />);
    const sectionWatch = screen.getByTestId("section-watch");

    expect(sectionWatch).toHaveTextContent("WATCH");
    expect(sectionWatch).toHaveTextContent("SERIES 9");
    expect(sectionWatch).toHaveTextContent("По-умен. По-ярък. По-мощен.");
    expect(sectionWatch).toHaveTextContent("Научи повече →");
});

test("Renders correct image", () => {
    render(<SectionWatch />);
    const sectionWatch = screen.getByTestId("section-watch");

    const image = screen.getByAltText("watchSeries");

    expect(image).toBeInTheDocument();
});

test("Renders correct icon", () => {
    render(<SectionWatch />);
    const icon = screen.getByTestId("apple-icon");

    expect(icon).toBeInTheDocument();
    expect(icon.tagName).toBe("svg");
});
