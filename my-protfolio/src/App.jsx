import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Services />
    </>
  );
}

export default App;
