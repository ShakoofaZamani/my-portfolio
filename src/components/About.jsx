import React from "react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-green-100 dark:bg-gray-800 p-6">
      <h2 className="text-5xl font-bold mb-6 fade-up">About Me</h2>
      <p className="text-lg max-w-3xl text-center mb-6 fade-up" style={{ animationDelay: '0.2s' }}>
        I am a frontend developer with 3 years of experience building modern web applications. I enjoy turning ideas into real, interactive websites and constantly learning new technologies to improve my skills.
      </p>
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="p-4 bg-white dark:bg-gray-700 rounded shadow text-center fade-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-bold text-xl">Skills</h3>
          <p>React, Tailwind CSS, JavaScript, HTML, CSS</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-700 rounded shadow text-center fade-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-bold text-xl">Experience</h3>
          <p>3 Years of Web Development</p>
        </div>
      </div>
    </section>
  );
}
