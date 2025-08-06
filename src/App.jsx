import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import LivePreview from "./components/LivePreview";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  const [formData, setFormData] = useState({
    general: { name: "", email: "", phone: "" },
    education: { school: "", degree: "", eduStart: "", eduEnd: "" },
    experience: [
      {
        company: "",
        position: "",
        responsibilities: "",
        workStart: "",
        workEnd: "",
      },
    ],
  });

  function addExperience() {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experience: [
        ...prevFormData.experience,
        {
          company: "",
          position: "",
          responsibilities: "",
          workState: "",
          workEnd: "",
        },
      ],
    }));
  }

  function removeExperience(index) {
    setFormData((prevFormData) => {
      if (prevFormData.experience.length <= 1) return prevFormData;
      const newExperience = prevFormData.experience.filter(
        (_, i) => i !== index
      );
      return { ...prevFormData, experience: newExperience };
    });
  }

  const [isEditingGeneral, setIsEditingGeneral] = useState(true);
  const [isEditingEducation, setIsEditingEducation] = useState(true);
  const [isEditingExperience, setIsEditingExperience] = useState(true);

  return (
    <div className="App">
      <h1>CV Builder</h1>

      <div className="layout-container">
        {/* Left Side – Form Section */}
        <div className="form-section">
          <GeneralInfo
            data={formData.general}
            onChange={(newGeneral) =>
              setFormData({ ...formData, general: newGeneral })
            }
            isEditing={isEditingGeneral}
            onSubmit={() => setIsEditingGeneral(false)}
            onEdit={() => setIsEditingGeneral(true)}
          />
        
          <Education
            data={formData.education}
            onChange={(newEducation) =>
              setFormData({ ...formData, education: newEducation })
            }
            isEditing={isEditingEducation}
            onSubmit={() => setIsEditingEducation(false)}
            onEdit={() => setIsEditingEducation(true)}
          />

          {formData.experience.map((job, index) => (
            <Experience
              key={index}
              data={job}
              onChange={(updatedJob) => {
                const newExperience = [...formData.experience];
                newExperience[index] = updatedJob;
                setFormData({ ...formData, experience: newExperience });
              }}
              onRemove={() => removeExperience(index)}
              isEditing={isEditingExperience}
              onSubmit={() => setIsEditingExperience(false)}
              onEdit={() => setIsEditingExperience(true)}
              canRemove={formData.experience.length > 1}
            />
          ))}

          <button
            onClick={addExperience}
            disabled={formData.experience.length >= 3}
          >
            Add Experience
          </button>
        </div>

        {/* Right Side – Preview Section */}
        <div className="preview-section">
          <LivePreview formData={formData} />
        </div>
      </div>
    </div>
  );
}

export default App;
