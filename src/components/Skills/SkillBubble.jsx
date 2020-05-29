import React from "react"

const SkillBubble = (props) => {
    return(
        <div className="bubble">
            <span>
                {[props.skill]}
            </span>
        </div>
    );
}

export default SkillBubble;