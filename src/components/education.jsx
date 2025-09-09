import educationLogo from "/education.svg";
import "../styles/Sections.css";

function EducationSection() {

    return (
        <div className="formSection">

            <form>
                <div className="sectionHeader">
                    <img className="logoStyles" src={educationLogo}/>
                    <h1>Educational Experience</h1>
                </div>

                <div className="inputSection">
                    <label>School</label>
                    <input></input>
                </div>

                <div className="inputSection">
                    <label>Course</label>
                    <input></input>
                </div>

                <div className="inputSection">
                    <label>Date of Study</label>
                    <input type="date"></input>
                </div>

            </form>

        </div>
    )
}

export default EducationSection