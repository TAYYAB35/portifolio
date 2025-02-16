"use client"; // Ensures client-side rendering

import { useState } from "react";
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, index) => {
    setHoveredProject(index);
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  // Define background colors for each project
  const projectColors = [
    "rgba(255, 99, 132, 0.3)",   // Red
    "rgba(54, 162, 235, 0.3)",   // Blue
    "rgba(255, 206, 86, 0.3)",   // Yellow
    "rgba(75, 192, 192, 0.3)",   // Teal
    "rgba(153, 102, 255, 0.3)",  // Purple
    "rgba(255, 159, 64, 0.3)",   // Orange
    "rgba(46, 204, 113, 0.3)",   // Green
    "rgba(231, 76, 60, 0.3)",    // Dark Red
    "rgba(52, 152, 219, 0.3)",   // Light Blue
    "rgba(241, 196, 15, 0.3)",   // Bright Yellow
    "rgba(155, 89, 182, 0.3)",   // Violet
    "rgba(39, 174, 96, 0.3)",    // Forest Green
    "rgba(192, 57, 43, 0.3)",    // Dark Coral
    "rgba(41, 128, 185, 0.3)",   // Deep Blue
    "rgba(211, 84, 0, 0.3)",     // Burnt Orange
    "rgba(142, 68, 173, 0.3)",   // Deep Purple
    "rgba(22, 160, 133, 0.3)",   // Turquoise
    "rgba(127, 140, 141, 0.3)",  // Gray
    "rgba(243, 156, 18, 0.3)",   // Golden Yellow
    "rgba(236, 240, 241, 0.3)"   // Soft White
  ];

  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      {/* Floating cursor effect */}
      {hoveredProject !== null && (
        <div
          className="fixed w-20 h-20 rounded-full pointer-events-none transition-transform duration-100"
          style={{
            top: cursorPosition.y - 75, // Adjust for new size
            left: cursorPosition.x - 75,
            width: "150px",  // Increased diameter
            height: "150px", // Increased diameter
            border: "2px solid rgba(255, 255, 255, 0.6)", // White semi-transparent border
            backgroundColor: projectColors[hoveredProject % projectColors.length],
            borderRadius: "50%", // Make it a circle
            // filter: "blur(40px)", // Adjust blur effect
            zIndex: 999,
            mixBlendMode: "difference", // Optional: gives a cool visual effect
          }}
        ></div>
      )}

      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <a
              href={project.demo}
              target="_blank"
              key={index}
              className="w-full mx-auto max-w-2xl sticky h-full"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="box-border flex items-center h-full justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
