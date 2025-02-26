import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Steps from "./components/steps";
import Accordion from "./components/questionsaccordion";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="nav">
        <Navbar />
      </h1>
      <HeroSection />
      <Steps />
      <Accordion />
    </>
  );
}

export default App;
