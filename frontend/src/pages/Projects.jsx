import { useContext } from "react";
import HeaderImage from "../assets/ProjectH.jpeg";
import { ProjectContext } from "../contexts/ProjectContext";
import Header from "../components/Header";

import Project from "../components/Project";

import "./Projects.css";

function Projects() {
  const { projects } = useContext(ProjectContext);

  return (
    <>
      <Header title="dev web Projects" image={HeaderImage}>
        Some Projects...
      </Header>
      <section className="Projects">
        <div className="container Projects__container">
          {projects.map((project) => {
            return (
              <Project
                key={project.id}
                image={project.image}
                description={project.description}
                name={project.name}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
