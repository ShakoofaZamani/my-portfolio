import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">MyPortfolio</h1>
        <ul className="flex gap-6 items-center">
          <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a></li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
