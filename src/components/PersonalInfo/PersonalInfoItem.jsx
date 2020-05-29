import React from "react"

const PersonalInfoItem = (props) => {
    return(
        <div className="personal-info-item">
            {props.children}
            {props.link?
                <a href={props.link} className="info">{props.info}</a>
            :
                <span className="info">{props.info}</span>
            }
        </div>
    );
}

export default PersonalInfoItem;