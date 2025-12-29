import ScrollObserver from "@/components/common/ScrollObserver";
import Header from "@/components/toc/Header";
import Hero from "@/components/toc/Hero";
import AiDriven from "@/components/toc/AiDriven";
import About from "@/components/toc/About";
import Values from "@/components/toc/Values";
import Community from "@/components/toc/Community";
import Roadmap from "@/components/toc/Roadmap";
import Benefits from "@/components/toc/Benefits";
import Plans from "@/components/toc/Plans";
import Contact from "@/components/toc/Contact";

export const metadata = {
    title: "NOROSHI.HIROSHIMA | AI駆動開発ハッカソン 参加者募集",
    description: "AI駆動開発ハッカソン、NOROSHI.HIROSHIMAの参加者募集ページです。",
};

export default function ToCPage() {
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
