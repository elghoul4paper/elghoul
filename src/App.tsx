import { useState } from "react";

import Header from "./components/Header";
import LandingSec from "./components/LandingSec";
import ProductsSec from "./components/ProductsSec";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="dark:bg-[#141516]">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <LandingSec />
      <ProductsSec />
    </div>
  );
}
