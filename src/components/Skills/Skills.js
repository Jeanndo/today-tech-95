import React from "react";
import "./Skills.css";
import { Col, Row } from "antd";
import Zoom from "react-reveal/Zoom";

const skills = [
  {
    id: 1,
    label: "HTML",
  },
  {
    id: 2,
    label: "CSS",
  },
  {
    id: 3,
    label: "Tailwind",
  },
  {
    id: 4,
    label: "Figma",
  },
  {
    id: 5,
    label: "Javascript",
  },
  {
    id: 6,
    label: "Leaflet",
  },
  {
    id: 7,
    label: "TypeScript",
  },
  {
    id: 8,
    label: "React",
  },
  {
    id: 9,
    label: "Antd",
  },
  {
    id: 10,
    label: "Mui",
  },
  {
    id: 11,
    label: "Firebase",
  },
  {
    id: 12,
    label: "Node Js",
  },
  {
    id: 13,
    label: "MongoDB",
  },
  {
    id: 14,
    label: "PostgresSQL",
  },
  {
    id: 15,
    label: "PayPal Node",
  },
  {
    id: 16,
    label: "Bootstrap",
  },
  {
    id: 17,
    label: "Threejs",
  },
];

const Skills = () => {
  return (
    <div className="skills__container" id="skills">
      <h1 className="skills__heading">#Skills</h1>
      <div className="skills__container__stacks">
        {skills.map((item) => (
          <Zoom key={item.id}>
            <div className="skills" key={item.id}>
              <h1>#{item.label}</h1>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Skills;
