import Hero from "./components/hero/Hero";
import SectionIphone from "./components/hero/SectionIphone";
import SectionWatch from "./components/hero/SectionWatch";

export default function Home() {
    return (
        <div>
            <Hero />
            <SectionIphone />
            <SectionWatch />
        </div>
    );
}
