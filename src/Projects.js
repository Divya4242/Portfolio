import React from "react";
import img1 from "./images/research.png"
import img2 from "./images/api.png";
import img3 from "./images/os.png";
import img4 from "./images/magazine.png";
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
                            className="col-md-3 card mx-2"
                            style={{ border: "0", padding: "15px 5px" }}
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
                            </div>
                        </div>
                        <div
                            className="col-md-3 card"
                            style={{ border: "0", padding: "15px 5px" }}
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
                                    This Website has 3 APIs. ForEx, PPP and Weather APis.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-3 card mx-2"
                            style={{ border: "0", padding: "15px 5px" }}
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
                                    This Website implements different OS concepts like Memory Partitioning Algorithm,
                                    Page Replacement Algorithm, etc.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-3 card"
                            style={{ border: "0", padding: "15px 5px" }}
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
                                    This is website is dedicatd to IT Department of LD College
                                    Made in React JS, Bootstrap and Firebase
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects;