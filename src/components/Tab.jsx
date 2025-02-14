const Tab = ({section, onClick, icon, className}) => {
    return (
            <button
                className={className}
                value={section}
                onClick={onClick}
            > 
            <div className="section-icon w-[2rem] place-items-center">{icon}</div>
            <div className="section-name hidden md:block">{section}</div>
            </button>
    )
}

export default Tab