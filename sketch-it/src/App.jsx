import Dropdown from "./components/Dropdown";
import Form from "./components/Form";
import Tab from "./components/Tab";
import "./styles/App.css";
import { useState, useEffect } from "react";

function App() {

  // state management
  const [subject, setSubject] = useState(null);
  const [timer, setTimer] = useState(null);
  const [section, setSection] = useState("people");

  // sections subject dropdowns 

  const dropdownConfigs = {
    people: [
      {
        name: "People",
        type: "subject",
        required: true,
        options: ["All", "Portrait", "Female Portrait", "Male Portrait", "Face Expressions", "Poses"],
      },
      { name: "Select Timer", type: "timer", required: true },
    ],
    body_parts: [
      {
        name: "Body Parts",
        type: "subject",
        required: true,
        options: ["All", "Eyes", "Mouth", "Nose", "Hands", "Feet", "Ears"],
      },
      { name: "Select Timer", type: "timer", required: true },
    ],
    animals: [
      {
        name: "Animals",
        type: "subject",
        required: true,
        options: ["Mammals", "Birds", "Fish", "Reptiles", "Anphibians", "Insects"],
      },
      { name: "Select Timer", type: "timer", required: true },
    ],

    nature: [
      {
        name: "Nature",
        type: "subject",
        required: true,
        options: ["Landscapes", "Plants", "Trees", "Flowers", "Fruits", "Mountains", "Sea", "Sky"],
      },
      { name: "Select Timer", type: "timer", required: true },
    ],

    buildings: [
      {
        name: "Buildings",
        type: "subject",
        required: true,
        options: ["Architecture", "Sculptures", "Houses", "Streets"],
      },
      { name: "Select Timer", type: "timer", required: true },
    ],

    other: [
      {
        name: "Other",
        type: "subject",
        required: true,
        options: ["Still Life", "Food"],
      },
      { name: "Select Timer", type: "timer", required: true },
    ],
  };

  // functions

  const handleSelect = (value, type) => {
    if (type === "subject") {
      setSubject(value);
    } else if (type === "timer") {
      setTimer(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted with Subject: ${subject} and Timer: ${timer}`);
  };

  return (
    <div>
    
    <div className="tabs">
      {Object.keys(dropdownConfigs).map((sectionKey) => {
        const configName = dropdownConfigs[sectionKey][0].name; // Get the first config name for display
        return (
          <Tab
            key={`${sectionKey}-tab`}
            section={configName}
            onClick={() => setSection(sectionKey)}
          />
        );
      })}
    </div>

      <Form
        section={section}
        handleSubmit={handleSubmit}

        // render dropdowns according to the dropdown config
        inputs={dropdownConfigs[section].map((config) => (
          <div key={`${config.name}-${config.type}`}>

            <label htmlFor={`${section} ${config.type}`} className="dropdown-label">
              Select {config.type}      
            </label>

            <Dropdown
              id={`${section} ${config.type}`}
              key={`${config.name}-${config.type}`}
              options={config.options}
              handleSelect={(value) => handleSelect(value, config.type)}
              type={config.type}
              name={config.name}
              required={config.required}
            />

          </div>

        ))}
      />
    </div>
  );
}

export default App;
