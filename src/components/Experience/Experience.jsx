import React from "react"
import ExperienceItem from "./ExperienceItem"

const experienceRecord = [
    {
        place: "PwC",
        title: "Senior Associate/Software Developer",
        range: "2018/07/23 - Now",
        responsabilities: [
            "Something",
            "Better",
            "Will",
            "Come"
        ]
    }
];

const Experience = () => {
    return(
        <div className="experience">
            <h2>Experience</h2>
            {experienceRecord.map(expItem => <ExperienceItem expItem={expItem}/>)}
        </div>
    );
}

export default Experience;