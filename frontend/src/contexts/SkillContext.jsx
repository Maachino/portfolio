import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

export const SkillContext = createContext();

export function SkillProvider({ children }) {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"}/skills`
    )
      .then((response) => response.json())
      .then((data) => setSkills(data));
  }, []);

  const value = useMemo(() => {
    return { skills, setSkills };
  }, [skills]);

  return (
    <SkillContext.Provider value={value}>{children}</SkillContext.Provider>
  );
}

SkillProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
