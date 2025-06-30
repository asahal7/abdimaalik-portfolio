import React from "react";

import horseRaceImg from "../assets/images/horse-race.jpg";
import whacAMoleImg from "../assets/images/whacamole.jpg";
import ticTacToeImg from "../assets/images/tictactoe.jpg";

const projects = [
  {
    title: "Horse Race Simulator",
    description:
      "A Java Swing application simulating horse races with customizable horses, betting features, and real-time race statistics.",
    image: horseRaceImg,
    github: "https://github.com/asahal7/HorseRaceSimulator",
  },
  {
    title: "Whac-A-Mole",
    description:
      "A fun and interactive Java game where players must quickly click moles as they pop up to score points within a time limit.",
    image: whacAMoleImg,
    github: "https://github.com/asahal7/WhackAMole",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A classic two-player Tic Tac Toe game implemented in Java with a simple and clean user interface.",
    image: ticTacToeImg,
    github: "https://github.com/asahal7/TicTacToe",
  },
];

const ProjectCard = ({ title, description, image, github }) => (
  <div className="w-60 rounded overflow-hidden shadow-lg m-4 bg-white">
    <img
      src={image}
      alt={title}
      style={{ width: "160px", height: "130px" }} // Show full image
      className="object-contain mx-auto mt-4 rounded bg-white"
    />
    <div className="px-4 py-3">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-blue-600 underline text-sm"
      >
        GitHub Repo
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;







