import React from 'react';

const projects = [
  {
    name: "Whack-a-Mole Game",
    description: "A fun interactive Whack-a-Mole game built with Java",
    url: "https://github.com/asahal7/WhackAMole",
  },
  {
    name: "Tic-Tac-Toe Game",
    description: "Classic Tic-Tac-Toe game featuring 2-player mode and AI opponent.",
    url: "https://github.com/asahal7/TicTacToe",
  },
  {
    name: "Horse Race Simulator",
    description: "A detailed horse race simulator built for my university coursework in Java.",
    url: "https://github.com/asahal7/HorseRaceSimulator",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map(({ name, description, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-700">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

