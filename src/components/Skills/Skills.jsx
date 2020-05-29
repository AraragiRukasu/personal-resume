import React from "react"
import SkillBubble from "./SkillBubble"

const skillCollection = [
    ".NET",
    "css",
    "React",
    "Azure DevOps",
    "Git",
    "Angular",
    "MVC"

]

const Skills = () => {
    return(
        <div className="skills-container">
            <h3>Skills</h3>
            <div className="skills">
                {skillCollection.map(skill => <SkillBubble key={skill} skill={skill}/>)}
            </div>
        </div>
    );
}

export default Skills;