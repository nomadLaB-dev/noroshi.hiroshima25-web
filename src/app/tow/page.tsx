import ScrollObserver from "@/components/common/ScrollObserver";
import Header from "@/components/tow/Header";
import Hero from "@/components/tow/Hero";
import AiDriven from "@/components/tow/AiDriven";
import About from "@/components/tow/About";
import Values from "@/components/tow/Values";
import Community from "@/components/tow/Community";
import Roadmap from "@/components/tow/Roadmap";
import Benefits from "@/components/tow/Benefits";
import Plans from "@/components/tow/Plans";
import Contact from "@/components/tow/Contact";

export const metadata = {
    title: "NOROSHI.HIROSHIMA | AI駆動開発ハッカソン 事業所エントリー",
    description: "AI駆動開発ハッカソン、NOROSHI.HIROSHIMAの事業所エントリーページです。",
};

export default function ToWPage() {
    return (
        <>
            <ScrollObserver />
            <Header />
            <main>
                <Hero />
                <AiDriven />
                <About />
                <Values />
                <Community />
                <Roadmap />
                <Benefits />
                <Plans />
            </main>
            <Contact />
        </>
    );
}
