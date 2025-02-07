import Reference from "../components/Reference"
import Timer from "../components/Timer"
import Command from "../components/Command"
import { fetchRandomImage } from "../services/api"
import { useEffect, useState} from "react"
import { useNavigate, useLocation } from "react-router-dom"

const Session = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const { subject, timer } = location.state || {};

    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const query = subject

    const getImage = async () => {
        setLoading(true)
        try {
            const randomImage = await fetchRandomImage(query)
            if (randomImage) setImage(randomImage)
        } catch (err) {
            setError('Failed to fetch image')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getImage()
    }, [query])

    const backToHome = () => {
        alert('back to home page')
    } 

    const refresh = () => {
        alert('refresh reference and timer (if any)')
    } 

    return (
        <div className="session-wrapper">
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}

            <Command type="back" onClick={backToHome} />
            <Command type="refresh" onClick={refresh} />

            {timer !== 0 && (<Timer timer={timer}/>)} 

            {image && (
                <Reference
                imgUrl={image[0].urls.small}
                alt={image[0].alt_description}
                author={image[0].user.username}
                profileLink={image[0].links.html}
                />
            )}
                            
        </div>
    )
}

export default Session