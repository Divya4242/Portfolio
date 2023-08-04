import React from "react";
import Particle from './components/Particle';
import Aboutme from "./Aboutme";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Contact from "./Contact";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from "./images/Divya_Patel_CV.pdf"

function Homepage() {
    return (
        <>
            <div className="myparticle" >
                <Particle />
            </div>
            {/* <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand style={{ fontFamily: "Times New Roman", fontWeight: "800", fontStyle: "italic" }} href="#parent">{`< Divya Patel />`}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto liu active">
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Timeline">Timeline</Nav.Link>
                            <Nav.Link href="#Projects">Project</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                            <Nav.Link target="_blank" href={resume}>Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="parent" id="parent">
                <h1 className="child">HEY, I'M <br /> <br /> <span className="name"> DIVYA </span> <br /> <br /> <br /> <span className="welcome">WELCOME TO MY WEBSITE !</span></h1> <br /> <br />
            </div>
            <div id="About"><Aboutme /> </div>
            <div id="Timeline"> <Timeline /> </div>
            <div id="Projects"> <Projects /> </div>
            <div id="Contact"><Contact /> </div>
        </>
    )
}

export default Homepage;