import React from "react";
import img1 from "./images/research.png"
import img2 from "./images/api.png";
import img3 from "./images/os.png";
import img4 from "./images/magazine.png";
import git from "./images/github.png";
import web from "./images/website.png"
import Az from './images/AZ-900.png'
import AWS from './images/AWS.png'

function Projects() {
    return (
        <div className="projects">
            <h1 style={{ paddingTop: "30px" }}>Projects</h1>
            <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr> <br />
            <div>
                <div
                    className="container-fluid our-services px-md-5"
                    style={{ padding: "0 30px" }}
                >
                    <div
                        className="row d-flex justify-content-center flex-md-nowrap mt-5"
                        style={{ borderRadius: "5px" }}
                    >
                        <div
                            className="col-md-3 card mx-2 RP"
                            style={{ border: "0", padding: "5px" }}
                        >
                            <div
                                className="our-services-icon mx-auto pt-3"
                                style={{ marginBottom: "-10px" }}
                            >
                                <img src={img1} className="card-img-top" alt="..." height={80} />
                            </div>
                            <div className="card-body text-center">
                                <h5
                                    className="card-title text-center"
                                    style={{ margin: "10px 0" }}
                                >
                                    Research Paper
                                </h5>
                                <p className="card-text" style={{ fontSize: "14px" }}>
                                    This website is intended to add research paper like Journal article, book chapter, publications
                                    for any college that can be visible to anyone on internet. <br />
                                    Made in React JS, Bootstrap and Firebase
                                </p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Divya4242/Research-Paper"><img style={{ color: "black" }} src={git} alt="..." height={46} width={46} /> </a>
                                <a target="_blank" rel="noreferrer" href="https://researchpaper.azurewebsites.net"><img style={{ marginLeft: "10px" }} src={web} alt="..." height={46} width={46} /> </a>
                            </div>
                        </div>
                        <div
                            className="col-md-3 card API"
                            style={{ border: "0", padding: " 5px" }}
                        >
                            <div
                                className="our-services-icon mx-auto pt-3"
                                style={{ marginBottom: "-10px" }}
                            >
                                <img src={img2} className="card-img-top" alt="..." height={80} />
                            </div>
                            <div className="card-body text-center">
                                <h5
                                    className="card-title text-center"
                                    style={{ margin: "10px 0" }}
                                >
                                    The API Project
                                </h5>
                                <p className="card-text" style={{ fontSize: "14px" }}>
                                    The project consists of three APIs. PPP, ForEx and Weather Api
                                </p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Divya4242/The-API-Project"><img style={{ color: "black" }} src={git} alt="..." height={46} width={46} /> </a>
                                <a target="_blank" rel="noreferrer" href="https://divyaapis.azurewebsites.net"><img style={{ marginLeft: "10px" }} src={web} alt="..." height={46} width={46} /> </a>
                            </div>
                        </div>
                        <div
                            className="col-md-3 card mx-2 OS"
                            style={{ border: "0", padding: " 5px" }}
                        >
                            <div
                                className="our-services-icon mx-auto pt-3"
                                style={{ marginBottom: "-10px" }}
                            >
                                <img src={img3} className="card-img-top" alt="..." height={80} />
                            </div>
                            <div className="card-body text-center">
                                <h5
                                    className="card-title text-center"
                                    style={{ margin: "10px 0" }}
                                >
                                    The OS Project
                                </h5>
                                <p className="card-text" style={{ fontSize: "14px" }}>
                                    This project contains a number of operating system programs, such as
                                    page replacement algorithms, scheduling algorithms, and memory partitioning algorithms.
                                </p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Divya4242/The-OS-Project"><img style={{ color: "black" }} src={git} alt="..." height={46} width={46} /> </a>
                                <a target="_blank" rel="noreferrer" href="https://divyaprograms.azurewebsites.net/"><img style={{ marginLeft: "10px" }} src={web} alt="..." height={46} width={46} /> </a>
                            </div>
                        </div>
                        <div
                            className="col-md-3 card IT"
                            style={{ border: "0", padding: " 5px" }}
                        >
                            <div
                                className="our-services-icon mx-auto pt-3"
                                style={{ marginBottom: "-10px" }}
                            >
                                <img src={img4} className="card-img-top" alt="..." height={80} />
                            </div>
                            <div className="card-body text-center">
                                <h5
                                    className="card-title text-center"
                                    style={{ margin: "10px 0" }}
                                >
                                    IT Dept. Website
                                </h5>
                                <p className="card-text" style={{ fontSize: "14px" }}>
                                    This website is dedicated to IT Department of LD College
                                    Made in React JS, Bootstrap and Firebase
                                </p>
                                <a target="_blank" rel="noreferrer" href="https://expressitmag.netlify.app/"><img style={{ marginLeft: "10px" }} src={web} alt="..." height={46} width={46} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "30px" }} className="certifications">
                <h1 style={{ paddingTop: "30px" }}>Certifications</h1>
                <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr> <br />
                <div className="img">
                    <a id="AZ" onmouseover="cursor:'pointer'" target="_blank" rel="noreferrer" href="https://www.credly.com/badges/e68b5950-30db-4e34-ba71-b3928f39a408/public_url"><img alt="Azure Fundamental Cetificate AZ-900" title="Azure Fundamental Certification" style={{ cursor: "pointer", }} src={Az}></img></a>
                    <a id="Google" onmouseover="cursor:'pointer'" target="_blank" rel="noreferrer" href="https://www.credential.net/3f3764a4-151c-484f-9626-41f076d4799f#gs.10045np"><img id="myGoogle" style={{ marginLeft: "30px", cursor: "pointer" }} alt="Google Cloud Digital Leader" title="Google Cloud Digital Leader Certification" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/70951264?key=fd1b640dade2417f43ccfa1848122130055c397245e58883f2bbce165356002b"></img></a>
                    <a id="AWS" onmouseover="cursor:'pointer'" target="_blank" rel="noreferrer" href="https://www.udemy.com/certificate/UC-2ffdf187-a16a-4958-93ac-ec7ecfdf5a46/"><img id="myAWS" alt="AWS Solution Architect" title="AWS Solution Architect Associate Certification (Udemy Certified)" style={{ marginLeft: "30px", width: "190px", height: "190px", backgroundColor: "aliceblue" }} src={AWS}></img></a>
                </div>
            </div>
        </div>

    )
}

export default Projects;