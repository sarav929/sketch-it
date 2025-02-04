import Dropdown from "./components/Dropdown";
import Form from "./components/Form";
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
        options: ["All", "Portrait", "Female Portrait", "Male Portrait"],
      },
      { name: "Select Timer", type: "timer", required: true },
    ],
    body_parts: [
      {
        name: "Body Parts",
        type: "subject",
        required: true,
        options: ["Eyes", "Mouth", "Nose"],
      },
      { name: "Select Timer", type: "timer", required: true },
    ],
    animals: [
      {
        name: "Animals",
        type: "subject",
        required: true,
        options: ["Mammals", "Reptiles", "Insects"],
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

  useEffect(() => {
    console.log("Subject:", subject, "Timer:", timer);
  }, [subject, timer]);

  return (
    <div>
    
      <div className="tabs">
        <button onClick={() => setSection("people")}>People</button>
        <button onClick={() => setSection("body_parts")}>Body Parts</button>
        <button onClick={() => setSection("animals")}>Animals</button>
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
