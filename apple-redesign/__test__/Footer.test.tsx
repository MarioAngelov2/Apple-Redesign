import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "@/app/components/footer/Footer";

test("Renders correct footer", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
});

test("Footer contains expected elements", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");

    expect(footer).toHaveTextContent("Необходим е абонамент за Apple TV+");
    expect(footer).toHaveTextContent("Разгледай");
    expect(footer).toHaveTextContent("Apple Wallet");
    expect(footer).toHaveTextContent("Appe Pay");
    expect(footer).toHaveTextContent("Забавления");
    expect(footer).toHaveTextContent("Ценностите на Apple");
    expect(footer).toHaveTextContent("Намери най-близкия търговец до теб.");
    expect(footer).toHaveTextContent("2023 Apple Inc. Всички права запазени.");
    expect(footer).toHaveTextContent("Използване на кукита");
    expect(footer).toHaveTextContent("Условия за употреба");
    expect(footer).toHaveTextContent("Карта на сайта");
    expect(footer).toHaveTextContent("България");
    expect(footer).toHaveTextContent("Mac");
    expect(footer).toHaveTextContent("iPad");
    expect(footer).toHaveTextContent("iPhone");
    expect(footer).toHaveTextContent("Watch");
    expect(footer).toHaveTextContent("TV");
    expect(footer).toHaveTextContent("Music");
    expect(footer).toHaveTextContent("AirPods");
    expect(footer).toHaveTextContent("Apple TV+");
    expect(footer).toHaveTextContent("Apple Music");
    expect(footer).toHaveTextContent("Apple Arcade");
    expect(footer).toHaveTextContent("Newsroom");
    expect(footer).toHaveTextContent("Apple Leadership");
    expect(footer).toHaveTextContent("Инвеститори");
    expect(footer).toHaveTextContent("Етичност и законообразност");
    expect(footer).toHaveTextContent("Управление на Apple ID");
    expect(footer).toHaveTextContent("iCloud.com");
});
