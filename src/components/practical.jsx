import suitcaseLogo from "/suitcase.svg";
import arrowLogo from "../assets/arrow.svg" 
import { useState } from "react";
import deleteLogo from "/delete.svg"
import "../styles/Sections.css";

function PracticalSection({sendPracticalSectionDetails}) {

    const [practicalSectionList, setPracticalSectionList] = useState([{
        company : "Accenture pte ltd",
        position: "Senior Consultant",
        startDate: "01/02/2020",
        endDate: "01/02/2024",
        description: "Junior IT Consultant with 2+ years of experience leading digital transformation projects for enterprise clients across finance and retail sectors. Expertise in cloud strategy, systems integration, and agile delivery. Adept at collaborating with stakeholders to align technology solutions with business goals. Known for bridging the gap between technical teams and executive leadership to deliver scalable and cost-effective solutions.",
        id: crypto.randomUUID()
    }]);

    const [section, setSection] = useState({
        company : "Accenture pte ltd",
        position: "Senior Consultant",
        startDate: "01/02/2020",
        endDate: "01/02/2024",
        description: "Junior IT Consultant with 2+ years of experience leading digital transformation projects for enterprise clients across finance and retail sectors. Expertise in cloud strategy, systems integration, and agile delivery. Adept at collaborating with stakeholders to align technology solutions with business goals. Known for bridging the gap between technical teams and executive leadership to deliver scalable and cost-effective solutions.",
        id: crypto.randomUUID()
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
        AddPracticalExperience();
        sendPracticalSectionDetails(practicalSectionList);
    }

    const ButtonHandler = (event) => {
        event.preventDefault();
    }

    const AddPracticalExperience = () => {
        setPracticalSectionList([...practicalSectionList, section]);
    }

    const PracticalPositions = practicalSectionList.map((section) => 
        <div className="segmentDiv">
            <div key={section.id} className="submittedSegment">{section.position}</div>
            <img src={deleteLogo} className="deleteLogo"/>
        </div>
    )
    

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
                            placeholder="Junior Consultant"
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
                        <label>Job Description</label>
                        <textarea
                            type="text"
                            placeholder=""
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

            <div
                className="segmentContainer"
            >
                {PracticalPositions}
            </div>

        </div>
    )
}

export default PracticalSection