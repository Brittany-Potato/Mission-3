import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Aicontainer from "./components/ai-container/ai-container";
import Navbar from "./components/Navbar/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Aicontainer />
    </>
  );
}

export default App;
