import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import ContactButton from "./components/ContactButton";
import DemoButton from "./components/DemoButton";
import LearnMoreCard from "./components/LearnMoreCard";
import Hero from "./components/Hero";
import SolutionSection from "./components/SolutionSection";
import CloudSection from "./components/CloudSection";
import BankingSection from "./components/BankingSection";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full h-screen relative overflow-x-hidden bg-[#1A1A1A]">
        <Header />
        <Hero />
        <SolutionSection />
        <CloudSection />
        <BankingSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
