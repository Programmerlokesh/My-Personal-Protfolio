import { useState } from "react";
import "./App.css";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Herosection />
    </>
  );
}

export default App;
