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
            <b className="purple"> Full Stack Developer </b> with extensive experience in designing, developing, and deploying scalable web and mobile applications. Proficient in using the MERN stack to create dynamic e-commerce platforms and comprehensive CRM systems tailored for salon businesses. Skilled in enhancing application performance and reliability through the use of Redis for caching and RabbitMQ for message queuing. Experienced in leveraging AWS for deploying and managing applications, ensuring high availability and scalability. Adept at collaborating with cross-functional teams to deliver robust solutions that drive business growth and improve user experience.
              {/* <b className="purple"> Full Stack Web Developer </b> */}
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
