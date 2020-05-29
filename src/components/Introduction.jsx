import React from "react"

const contentPart1 = "I created this small web project to show a part of my skills on web development and as a digital, easy to share resume. Created quickly with React and it's out of the box create-react-app, "+
"that's as far as I took the easier path, from that onwards everything was designed as light weight as possible, being 'react-icons' and 'node-sass' the only extra "+
"libraries used.";
const contentPart2 = "I'm an Electronic Engineer that took the developing path and is always looking to improve his knowledge and skills, I'll take any opportunity to learn new "+
"things and become a better professional.";

const Introduction = () => {
    return(
        <div className="introduction">
            <h2 className="title">
                A little about myself and this website
            </h2>
            <div className="intro-content">
                <p>{contentPart1}</p>
                <p>{contentPart2}</p>
            </div>
        </div>
    );
}

export default Introduction;