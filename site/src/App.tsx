import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Nexus } from "./components/Nexus";
import { Modules } from "./components/Modules";
import { Comparison } from "./components/Comparison";
import { Architecture } from "./components/Architecture";
import { Proof } from "./components/Proof";
import { Timeline } from "./components/Timeline";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Nexus />
        <Modules />
        <Comparison />
        <Architecture />
        <Proof />
        <Timeline />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
