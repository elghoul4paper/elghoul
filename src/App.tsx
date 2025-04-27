import { useState } from "react";
import Header from "./components/Header";
import ProductsSec from "./components/ProductsSec";
import MyComponent from "./components/MyCarousel";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="dark:bg-[#141516] max-w-full">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
       <MyComponent/>
       
      <ProductsSec />
    </div>
  );
}
