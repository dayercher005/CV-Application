import personLogo from "/person.svg";
import arrowLogo from "../assets/arrow.svg" 
import {useState} from "react"
import "../styles/Sections.css";

function GeneralSection() {

    const [toggleDropdown, setToggleDropdown] = useState(false);
    
    const Toggle = () => {
        setToggleDropdown(!toggleDropdown);
    }

    return (
        <div className="formSection">

            <form>

                <div
                 class="sectionHeader"
                 onClick = {Toggle} 
                >
                    <img className="logoStyles" src={personLogo}/>
                    <h1>Personal Experience</h1>
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
                    <input></input>
                </div>

                <div className="inputSection">
                    <label>Email</label>
                    <input></input>
                </div>

                <div className="inputSection">
                    <label>Phone Number</label>
                    <input></input>
                </div>

            </div>

            </form>

        </div>
    )
}

export default GeneralSection