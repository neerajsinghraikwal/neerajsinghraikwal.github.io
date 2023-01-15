import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import loadable from "@loadable/component";

import meanbuy from "../../Assets/meanbuy.png";
import zoomcar from "../../Assets/zoomcar.png";

const ProjectCard = loadable(() => import("./ProjectCards"));

const projects = [
  {
    imgPath: "https://user-images.githubusercontent.com/103197193/208367218-a6629c26-0fee-4e39-ba3f-d168af06df15.png",
    title: "Glamour",
    description: "Glamour is an Indian e-commerce company that sells cosmetics and personal care products",
    link: "https://github.com/neerajsinghraikwal/Glamour",
    demo: "https://myglamour.vercel.app/",
    stack: ["javascript", "node", "css", "mongodb","express","react","redux"]
  },
  {
    imgPath: "https://user-images.githubusercontent.com/101583807/204452594-f64b42f8-03d4-45f7-aa70-242e474f649f.png",
    title: "Becho.com",
    description: "Becho.com is free classifieds and online marketplace that helps users to sell, buy, rent, or discover anything across India.",
    link: "https://github.com/neerajsinghraikwal/Becho.com",
    demo: "https://becho-rho.vercel.app",
    stack: ["javascript", "node", "css", "mongodb","express","react","redux"]
  },
  {
    imgPath: zoomcar,
    title: "Zoomcar",
    description: "Zoomcar is an Indian car sharing platform, allows you to hire a rental or self-drive car of your choice.",
    link: "https://github.com/neerajsinghraikwal/ZoomCar-Clone",
    demo: "https://zoomcar-iota.vercel.app/",
    stack: ["javascript", "node", "html", "css", "git"]
  },
  {
    imgPath: meanbuy,
    title: "Meanbuy Clone",
    description: "Meanbuy is an e-commerce website that offers a wide variety of products at competitive prices. Meanbuy's product offerings range from electronics and home appliances to fashion and beauty products.",
    link: "https://github.com/neerajsinghraikwal/Meanbuy-Clone",
    demo: "https://shiny-torrone-69ae7b.netlify.app/landing_page/",
    stack: ["javascript", "node", "html", "css", "git"]
  }
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
