const Tab = ({section, onClick, icon}) => {
    return (
        <div className="container flex flex-col bg-stone-100">
            <button
                className="section-tab w-[5rem] h-[5rem] flex justify-center items-center gap-2 ml-4 mr-4"
                value={section}
                onClick={onClick}
            > 
            <div className="section-icon mb-2">{icon}</div>
            <div className="section-name mb-2">{section}</div>
            </button>
        </div>
    )
}

export default Tab