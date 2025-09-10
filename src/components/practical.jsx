import suitcaseLogo from "/suitcase.svg";
import arrowLogo from "../assets/arrow.svg" 
import { useState } from "react";
import "../styles/Sections.css";

function PracticalSection() {

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
                    <img className="logoStyles" src={suitcaseLogo} />
                    <h1>Work Experience</h1>
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
                        <label>Company Name</label>
                        <input 
                            type="text" 
                        />
                    </div>

                    <div className="inputSection">
                        <label>Position</label>
                        <input
                            type="text" 
                        />
                    </div>

                    <div className="inputSection">
                        <label>Start Date</label>
                        <input 
                            type="date" 
                        />
                    </div>

                    <div className="inputSection">
                        <label>End Date</label>
                        <input 
                            type="date" 
                        />
                    </div>

                    <div className="inputSection">
                        <label>Description</label>
                        <input
                            type="text" 
                        />
                    </div>

                    <button 
                        className="submitButton"
                        onClick>
                        Submit
                    </button>

                </div>

            </form>

        </div>
    )
}

export default PracticalSection