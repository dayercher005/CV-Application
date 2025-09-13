function ApplicationSection(
    {generalSection, educationSection, practicalSection}
) {

    

    return (
        <div className="applicationSection">
            <h1

            >
                {generalSection.name}
                {generalSection.phoneNumber}
                {generalSection.email}
                {educationSection}
                {practicalSection}
            </h1>
        </div>
    )
}

export default ApplicationSection