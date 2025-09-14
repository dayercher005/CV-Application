import educationLogo from "/education.svg";
import personLogo from "/person.svg";
import suitcaseLogo from "/suitcase.svg";
import emailLogo from "/email.svg";
import locationLogo from "/location.svg";
import phoneLogo from "/phone.svg";
import linkedinLogo from "/linkedin.svg";

function ApplicationSection(
    {generalSection, educationSection, practicalSection}
) {

    

    return (
        <div className="applicationSection">

            <div
                className = "sideDisplay"
            >
                <h2
                    className="contactHeader"
                    styles="font-family: sans-serif;"
                >
                    Contact
                </h2>

                <div className="contactDetailPortion">

                    <img 
                        src={phoneLogo}
                        className="applicationLogos sideLogos"
                    />
                    <p>
                        {generalSection.phoneNumber}
                    </p>

                </div>

                <div className="contactDetailPortion">

                    <img 
                        src={emailLogo}
                        className="applicationLogos sideLogos"
                    />
                    <p>
                        {generalSection.email}
                    </p>

                </div>

                <div className="contactDetailPortion">

                    <img 
                        src={locationLogo}
                        className="applicationLogos sideLogos"
                    />
                    <p>
                        {generalSection.location}
                    </p>

                </div>

                <div className="contactDetailPortion">

                    <img 
                        src={linkedinLogo}
                        className="applicationLogos sideLogos"
                    />
                    <p>
                        {generalSection.linkedin}
                    </p>

                </div>

            </div>

            <div
                className="mainDisplay"
            >
                
                <h1
                    className="displayName"
                >
                    {generalSection.name}

                </h1>

                <h2
                    className="displayPosition"
                >
                    {practicalSection.position}
                </h2>

                <div
                    className="applicationProfileSummarySection"
                >

                    <h3
                        className="mainDisplayTitles"
                    >
                        <img 
                            src={personLogo}
                            className="applicationLogos"    
                        />
                        Profile Summary
                    </h3>

                    <p
                    className = "displayDescription">
                        {generalSection.profileSummary}
                    </p>

                </div>


                <div
                    className="applicationPracticalSection"
                >

                    <h3
                        className="mainDisplayTitles"
                    >
                        <img
                            src={suitcaseLogo}
                            className="applicationLogos"
                        />
                        Experience
                    </h3>

                    <h4>
                        {practicalSection.company}
                    </h4>
                    <p>
                        {practicalSection.position}
                    </p>
                </div>


                <div
                    className="applicationEducationSection"
                >

                    <h3
                        className="mainDisplayTitles"
                    >
                        <img 
                            src={educationLogo}
                            className = "applicationLogos"
                        />
                        Education
                    </h3>
                    <h4>
                        {educationSection.course}
                    </h4>
                    <p>
                        {educationSection.school}
                    </p>
                    <p>
                        {educationSection.date}
                    </p>

                </div>

            </div>

        </div>
    )
}

export default ApplicationSection