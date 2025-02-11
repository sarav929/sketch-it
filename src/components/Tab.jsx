const Tab = ({section, onClick, icon, className}) => {
    return (
            <button
                className={className}
                value={section}
                onClick={onClick}
            > 
            <div className="section-icon w-[2rem]">{icon}</div>
            <div className="section-name text-left">{section}</div>
            </button>
    )
}

export default Tab