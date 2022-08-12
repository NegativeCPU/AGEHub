import React from "react";
import smilecpu from '../../images/SmileCPU.png';

export default function AboutUs() {
    return (
        <div className="container-fluid home-margin-top-less-200px">
            <br></br>
            <br></br>
            <div className="about-me">
                <div className="container-fluid bg-1 text-center cont">
                    <h2 className="margin">About Me</h2>

                    <h1>Joseph Thomas</h1>
                </div>
                <div className="container-fluid bg-2 text-center cont">
                    <h3 className="margin">Full Stack Software Developer</h3>

                </div>
                <div className="container-fluid bg-3 text-center cont">
                    <h3 className="margin">Where To Find Me?</h3><br />
                    <div className="row">
                        <div className="col-sm-4">
                            <a href="https://www.linkedin.com/in/joseph-thomas-165356a9/">LinkedIn</a>
                            <img className="img-responsive margin" style={{ width: "81%" }} alt="" />
                        </div>
                        <div className="col-sm-4">
                            <a href="https://github.com/NegativeCPU">GitHub</a>
                            <img className="img-responsive margin" style={{ width: "100%" }} alt="" />
                        </div>
                        <div className="col-sm-4">
                            <a href="mailto: {joseph.thomas.124@gmail.com}">Email: joseph.thomas.124@gmail.com</a>
                            <img className="img-responsive margin" style={{ width: "100%" }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}