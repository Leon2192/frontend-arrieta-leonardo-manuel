import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Next",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Redux",
  "Context API",
  "Zustand",
  "SQL",
  "Node js",
  "Express",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "Github",
  "Gitlab",
];

const labelsThird = [
  "OpenAI",
  "LangChain",
  "Azure Machine Learning",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Stack Tecnológico </h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Developer</h3>
            <p>
              Mi enfoque se centra en desarrollar aplicaciones altamente
              optimizadas, escalables y con una experiencia de usuario
              eficiente. Mi habilidad para integrar tecnologías backend como
              Node.js garantiza un flujo de datos eficiente y seguro, logrando
              aplicaciones completas y robustas. Me apasiona transformar ideas
              complejas en soluciones funcionales y atractivas, siempre
              aplicando las mejores prácticas del desarrollo frontend
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automatización</h3>
            <p>
              Una vez que la aplicación está desarrollada, ayudo a los clientes
              a configurar pruebas de DevOps, pipelines de CI/CD y
              automatización de despliegue para garantizar el éxito en el
              lanzamiento.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Me mantengo a la vanguardia en el mercado utilizando los últimos
              modelos de IA en mis proyectos. Tengo experiencia en
              la construcción de soluciones empresariales habilitadas con IA
              generativa (GenAI) para potenciar la toma de decisiones
              inteligentes.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
