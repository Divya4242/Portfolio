import React from "react";
import git from "./images/github.png";
import linkedin from "./images/linkedin.png"
function Contact() {
    return (
        <div className="contact">
            <h1 style={{ paddingTop: "30px" }}>Contact</h1>
            <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr> <br />

            <div style={{fontSize:"30px"}}>Get in contact: </div> <br />

            <a className="myemail" style={{textDecorationLine: "none", color:"white"}} target="_blank" rel="noreferrer" href="mailto:info@tech2cash.in">divyakpatel42@gmail.com</a> <br/>
            <a onmouseover="cursor:'pointer'" target="_blank" rel="noreferrer" href="https://github.com/Divya4242"><img style={{color:"white"}} src={git} alt="..." height={46} width={46} /> </a>
            <a onmouseover="cursor:'pointer'" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/divya-patel-07257424a/"> <img src={linkedin} alt="..." height={50} width={50} /> </a> <br /> <br />

            <div style={{fontSize:"30px"}}>Employment: </div> <br />
            <div className="mine">I'm always open to new <br /> opportunities, so feel free  <br />to take a look at my resume! </div> <br/> <br/>

            <div style={{backgroundColor:"black"}}>To use this template as your website, go to this repository, download the source code and change relevant information!</div>
        </div>
    )
}

export default Contact;