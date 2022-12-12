import React from "react";
import { ImPointRight } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an aspiring
              <b className="purple"> Full Stack Web Developer </b>
              with more than <b className="purple">1200+</b> hours of coding and building and
              deploying <b className="purple"> single page/eCommerce applications</b> using <b className="purple">MERN</b> stack. 
             <br />
             I can adapt onto
              any technology rapidly making myself flexible upon any tech stack.
              A passionate, diligent person who wants to learn continuously.
              
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Exploring/Learning new technologies
                </li>
                <li className="about-activity">
                  <ImPointRight /> Listening Music
                </li>
                <li className="about-activity">
                  <ImPointRight /> Hiking
                </li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
