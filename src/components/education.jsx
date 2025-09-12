import educationLogo from "/education.svg";
import { useState } from "react";
import arrowLogo from "../assets/arrow.svg" 
import "../styles/Sections.css";

function EducationSection() {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const [form, setForm] = useState({
        school: "",
        course: "",
        date: ""
    })

    const Toggle = () => {
        setToggleDropdown(!toggleDropdown);
    }

    const EditSchool = (event) => {
        setForm(...form, form.school = event.target.value)
    }

    const EditCourse = (event) => {
        setForm(...form, form.course = event.target.value)
    }

    const EditDate = (event) => {
        setForm(...form, form.date = event.target.value)
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
                        <input
                            type="text"
                            value = {form.school}
                            onChange = {EditSchool}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Course</label>
                        <input 
                            type="text"
                            value = {form.course}
                            onChange = {EditCourse}
                            
                        />
                    </div>

                    <div className="inputSection">
                        <label>Date of Study</label>
                        <input
                            type="date"
                            value = {form.date}
                            onChange = {EditDate}
                        />
                    </div>

                    <button className="submitButton">
                        Submit
                    </button>

                </div>

            </form>

        </div>
    )
}



export default EducationSection