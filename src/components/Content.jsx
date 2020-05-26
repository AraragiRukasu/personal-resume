import React from "react"
import Introduction from "./Introduction"
import Skills from "./Skills"
import Experience from "./Experience"

const Content = () => {
    return(
        <div className="content">
            <Introduction/>
            <div className="row-container">
                <Experience/>
                <Skills/>
            </div>
        </div>
    );
}

export default Content;