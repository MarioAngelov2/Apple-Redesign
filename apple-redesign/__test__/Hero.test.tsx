import { fireEvent, render, screen } from "@testing-library/react";
import Hero from "@/app/components/hero/Hero";

test("Renders Hero component", () => {
    render(<Hero />);
    const hero = screen.getByTestId("hero");

    expect(hero).toBeInTheDocument();
});

test("Renders correct text", () => {
    render(<Hero />);
    const hero = screen.getByTestId("hero");

    expect(hero).toHaveTextContent("iPhone 15 Pro");
    expect(hero).toHaveTextContent("Титан. Здрав. Лек. Про.");
    expect(hero).toHaveTextContent("Научи повече →");
});

test("Renders correct image", () => {
    render(<Hero />);
    const hero = screen.getByTestId("hero");

    const images = ["iphoneHero", "iphoneHero2"];

    expect(images.length).toBeGreaterThanOrEqual(1);

    for (const image of images) {
        const img = screen.getAllByAltText(image);
        expect(img.length).toBeGreaterThanOrEqual(1);
    }
});
