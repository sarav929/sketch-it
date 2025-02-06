const Command = ({icon, type, onClick}) => {
    return (
        <div onClick={onClick}>
            <img src={icon} alt={`${type}-button`} />
        </div>
    )
}

export default Command