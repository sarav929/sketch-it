const Reference = ({imgUrl, alt, author, profileLink}) => {
    return (
        <>
            <img className="fade-in rounded-md" src={imgUrl} alt={alt} />
            <p className="credits fade-in text-[.6rem] opacity-50 m-4">
                photo by <a className="hover:opacity-20 transition-opacity duration-300 ease-in-out text-[.6rem]" href={profileLink} target="_blank" rel="noopener noreferrer">{author}</a> on Unsplash
            </p>
        </>
    )
}

export default Reference