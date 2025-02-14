const Command = ({type, Icon, onClick}) => {
    return (
        <button onClick={onClick} className={`${type}-btn hover:opacity-70 transition-opacity duration-300 ease-in-out`}>
            <Icon size={30} weight={type === "refresh" ? "bold" : "fill"}/>
        </button>
    )
}

export default Command