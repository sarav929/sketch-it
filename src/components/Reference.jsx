import { useState } from "react";

const Reference = ({imgUrl, alt, author, profileLink, isBlackAndWhite}) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            <img className={`object-cover w-full h-full ${isBlackAndWhite ? 'grayscale' : ''}`} onLoad={() => setImageLoaded(true)} src={imgUrl} alt={alt} />
            {imageLoaded && (<p className="credits fade-in text-[.6rem] opacity-50 m-4">
                photo by <a className="hover:opacity-20 transition-opacity duration-300 ease-in-out text-[.6rem]" href={profileLink} target="_blank" rel="noopener noreferrer">{author}</a> on Unsplash
            </p>)}
        </>
    )
}

export default Reference