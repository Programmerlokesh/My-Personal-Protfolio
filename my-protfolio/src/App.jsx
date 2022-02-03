import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Herosection />
      <About />
    </>
  );
}

export default App;
