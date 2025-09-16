import GeneralSection from "./components/general.jsx"
import EducationSection from "./components/education.jsx";
import PracticalSection from "./components/practical.jsx";
import ApplicationSection from "./components/application.jsx";
import { useState } from "react" 
import './styles/App.css';

function App() {

  const [generalData, setGeneralData] = useState("");

  const [educationData, setEducationData] = useState([{
        school: "University of Bristol",
        course: "Bachelor of Social Sciences, major in Psychology",
        date: "01/07/2015"
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
