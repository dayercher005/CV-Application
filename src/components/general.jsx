import personLogo from "/person.svg";
import arrowLogo from "../assets/arrow.svg" 
import {useState} from "react";

import "../styles/Sections.css";

function GeneralSection({sendGeneralSectionDetails}) {

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const [section, setSection] = useState({
        name: "Javier Chua",
        email: "javierchua123@gmail.com",
        phoneNumber: "+65 9876 5432"
    })

    
    const Toggle = () => {
        setToggleDropdown(!toggleDropdown);
    }

    const EditName = (event) => {
        setSection({
            ...section, name: event.target.value
        })
    }

    const EditEmail = (event) => {
        setSection({
            ...section, email: event.target.value
        })
    }

    const EditPhoneNumber = (event) => {
        setSection({
            ...section, phoneNumber: event.target.value
        })
    }


    const DisplayGeneralSectionData = () => {
        sendGeneralSectionDetails(section);
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
                        placeholder="Javier Chua"
                        onChange = {EditName}
                        value = {section.name}
                    />
                </div>

                <div className="inputSection">
                    <label>Email</label>
                    <input 
                        type = "email"
                        placeholder="javierchua123@gmail.com"
                        value = {section.email}
                        onChange = {EditEmail}
                    />
                </div>

                <div className="inputSection">
                    <label>Phone Number</label>
                    <input 
                        type = "tel"
                        placeholder="+65 9876 5432"
                        value = {section.phoneNumber}
                        onChange = {EditPhoneNumber}
                    />
                </div>

                <button 
                    className="submitButton"
                    type="button"
                    onClick = {DisplayGeneralSectionData}
                    >
                    Submit
                </button>

            </div>

            </form>

        </div>
    )
}

export default GeneralSection