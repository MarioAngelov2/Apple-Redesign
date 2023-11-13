import { fireEvent, render, screen } from "@testing-library/react";
import PopularGrid from "@/app/components/hero/PopularGrid";

test("Renders PopularGrid component", () => {
    render(<PopularGrid />);
    const popularGrid = screen.getByTestId("popular-grid");

    expect(popularGrid).toBeInTheDocument();
});

test("Renders correct text", () => {
    render(<PopularGrid />);
    const popularGrid = screen.getByTestId("popular-grid");

    expect(popularGrid).toHaveTextContent("WATCH");
    expect(popularGrid).toHaveTextContent("Приключения на друго ниво.");
    expect(popularGrid).toHaveTextContent("Научи повече");
    expect(popularGrid).toHaveTextContent("Много причини да го обикнеш.");
    expect(popularGrid).toHaveTextContent("SE");
    expect(popularGrid).toHaveTextContent("ULTRA 2");
    expect(popularGrid).toHaveTextContent("AirPods Pro");
    expect(popularGrid).toHaveTextContent(
        "Сега с адаптивно аудио. Звучи страхотно."
    );
    expect(popularGrid).toHaveTextContent("iPad Pro");
    expect(popularGrid).toHaveTextContent("Със суперсилите на");
    expect(popularGrid).toHaveTextContent(`MacBook Air 15"`);
    expect(popularGrid).toHaveTextContent(
        "Впечатляващо голям. Невъзможно тънък."
    );
    expect(popularGrid).toHaveTextContent("tv");
    expect(popularGrid).toHaveTextContent(
        "Apple изживяването. Пиршество за всички сетива."
    );
});

test("Renders correct images", () => {
    render(<PopularGrid />);

    const imageWatchUltra = screen.getByAltText("watch_ultra");
    const imageWatchSe = screen.getByAltText("watch_se");
    const imageAirpodsPro = screen.getByAltText("airpods_pro");
    const m2chip = screen.getByAltText("m2_chip");
    const ipad = screen.getAllByAltText("ipad");
    const laptop = screen.getByAltText("laptop");
    const tv = screen.getAllByAltText("tv");

    expect(imageWatchUltra).toBeInTheDocument();
    expect(imageWatchSe).toBeInTheDocument();
    expect(imageAirpodsPro).toBeInTheDocument();
    expect(m2chip).toBeInTheDocument();
    expect(ipad.length).toBeGreaterThanOrEqual(1);
    expect(laptop).toBeInTheDocument();
    expect(tv.length).toBeGreaterThanOrEqual(1);
});

test("Renders correct icons", () => {
    render(<PopularGrid />);

    const appleIcon = screen.getByTestId("apple-icon");

    expect(appleIcon).toBeInTheDocument();
    expect(appleIcon.tagName).toBe("svg");
});
