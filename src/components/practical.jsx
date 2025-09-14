import suitcaseLogo from "/suitcase.svg";
import arrowLogo from "../assets/arrow.svg" 
import { useState } from "react";
import "../styles/Sections.css";

function PracticalSection({sendPracticalSectionDetails}) {

    const [section, setSection] = useState({
        company : "Accenture",
        position: "Senior Consultant",
        startDate: "01/02/2020",
        endDate: "01/02/2024",
        description: `Lead client engagements by identifying business challenges, developing tailored solutions, and delivering strategic recommendations to drive operational efficiency and growth. Manage cross-functional teams and collaborate with stakeholders across all levels to ensure project alignment, timely delivery, and measurable impact. Conduct in-depth data analysis, market research, and process assessments to uncover improvement opportunities and support evidence-based decision-making. Facilitate client workshops, presentations, and executive briefings to communicate findings and strategic insights`
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
        sendPracticalSectionDetails(section)
    }

    const ButtonHandler = (event) => {
        event.preventDefault();
    }
    

    return (
         <div className="formSection">

            <form
                onSubmit = {ButtonHandler}
            >

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
                            placeholder="Accenture"
                            value = {section.company}
                            onChange = {EditCompany}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Position</label>
                        <input
                            type="text" 
                            placeholder="Senior Consultant"
                            value = {section.position}
                            onChange = {EditPosition}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Start Date</label>
                        <input 
                            type="date"
                            placeholder="01/02/2020"
                            value = {section.startDate}
                            onChange = {EditStartDate}
                        />
                    </div>

                    <div className="inputSection">
                        <label>End Date</label>
                        <input 
                            type="date"
                            placeholder="01/02/2024"
                            value = {section.endDate}
                            onChange = {EditEndDate}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Description</label>
                        <textarea
                            type="text"
                            placeholder="Lead client engagements by identifying business challenges, developing tailored solutions, 
                            and delivering strategic recommendations to drive operational efficiency and growth.
                            Manage cross-functional teams and collaborate with stakeholders across all levels to ensure project alignment, timely delivery, and measurable impact.
                            Conduct in-depth data analysis, market research, and process assessments to uncover improvement opportunities and support evidence-based decision-making.
                            Facilitate client workshops, presentations, and executive briefings to communicate findings and strategic insights."
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