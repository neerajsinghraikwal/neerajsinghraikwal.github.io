import React from "react";
import { Col, Row } from "react-bootstrap";
import jsimage from "../../Assets/jsimage.png"
import reactimage from "../../Assets/reactimage.png"
import chakraimage from "../../Assets/chakraimage.jpg"
import htmlimage from "../../Assets/htmlimage.png"
import materialimage from "../../Assets/materialimage.png"
import bootstarpimg from "../../Assets/bootstarpimg.png"
import reduximg from "../../Assets/reduximg.png"
import cssimg from "../../Assets/cssimg.png"
import nodeimg from "../../Assets/nodeimg.png"
import expimg from "../../Assets/expimg.png"
import mongoimg from "../../Assets/mongoimg.png"


const frontendStacks = [
  {
    icon: jsimage,
    label: "JavaScript",
  },
  {
    icon: reactimage,
    label: "React",
  },
  {
    icon: chakraimage,
    label: "Chakra UI",
  },
  {
    icon: htmlimage,
    label: "HTML",
  },
  {
    icon: materialimage,
    label: "Material UI",
  },
  {
    icon: bootstarpimg,
    label: "Bootstrap",
  },
  {
    icon: reduximg,
    label: "Redux",
  },
  {
    icon: cssimg,
    label: "CSS",
  }
];

const backendStacks = [
  {
    icon: nodeimg,
    label: "Node",
  },
  {
    icon: expimg,
    label: "Express",
  },
  {
    icon: mongoimg,
    label: "MongoDB",
  },
];

function Techstack() {
  return (
    <>
      <h1 className="project-heading">
        Frontend
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {
          frontendStacks.map(stack => (
            <Col key={stack.label} xs={4} md={2} className="tech-icons" >
              <div  style={{width:"70%", height:"60%",margin:"auto",borderRadius:"10%",marginTop:".2em"}}>
                <img src={stack.icon} alt="" style={{width:"100%",height:"100%",borderRadius:"5%"}}/>
              </div>
              <p style={{color:"white",marginTop:"1em"}}>{stack.label}</p>
            </Col>
          ))
        }
      </Row>
      
      <h1 className="project-heading">
        Backend
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {
          backendStacks.map(stack => (
            <Col key={stack.label} xs={4} md={2} className="tech-icons" >
              <div  style={{width:"70%", height:"60%",margin:"auto",borderRadius:"10%",marginTop:".2em"}}>
                <img src={stack.icon} alt="" style={{width:"100%",height:"100%",borderRadius:"5%"}}/>
              </div>
              <p style={{color:"white",marginTop:"1em"}}>{stack.label}</p>
            </Col>
          ))
        }
      </Row>
      
    </>
  );
}

export default Techstack;
