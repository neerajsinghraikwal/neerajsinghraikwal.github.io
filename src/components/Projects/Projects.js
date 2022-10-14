import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loadable from "@loadable/component";

import nature from "../../Assets/nature.png";
import zoomcar from "../../Assets/zoomcar.png";

const ProjectCard = loadable(() => import("./ProjectCards"));

const projects = [
  {
    imgPath: nature,
    title: "Nature Basket Clone",
    description: "Nature's Basket is India's pioneering food destination present through physical retail stores, an online portal and a mobile application.",
    link: "https://github.com/sranbir392/Project_1/tree/main/finalproject",
    demo: "https://jovial-entremet-naturebasketclone.netlify.app/index.html",
    stack: ["javascript", "node", "html", "css", "git"]
  },
  {
    imgPath: zoomcar,
    title: "Zoomcar",
    description: "Zoomcar is an Indian car sharing platform, headquartered in Banglore",
    link: "https://github.com/Ranjanji/doted-branch-8352",
    demo: "https://prayagp8.github.io/Project-zoom-car/",
    stack: ["javascript", "node", "html", "css", "git"]
  },
  // {
  //   imgPath: YtMusic,
  //   title: "YouTube Music Clone",
  //   description: "Youtube music allows user to play any song, search for any artist, song, playlist and add it to the library. Library will persist only for few hours as it is maintained using heroku and mock- server.",
  //   link: "",
  //   demo: "",
  //   stack: ["javascript", "node", "html", "css", "git"]
  // },
  // {
  //   imgPath: Airtable,
  //   title: "Airtable Clone",
  //   description: "UI clone of Airtable, a cloud-based software company that offers an online platform for creating and sharing relational databases.",
  //   link: "",
  //   demo: "",
  //   stack: ["javascript", "html", "css", "git"]
  // }
];


function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", gap: "0.5rem" }}>
          {
            projects.map(project => (
              <Col key={project.title} xs={12} sm={10} lg={6} className="project-card">
                <ProjectCard
                  {...project}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
