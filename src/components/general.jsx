import personLogo from "/public/person.svg";
import "../styles/Sections.css";

function GeneralSection() {

    return (
        <div className="formSection">

            <form>

                <div class="sectionHeader">
                    <img className="logoStyles" src={personLogo}/>
                    <h1>Personal Experience</h1>
                </div>

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
            </form>

        </div>
    )
}

export default GeneralSection