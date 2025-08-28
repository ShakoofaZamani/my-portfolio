import React from "react";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <h1 className="text-6xl font-bold mb-4 fade-up">Hello, I'm Shakoofa</h1>
      <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6 text-center max-w-xl fade-up" style={{ animationDelay: '0.2s' }}>
        A passionate frontend developer creating beautiful and responsive web applications using React and Tailwind CSS.
      </p>
      <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition fade-up" style={{ animationDelay: '0.4s' }}>
        See My Work
      </a>
    </section>
  );
}
