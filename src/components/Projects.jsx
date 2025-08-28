import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

export default function Projects() {
  const projects = [
    { id: 1, name: "Portfolio Website", image: project1 },
    { id: 2, name: "E-commerce App", image: project2 },
    { id: 3, name: "Blog Platform", image: project3 },
    { id: 4, name: "Landing Page", image: project4 },
  ];

  return (
    <section id="projects" className="min-h-screen bg-yellow-100 dark:bg-gray-900 p-6">
      <h2 className="text-5xl font-bold text-center mb-12 fade-up">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {projects.map((proj) => (
          <div key={proj.id} className="bg-white dark:bg-gray-800 rounded shadow hover:scale-105 transition transform fade-up" style={{ animationDelay: `${proj.id * 0.2}s` }}>
            <img src={proj.image} alt={proj.name} className="rounded-t" />
            <h3 className="text-xl font-bold text-center p-4 dark:text-gray-200">{proj.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
