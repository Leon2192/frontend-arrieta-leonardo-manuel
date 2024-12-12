import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Historial profesional</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2022 - Actualidad"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Solution Box SRL
            </h4>
            <p>
              Desarrollo Web Front-End: Diseño e implementación de aplicaciones
              web modernas utilizando tecnologías como React, Next.js, Node.js,
              y bases de datos modernas.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
            <p>
              Desarrollo Web Front-End: Diseño e implementación de aplicaciones
              web modernas utilizando tecnologías como React, Next.js, Node.js,
              y bases de datos modernas.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Tutor Academico (React js & React Native)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Coderhouse SRL
            </h4>
            <p>
              Revisión de proyectos y ejercicios: Evaluar el progreso de los
              estudiantes a través de proyectos y tareas asignadas. Calificación
              y retroalimentación: Proporcionar comentarios constructivos sobre
              los proyectos, destacando fortalezas y áreas de mejora. Pruebas y
              evaluaciones: Diseñar y aplicar exámenes, quizzes o proyectos para
              evaluar el entendimiento del contenido.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
