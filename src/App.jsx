import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from './App.module.css'
import Aicontainer from "./components/ai-container/ai-container";
import Navbar from "./components/Navbar/navbar";
import SecondNavbar from './components/second-nav/second-nav'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.backContainer}>
      <Navbar />
      <SecondNavbar />
      <Aicontainer />
    </div>
  );
}

export default App;
