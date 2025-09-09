import suitcaseLogo from "/public/suitcase.svg";
import "../styles/Sections.css";

function PracticalSection() {

    return (
         <div className="formSection">

            <form>

                <div className="sectionHeader">
                    <img className="logoStyles" src={suitcaseLogo} />
                    <h1>Work Experience</h1>
                </div>
                <div className="inputSection">
                    <label>Company Name</label>
                    <input></input>
                </div>

                <div className="inputSection">
                    <label>Position</label>
                    <input></input>
                </div>

                <div className="inputSection">
                    <label>Start Date</label>
                    <input type="date"></input>
                </div>

                <div className="inputSection">
                    <label>End Date</label>
                    <input type="date"></input>
                </div>

                <div className="inputSection">
                    <label>Description</label>
                    <input></input>
                </div>
            </form>

        </div>
    )
}

export default PracticalSection