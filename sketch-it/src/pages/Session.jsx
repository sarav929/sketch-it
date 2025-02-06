import Reference from "../components/Reference"
import Timer from "../components/Timer"
import Command from "../components/Command"
import { fetchRandomImage } from "../services/api"
import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../App"

const Session = () => {

    const navigate = useNavigate()
    const { subject, timer, resetState } = useAppContext();

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
        resetState()
        navigate("/")
    } 

    const refresh = () => {
       getImage()
    } 

    const controlTimer = () => {
        alert('pause/play timer')
    }

    const formatTimer = (totalMinutes) => {
        const minutes = Math.floor(totalMinutes);
        const seconds = Math.round((totalMinutes - minutes) * 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className="session-wrapper">
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}

            <Command type="back" onClick={backToHome} />
            {timer !== 0 && (<Command type="pause-play" onClick={controlTimer} />)}
            <Command type="refresh" onClick={refresh} />

            {timer !== 0 && (<Timer timer={formatTimer(timer)}/>)} 

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