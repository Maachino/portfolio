import React, { useContext } from "react";
import { GiSkills } from "react-icons/gi";
import Image from "../assets/skills.png";
import Card from "../services/Card";
import SectionHead from "../components/SectionHead";
import HeaderSkill from "../assets/skillsh.jpg";
import Header from "../components/Header";
import { SkillContext } from "../contexts/SkillContext";

function Skills() {
  const { skills } = useContext(SkillContext);

  return (
    <>
      <Header title="Skills" image={HeaderSkill} />
      <section className="skills">
        <div className="container skills__container">
          <div className="skills__left">
            <div className="skills__image">
              <img src={Image} alt="skills-Img" />
            </div>
          </div>
          <div className="skills__right">
            <SectionHead icon={<GiSkills />} title="Some Skills ..." />

            <p> newBie's Skills : still N00B but still working while !dead</p>
            <div className="skills__wrapper">
              {skills.map((skill) => {
                return (
                  <Card key={skill.id} className="skills__value">
                    <span>
                      <img src={skill.image} alt={skill} />
                    </span>
                    <h4>{skill.name}</h4>
                    <small>{skill.type}</small>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
