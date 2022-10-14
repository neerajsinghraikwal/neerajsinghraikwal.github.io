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
              I love problem solving and programming
              <br />
              <br />I am an aspiring
              <i>
                <b className="purple"> Full Stack Web Developer. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies, Products </b> and in{" "}
                <b className="purple">Data Structures and Algorithms.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
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
