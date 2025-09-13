import GeneralSection from "./components/general.jsx"
import EducationSection from "./components/education.jsx";
import PracticalSection from "./components/practical.jsx";
import ApplicationSection from "./components/application.jsx";
import { useState } from "react" 
import './styles/App.css';

function App() {

  const [generalData, setGeneralData] = useState("");
  const [educationData, setEducationData] = useState("");
  const [practicalData, setPracticalData] = useState("");

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
          onDataSend = {sendGeneralData}
        />

        <EducationSection
          onDataSend = {sendEducationData}  
        />

        <PracticalSection 
          onDataSend = {sendPracticalData}
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
