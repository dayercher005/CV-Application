import educationLogo from "/education.svg";
import { useState } from "react";
import arrowLogo from "../assets/arrow.svg" 
import "../styles/Sections.css";

function EducationSection({sendEducationSectionDetails}) {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const [form, setForm] = useState({
        school: "University of Bristole",
        course: "Bachelor of Social Sciences (Honours), major in Psychology",
        date: "01/07/2015"
    })

    const Toggle = () => {
        setToggleDropdown(!toggleDropdown);
    }

    const EditSchool = (event) => {
        setForm({...form, school : event.target.value})
    }

    const EditCourse = (event) => {
        setForm({...form, course : event.target.value})
    }

    const EditDate = (event) => {
        setForm({...form, date : event.target.value})
    }

    const DisplayEducationSectionData = () => {
        sendEducationSectionDetails(form)
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
                        <input
                            type="text"
                            placeholder="University of Bristole"
                            value = {form.school}
                            onChange = {EditSchool}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Course</label>
                        <input 
                            type="text"
                            placeholder="Bachelor of Social Sciences (Honours), major in Psychology"
                            value = {form.course}
                            onChange = {EditCourse}
                            
                        />
                    </div>

                    <div className="inputSection">
                        <label>Date of Study</label>
                        <input
                            type="date"
                            placeholder="01/07/2015"
                            value = {form.date}
                            onChange = {EditDate}
                        />
                    </div>

                    <button 
                        className="submitButton"
                        onClick = {DisplayEducationSectionData}>
                        Submit
                    </button>

                </div>

            </form>

        </div>
    )
}



export default EducationSection