import React from "react";
import Button from "./Button"

const Header = () => {
    return(
        <div className="header">
            <Button text="TEST" href="www.google.com"/>
            <Button text="TEST2" href="www.google.com"/>
        </div>
    );
}

export default Header;