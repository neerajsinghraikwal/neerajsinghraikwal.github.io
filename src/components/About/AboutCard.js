import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote pb-5">
          <p style={{ textAlign: "justify", fontSize: "1.5rem"}}>
            Hi Everyone, I am <span className="purple">NEERAJ SINGH </span>
            from <span className="purple"> Surat, India.</span>
            <br />I am an aspiring Full Stack Web Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
