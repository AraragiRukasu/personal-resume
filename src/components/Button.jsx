import React from "react";

const Button = (props) => {
    return(
        <div className="button">
            <a href={props.href}>
                {props.text}
            </a>
        </div>
    );
}

export default Button;