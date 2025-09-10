import GeneralSection from "./components/general.jsx"
import EducationSection from "./components/education.jsx";
import PracticalSection from "./components/practical.jsx";
import ApplicationSection from "./components/application.jsx";
import './styles/App.css';

function App() {



  return (
    <div className="cvSections">
      <div class="editingSections">

        <GeneralSection/>

        <EducationSection/>

        <PracticalSection/>

      </div>

      <ApplicationSection />

    </div>
  )
}

export default App
