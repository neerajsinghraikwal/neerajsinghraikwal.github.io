import React from "react";
import Typewriter from "typewriter-effect";
import {} from "react-bootstrap";

function Type() {
  return (
    <>
      <div style={{display:"flex" ,gap:"20px", marginTop: "-30px", width:"200%"}}>
        <div style={{fontSize:"1.8em",fontWeight:"700"}}> I'm a </div>
        <div>
        <Typewriter 
          options={{
            strings: [
              "Full Stack Web Developer",
              "Problem Solver",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
        </div>
      </div>
    </>
  );
}

export default Type;
