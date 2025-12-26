import ScrollObserver from "@/components/ScrollObserver";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AiDriven from "@/components/AiDriven";
import About from "@/components/About";
import Values from "@/components/Values";
import Community from "@/components/Community";
import Roadmap from "@/components/Roadmap";
import Benefits from "@/components/Benefits";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";

export default function Home() {
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
