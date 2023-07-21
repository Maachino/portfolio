import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/projects`
    )
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const value = useMemo(() => {
    return { projects, setProjects };
  }, [projects]);

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
}

ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
