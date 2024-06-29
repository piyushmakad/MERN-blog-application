import React from "react";
import CallToAction from "../components/CallToAction";

function Projects() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Build fun and engaging projects while learning HTML, CSS, and
        JavaScript! Most of my work is done using React, a powerful library for
        building user interfaces. I aim to enhance my skills and share my
        journey with others who share a passion for coding and technology.
      </p>
      <CallToAction />
    </div>
  );
}

export default Projects;
