import Dropdown from "../components/Dropdown";
import Form from "../components/Form";
import Tab from "../components/Tab";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Context";

import { PersonSimpleRun, Eye, Cat, Tree, Buildings, BowlFood } from "@phosphor-icons/react";

const Home = () => {

    const navigate = useNavigate()
    const { subject, timer, setSubject, setTimer } = useAppContext();

    // state management
    const [section, setSection] = useState("people");
    const [error, setError] = useState("");

    useEffect(() => {
        // Clear local storage and reset states when the home page is loaded
        localStorage.removeItem("subject");
        localStorage.removeItem("timer");
        setSubject(null);
        setTimer(0);
    }, [setSubject, setTimer]);

    // sections subject dropdowns 

    const dropdownConfigs = {
    people: [
        {
        name: "People",
        icon: <PersonSimpleRun />,
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
        icon: <Eye />,
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
        icon: <Cat />,
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
        icon: <Tree />,
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
        icon: <Buildings />,
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
        icon: <BowlFood />,
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
            navigate("/session")
            // reset error
            setError("");

        } catch (err) {
            setError(err.message)
        }
        
    };

    return (
    <div className="bg-stone-100 w-full md:w-4/5 mx-auto mt-5 text-center flex rounded-md drop-shadow-md">

    <div className="tabs">
        {Object.keys(dropdownConfigs).map((sectionKey) => {
        const config = dropdownConfigs[sectionKey][0];
        const configName = config.name
        const Icon = config.icon // Get the first config name for display
        return (
            <Tab
            key={`${sectionKey}-tab`}
            icon={Icon}
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