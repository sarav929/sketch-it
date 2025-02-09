const Tab = ({section, onClick}) => {
    return (
        <button
            className="section-tab"
            value={section}
            onClick={onClick}
        > 
        {section}
        </button>
    )
}

export default Tab