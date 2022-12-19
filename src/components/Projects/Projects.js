import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loadable from "@loadable/component";

import nature from "../../Assets/nature.png";
import zoomcar from "../../Assets/zoomcar.png";

const ProjectCard = loadable(() => import("./ProjectCards"));

const projects = [
  {
    imgPath: "https://user-images.githubusercontent.com/103197193/208367218-a6629c26-0fee-4e39-ba3f-d168af06df15.png",
    title: "Glamour",
    description: "Glamour is an Indian e-commerce company that sells cosmetics and personal care products",
    link: "https://github.com/sranbir392/Project_1/tree/main/finalproject",
    demo: "https://jovial-entremet-naturebasketclone.netlify.app/index.html",
    stack: ["javascript", "node", "html", "css", "mongodb","express"]
  },
  {
    imgPath: "https://user-images.githubusercontent.com/101583807/204452594-f64b42f8-03d4-45f7-aa70-242e474f649f.png",
    title: "Olx Clone",
    description: "Becho.com is MERN Stack e-commerce web application that allows for sale from cars, furniture, electronics to jobs and services listings. Buy or sell something today visit the products listing page and you will see all the products, apply filters as per your need and in just a few clicks you can buy any products from the website.",
    link: "https://github.com/zuhedshaikh95/awesome-volleyball-5374",
    demo: "https://marvelous-pudding-625465.netlify.app/?limit=4",
    stack: ["javascript", "node", "html", "css", "git","mongodb","express"]
  },
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
