import Dropdown from "../components/Dropdown";
import Form from "../components/Form";
import Tab from "../components/Tab";
import { useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    // state management
    const [subject, setSubject] = useState(null)
    const [timer, setTimer] = useState(0)
    const [section, setSection] = useState("people");
    const [error, setError] = useState("");

    // sections subject dropdowns 

    const dropdownConfigs = {
    people: [
        {
        name: "People",
        type: "subject",
        required: true,
        options: [["All", "model"], 
        ["Portrait", "portrait photography"], 
        ["Female Portrait", "portrait photography female"], 
        ["Male Portrait", "portrait photography male"], 
        ["Face Expressions", "face expression"], 
        ["Poses", "pose"]],
        },
        { name: "Select Timer", type: "timer", required: true },
    ],
    body_parts: [
        {
        name: "Body Parts",
        type: "subject",
        required: true,
        options: [["All"], 
        ["Eyes", "human eyes"], 
        ["Mouth", "human mouth"], 
        ["Nose", "human nose"], 
        ["Hands", "human hands"], 
        ["Feet", "human feet"], 
        ["Ears", "human ears"]],
        },
        { name: "Select Timer", type: "timer", required: true },
    ],
    animals: [
        {
        name: "Animals",
        type: "subject",
        required: true,
        options: [["All", "animals"], 
        ["Mammals", "mammals"], 
        ["Birds", "birds"], 
        ["Fish", "fish"], 
        ["Reptiles", "reptiles"], 
        ["Anphibians", "amphibians"], 
        ["Insects", "insects"]],
        },
        { name: "Select Timer", type: "timer", required: true },
    ],

    nature: [
        {
        name: "Nature",
        type: "subject",
        required: true,
        options: [["All", "nature"], 
        ["Landscapes", "landscape"], 
        ["Plants", "plant"], 
        ["Trees", "tree"], 
        ["Flowers", "flower"], 
        ["Fruits", "fruit"], 
        ["Mountains", "mountain"], 
        ["Sea", "sea"], 
        ["Sky", "sky"]],
        },
        { name: "Select Timer", type: "timer", required: true },
    ],

    buildings: [
        {
        name: "Buildings",
        type: "subject",
        required: true,
        options: [["Architecture", "architecture"], 
        ["Sculptures", "sculpure"], 
        ["Houses", "house"], 
        ["Streets", "street photography"]],
        },
        { name: "Select Timer", type: "timer", required: true },
    ],

    other: [
        {
        name: "Other",
        type: "subject",
        required: true,
        options: [["Still Life", "still life"], 
        ["Food", "food photography"]],
        },
        { name: "Select Timer", type: "timer", required: true },
    ],
    };

    // Form validation 

    const validationSchema = Yup.object({
    subject: Yup.string().required("Please select a subject category"),
    timer: Yup.number("Please select a valid timer"),
    });

    // functions

    const handleSelect = (value, type) => {
    setError("");
    if (type === "subject") {
        setSubject(value);
    } else if (type === "timer") {
        setTimer(Number(value));
    }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate({ subject, timer })

            // pass subject and timer to session page
            console.log(subject, timer)
            navigate("/session", { state: { subject, timer } })
            // reset error
            setError("");

        } catch (err) {
            setError(err.message)
        }
        
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
            onClick={() => {setSection(sectionKey);
                setSubject(null);
                setTimer(0);
            }}
            />
        );
        })}
    </div>

        <Form
        section={section}
        handleSubmit={handleSubmit}
        errorMsg={error}

        // render dropdowns according to the dropdown config
        inputs={dropdownConfigs[section] && dropdownConfigs[section].map((config) => (
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
                placeholder={config.name}
                value={config.type === "timer" ? timer : subject}
            />
            </div>
        ))}       
        />
    </div>
    );
}


export default Home;