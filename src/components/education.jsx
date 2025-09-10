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
                            onChange = {(event) => setForm(event.target.value)}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Course</label>
                        <input 
                            type="text"
                            value = {form.course}
                            onChange = {(event) => setForm(event.target.value)}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Date of Study</label>
                        <input
                            type="date"
                            value = {form.date}
                            onChange = {(event) => setForm(event.target.value)}
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