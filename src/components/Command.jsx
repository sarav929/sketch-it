const Command = ({type, onClick}) => {
    return (
        <button onClick={onClick}>
            {type}
        </button>
    )
}

export default Command