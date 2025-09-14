function ApplicationSection(
    {generalSection, educationSection, practicalSection}
) {

    

    return (
        <div className="applicationSection">

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

                <h3>
                    Professional Summary
                </h3>
                <p
                className = "displayDescription">
                    {practicalSection.description}
                </p>

                <h3>
                    Education
                </h3>
                <h4>
                    {educationSection.course}
                </h4>
                <p>
                    {educationSection.school}
                    {educationSection.date}
                </p>

            </div>

        </div>
    )
}

export default ApplicationSection