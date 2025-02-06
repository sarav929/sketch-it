const Reference = ({imgUrl, author, profileLink}) => {
    return (
        <div>
            <img src={imgUrl} alt="" />
            <div className="credits">
                Photo by <a href={profileLink} target="_blank" rel="noopener noreferrer">{author}</a> on Unsplash
            </div>
        </div>
    )
}

export default Reference