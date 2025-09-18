import GeneralSection from "./components/general.jsx"
import EducationSection from "./components/education.jsx";
import PracticalSection from "./components/practical.jsx";
import ApplicationSection from "./components/application.jsx";
import { useState } from "react" 
import './styles/App.css';

function App() {

  const [generalData, setGeneralData] = useState({
        name: "Javier Chua",
        email: "javierchua123@gmail.com",
        phoneNumber: "+65 9876 5432",
        location: "Singapore",
        linkedin: "https://www.linkedin.com",
        profileSummary: `Lead client engagements by identifying business challenges, developing tailored solutions, and delivering strategic recommendations to drive operational efficiency and growth. Manage cross-functional teams and collaborate with stakeholders across all levels to ensure project alignment, timely delivery, and measurable impact. Conduct in-depth data analysis, market research, and process assessments to uncover improvement opportunities and support evidence-based decision-making. Facilitate client workshops, presentations, and executive briefings to communicate findings and strategic insights.`
  });

  const [educationData, setEducationData] = useState([{
        school: "University of Bristol",
        course: "Bachelor of Social Sciences, major in Psychology",
        date: "01/07/2015",
        id: crypto.randomUUID()
  }]);
  
  const [practicalData, setPracticalData] = useState([{
        company : "Accenture pte ltd",
        position: "Senior Consultant",
        startDate: "01/02/2020",
        endDate: "01/02/2024",
        description: "Junior IT Consultant with 2+ years of experience leading digital transformation projects for enterprise clients across finance and retail sectors. Expertise in cloud strategy, systems integration, and agile delivery. Adept at collaborating with stakeholders to align technology solutions with business goals. Known for bridging the gap between technical teams and executive leadership to deliver scalable and cost-effective solutions.",
        id: crypto.randomUUID()
  }]);


  const sendGeneralData = (data) => {
    setGeneralData(data)
  }

  const sendEducationData = (data) => {
    setEducationData(data);
  }

  const sendPracticalData = (data) => {
    setPracticalData(data);
  }

  return (
    <div className="cvSections">
      <div className="editingSections">

        <GeneralSection 
          sendGeneralSectionDetails = {sendGeneralData}
        />

        <EducationSection
          sendEducationSectionDetails = {sendEducationData}  
        />

        <PracticalSection 
          sendPracticalSectionDetails = {sendPracticalData}
        />

      </div>

      <ApplicationSection 
        generalSection = {generalData}
        educationSection = {educationData}
        practicalSection = {practicalData}
      />

    </div>
  )
}

export default App
