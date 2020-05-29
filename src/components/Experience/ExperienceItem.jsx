import React from "react"

const ExperienceItem = (props) => {
    let { expItem } = props;

    return(
        <div className="experience-item">
            <div className="experience-header">
                <h2>{expItem.title}</h2>
                <div className="place-dates">
                    <span>{expItem.place}</span>
                    <span>{expItem.range}</span>
                </div>
            </div>
            <div className="experience-description">
                {expItem.responsabilities.map(respItem => <span>{respItem}</span>)}
            </div>
        </div>
    );
}

export default ExperienceItem;