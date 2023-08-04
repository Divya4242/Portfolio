import React from "react";
import myimage from './images/profile.jpeg';
function Aboutme() {
    return (
        <div className="aboutme">
            <h1 style={{ paddingTop: "30px" }}>About Me</h1>
            <hr style={{ width: "70%", position:"relative", left:"15%" }}></hr> <br />

            <div style={{ justifyContent: "center", display: "flex" }}>
                <img className="myimage" alt="" src={myimage}></img>
            </div> <br/>
            <p style={{ justifyContent: "center", display: "flex" }}>💬 Student, self-taught coder <br/>
                📙 Studies at Lalbhai Dalpatbhai College of Engineering, Ahmedabad <br/>
                🔭 Intrested in Cloud computing, DevOps, web-development, anything tech <br/>
                🖥 Develops webapps. front-end works. <br/>
                📚 Branch Information Technology <br/>
                🧩 Likes gaming. cycling. and obviously coding <br/>
            </p>
        </div>
    )
}

export default Aboutme;