import personLogo from "/person.svg";
import arrowLogo from "../assets/arrow.svg" 
import {useState} from "react";

import "../styles/Sections.css";

function GeneralSection() {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phoneNumber: ""
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
                    <img className="logoStyles" src={personLogo}/>
                    <h1>Personal Information</h1>
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
                    <label>Full name</label>
                    <input 
                        type = "text"
                        value = {form.name}
                        onChange = {(event) => setForm(event.target.value)}
                    />
                </div>

                <div className="inputSection">
                    <label>Email</label>
                    <input 
                        type = "email"
                        value = {form.email}
                        onChange = {(event) => setForm(event.target.value)}
                    />
                </div>

                <div className="inputSection">
                    <label>Phone Number</label>
                    <input 
                        type = "tel"
                        value = {form.phoneNumber}
                        onChange = {(event) => setForm(event.target.value)}
                    />
                </div>

                <button 
                    className="submitButton"
                    >
                    Submit
                </button>

            </div>

            </form>

        </div>
    )
}

export default GeneralSection