import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

import {
  DiGit
} from "react-icons/di";
import vsimg from "../../Assets/vsimg.png"
import gitimg from "../../Assets/gitimg.png"
import postimg from "../../Assets/postimg.png"
import herokuimg from "../../Assets/herokuimg.png"

const toolStacks = [
  {
    icon: vsimg,
    label: "VS Code"
  },
  {
    icon: gitimg,
    label: "Git"
  },
  {
    icon: postimg,
    label: "Postman"
  },
  {
    icon: herokuimg,
    label: "Heroku"
  }

];

function Toolstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {
          toolStacks.map(stack => (
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

export default Toolstack;
