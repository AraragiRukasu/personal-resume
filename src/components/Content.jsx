import React from "react"
import Introduction from "./Introduction"
import Skills from "./Skills"
import Experience from "./Experience"
import PersonalInfo from "./PersonalInfo"

const Content = () => {
    return(
        <div className="content">
            <div className="row-container">
                <Introduction/>
                <PersonalInfo/>
            </div>
            <div className="row-container">
                <Experience/>
                <Skills/>
            </div>
        </div>
    );
}

export default Content;