import educationLogo from "/education.svg";
import { useState } from "react";
import arrowLogo from "../assets/arrow.svg" 
import "../styles/Sections.css";

function EducationSection() {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const Toggle = () => {
        setToggleDropdown(!toggleDropdown);
    }

    return (
        <div className="formSection">

            <form>
                <div
                 className="sectionHeader"
                 onClick = {Toggle}
                >
                    <img className="logoStyles" src={educationLogo}/>
                    <h1>Educational Experience</h1>
                    <img
                     className = { toggleDropdown ? 'arrowLogoInactive' : 'arrowLogoActive'}
                     src = {arrowLogo}
                     onClick = {Toggle}
                    />
                </div>

                <div
                 className = {toggleDropdown ? 'sectionVisibilityActive' : 'sectionVisibilityInactive'}
                >

                    <div className="inputSection">
                        <label>School</label>
                        <input></input>
                    </div>

                    <div className="inputSection">
                        <label>Course</label>
                        <input></input>
                    </div>

                    <div className="inputSection">
                        <label>Date of Study</label>
                        <input type="date"></input>
                    </div>

                </div>

            </form>

        </div>
    )
}



export default EducationSection