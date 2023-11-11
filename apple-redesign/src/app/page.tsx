import Hero from "./components/hero/Hero";
import PopularGrid from "./components/hero/PopularGrid";
import SectionIphone from "./components/hero/SectionIphone";
import SectionWatch from "./components/hero/SectionWatch";

export default function Home() {
    return (
        <div>
            <Hero />
            <SectionIphone />
            <SectionWatch />
            <PopularGrid />
        </div>
    );
}
