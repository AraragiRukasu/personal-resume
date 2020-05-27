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
        <div className="skills">
            {skillCollection.map(skill => <SkillBubble key={skill} skill={skill}/>)}
        </div>
    );
}

export default Skills;