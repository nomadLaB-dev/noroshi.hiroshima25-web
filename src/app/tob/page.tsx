import ScrollObserver from "@/components/common/ScrollObserver";
import Header from "@/components/tob/Header";
import Hero from "@/components/tob/Hero";
import AiDriven from "@/components/tob/AiDriven";
import About from "@/components/tob/About";
import Values from "@/components/tob/Values";
import Community from "@/components/tob/Community";
import Roadmap from "@/components/tob/Roadmap";
import Benefits from "@/components/tob/Benefits";
import Plans from "@/components/tob/Plans";
import Contact from "@/components/tob/Contact";

export const metadata = {
    title: "NOROSHI.HIROSHIMA | ビジネス向け - AI導入・DX推進",
    description: "NOROSHI.HIROSHIMAのビジネス向けページです。AIを活用した組織変革とイノベーション創出を支援します。",
};

export default function ToBPage() {
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
