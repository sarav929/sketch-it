const Tab = ({section, onClick}) => {
    return (
        <div className="container flex flex-col bg-stone-100">
            <button
                className="section-tab w-[5rem] h-[5rem]"
                value={section}
                onClick={onClick}
            > 
            {section}
            </button>
        </div>
    )
}

export default Tab