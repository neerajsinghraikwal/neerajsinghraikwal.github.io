import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import updateimg from "../../Assets/updateimage.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { useParams } from "react-router-dom";
import loadable from "@loadable/component";

import { CgFileDocument } from "react-icons/cg";
import Contact from "../Contact";
// import Footer from "../Footer";

const Skills = loadable(() => import("../Skills/Skills"));
const Projects = loadable(() => import("../Projects/Projects"));

function Home() {
  const { id } = useParams();

  useEffect(() => {
    if (window) {
      const eleHeight =
        id && document.getElementById(id)
          ? document.getElementById(id).offsetTop
          : 0;
      window.scrollTo(0, eleHeight || 0);
    }
  });

  return (
    <>
      <Particle />
      <Container fluid className="home-section second-color" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                className="heading"
                style={{ paddingBottom: 1, fontSize: "10px" }}
              >
                <strong>Hello, my name is</strong>
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Neeraj Singh</strong>
              </h1>

              <div
                style={{ paddingLeft: 45, paddingTop: 30, textAlign: "left" }}
              >
                <Type />
              </div>
              <div className="resume navbar-nav">
                <Button
                  style={{
                    backgroundColor: "red",
                    maxWidth: "10rem",
                    width: "90%",
                    margin: "10px 0px 10px 2rem",
                    fontSize: "1.5rem",
                    height: "3rem",
                  }}
                  className="main-resume"
                  href=""
                  // https://drive.google.com/uc?export=download&id=1dBsnOZ3EGxhSGUsearzMJio2jZMax9v8"
                  rel="noreferrer"
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                style={{ width: "300px" }}
                src={updateimg}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
