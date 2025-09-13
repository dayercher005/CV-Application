import suitcaseLogo from "/suitcase.svg";
import arrowLogo from "../assets/arrow.svg" 
import { useState } from "react";
import "../styles/Sections.css";

function PracticalSection({sendPracticalSectionData}) {

    const [section, setSection] = useState({
        company : "",
        position: "",
        startDate: "",
        endDate: "",
        description: ""
    })

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const Toggle = () => {
        setToggleDropdown(!toggleDropdown);
    }

    const EditCompany = (event) => {
        setSection({
            ...section, company: event.target.value
        })
    }

    const EditPosition = (event) => {
        setSection({
            ...section, position: event.target.value
        })
    }

    const EditStartDate = (event) => {
        setSection({
            ...section, startDate: event.target.value
        })
    }

    const EditEndDate = (event) => {
        setSection({
            ...section, endDate: event.target.value
        })
    }

    const EditDescription = (event) => {
        setSection({
            ...section, description: event.target.value
        })
    }

    const DisplayPracticalSectionData = () => {
        sendPracticalSectionData(section)
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
                        <label>Company</label>
                        <input 
                            type="text"
                            value = {section.company}
                            onChange = {EditCompany}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Position</label>
                        <input
                            type="text" 
                            value = {section.position}
                            onChange = {EditPosition}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Start Date</label>
                        <input 
                            type="date"
                            value = {section.startDate}
                            onChange = {EditStartDate}
                        />
                    </div>

                    <div className="inputSection">
                        <label>End Date</label>
                        <input 
                            type="date"
                            value = {section.endDate}
                            onChange = {EditEndDate}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Description</label>
                        <input
                            type="text"
                            value = {section.description}
                            onChange = {EditDescription}
                        />
                    </div>

                    <button 
                        className="submitButton"
                        onClick = {DisplayPracticalSectionData}>
                        Submit
                    </button>

                </div>

            </form>

        </div>
    )
}

export default PracticalSection