import Dropdown from "../components/Dropdown";
import Form from "../components/Form";
import Tab from "../components/Tab";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import Footer from "../components/Footer";

import { PersonSimpleRun, Eye, Cat, Tree, Buildings, BowlFood, ScribbleLoop } from "@phosphor-icons/react";

const Home = () => {

    const iconSize = 28
    const iconWeight = 'thin';

    const navigate = useNavigate()
    const { subject, timer, setSubject, setTimer } = useAppContext();

    const [section, setSection] = useState("people");
    const [error, setError] = useState("");

    useEffect(() => {
        localStorage.clear();
        setSubject(null);
        setTimer(0);
    }, [setSubject, setTimer]);

    const dropdownConfigs = {
    people: [
        {
        name: "People",
        icon: <PersonSimpleRun size={iconSize} weight={iconWeight}/>,
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
    anatomy: [
        {
        name: "Anatomy",
        icon: <Eye size={iconSize} weight={iconWeight}/>,
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
        icon: <Cat size={iconSize} weight={iconWeight}/>,
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
        icon: <Tree size={iconSize} weight={iconWeight}/>,
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
        icon: <Buildings size={iconSize} weight={iconWeight}/>,
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
        icon: <BowlFood size={iconSize} weight={iconWeight}/>,
        type: "subject",
        required: true,
        options: [["Still Life", "still life"], 
        ["Food", "food photography"]],
        },
        { name: "Select Timer", type: "timer", required: true },
    ],

    random: [
        {
        name: "Random",
        icon: <ScribbleLoop size={iconSize} weight={iconWeight}/>,
        type: "subject",
        required: true,
        options: [],
        },
        { name: "Select Timer", type: "timer", required: true },
    ],
    };

    // Form validation 

    const validationSchema = Yup.object({
    subject: Yup.string().required("Please select a subject category"),
    timer: Yup.number("Please select a valid timer"),
    });

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
            navigate("/session")
            setError("");

        } catch (err) {
            setError(err.message)
        }
        
    };

    return (

    <div className="app-container flex flex-col m-auto justify-center items-center mt-3"> 

        <img src="/img/sketchit_logo.png" className="text-center w-[350px]" alt="logo" />

        <div className="w-[92%] min-w-[350px] xl:w-[50%] text-center flex drop-shadow-md">

            <div className="tabs flex flex-col">
                {Object.keys(dropdownConfigs).map((sectionKey) => {
                const config = dropdownConfigs[sectionKey][0];
                const configName = config.name
                const Icon = config.icon 
                return (
                    <Tab
                        key={`${sectionKey}-tab`}
                        icon={Icon}
                        section={configName}
                        onClick={() => { setSection(sectionKey); setSubject(sectionKey === "random" ? "Random" : null); setTimer(0)}}
                        className={`section-tab border border-stone-200 w-auto h-[4rem] px-2 py-2 md:px-4 grid grid-cols-[40px_auto] md:items-center md:gap-3 place-items-center bg-white rounded-tl-lg rounded-bl-lg tab-item transition-transform duration-200 ease-in-out cursor-pointer
                            ${
                            section === sectionKey
                                ? "opacity-100 border-r-0 scale-105 origin-right z-10"
                                : "opacity-90 scale-100 origin-right z-0"
                            }
                        `}
                    />

                );
                })}
            </div>
            <div className="bg-white flex flex-col items-center justify-center rounded-tr-lg rounded-br-lg w-full border border-l-0 border-stone-200">
                <Form
                section={section}
                handleSubmit={handleSubmit}
                errorMsg={error}
                title={dropdownConfigs[section][0].name}

                inputs={dropdownConfigs[section] 
                    .filter(config => !(section === "random" && config.type === "subject")) 
                    .map((config) => (
                        <div key={`${config.name}-${config.type}`}>
                            <div className="mt-5 mb-5">
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
                        </div>
                    ))}    
            />
            
            </div>
        </div>
        
        <Footer></Footer>
        
    </div>
    );
}


export default Home;