import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InfoPage from './components/pages/info';
import Quiz from "./components/Quiz";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode]);


  return (
    <Router>
      <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-300 text-black"} min-h-screen p-4 flex flex-col`}>
        <Navbar isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Quiz isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />} />
            <Route path="/info" element={<InfoPage isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />} />
          </Routes>
        </div>
        <Footer isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
      </div>
    </Router>
  );
};

export default App;
