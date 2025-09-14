import educationLogo from "/education.svg";

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

                <p>
                    {generalSection.phoneNumber}
                </p>

                <p>
                    {generalSection.email}
                </p>

                <p>
                    {generalSection.location}
                </p>

                <p>
                    {generalSection.linkedin}
                </p>

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

                <h3
                    className="mainDisplayTitles"
                >
                    <img />
                    Profile Summary
                </h3>
                <p
                className = "displayDescription">
                    {practicalSection.description}
                </p>

                <h3
                    className="mainDisplayTitles"
                >
                    <img 
                        src={educationLogo}
                        className = "educationLogo"
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
    )
}

export default ApplicationSection