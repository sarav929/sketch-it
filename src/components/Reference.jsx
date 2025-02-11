const Reference = ({imgUrl, alt, author, profileLink}) => {
    return (
        <div>
            <img className="" src={imgUrl} alt="" />
            <div className="credits">
                Photo by <a href={profileLink} target="_blank" rel="noopener noreferrer">{author}</a> on Unsplash
            </div>
        </div>
    )
}

export default Reference