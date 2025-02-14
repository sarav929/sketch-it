import { useState } from "react";

const Reference = ({imgUrl, alt, author, profileLink, isBlackAndWhite}) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="relative w-full aspect-[9/16] lg:aspect-[4/5] lg:w-[85%] 2xl:aspect-square overflow-hidden rounded-md">
            <img
                className={`w-full h-full object-cover fade-in ${isBlackAndWhite ? "grayscale" : ""}`}
                onLoad={() => setImageLoaded(true)}
                src={imgUrl}
                alt={alt}
            />
            {imageLoaded && (
                <a
                href={profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 bg-stone-600 bg-opacity-50 text-white text-[0.5rem] rounded-full px-2 py-1 transition-opacity duration-300 hover:opacity-70"
                >
                © {author}
                </a>
            )}
            </div>


    )
}

export default Reference