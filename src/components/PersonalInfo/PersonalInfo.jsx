import React from "react"
import PersonalInfoItem from "./PersonalInfoItem"
import { FcPhoneAndroid } from "react-icons/fc"
import { DiGithubAlt } from "react-icons/di"
import { FaLinkedinIn } from "react-icons/fa"

const cellphone = "(+549)3413145243";
const fullName = "Lucas Sandoz";
const nationalities = "Nationalities: Argentine, Italian";
const github = "https://github.com/AraragiRukasu";
const falseLinkedIn = "https://www.linkedin.com/in/lucas-sandoz";
const trueLinkedIn = "https://www.linkedin.com/in/lucas-sandoz-438047a3/?locale=en_US";

const PersonalInfo = () => {
    return(
        <div className="personal-info">
            <h3>Personal Info</h3>
            <PersonalInfoItem info={fullName}/>
            <PersonalInfoItem info={nationalities}/>
            <PersonalInfoItem info={cellphone}>
                <FcPhoneAndroid className="icon-small"/>
            </PersonalInfoItem>
            <PersonalInfoItem info={github} link={github}>
                <DiGithubAlt className="icon-small"/>
            </PersonalInfoItem>
            <PersonalInfoItem info={falseLinkedIn} link={trueLinkedIn}>
                <FaLinkedinIn className="icon-small"/>
            </PersonalInfoItem>
        </div>
    )
}

export default PersonalInfo