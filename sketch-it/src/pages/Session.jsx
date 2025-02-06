import Reference from "../components/Reference"
import Timer from "../components/Timer"
import Command from "../components/Command"
import { useLocation } from "react-router-dom"

const Session = () => {

    const backToHome = () => {
        alert('back to home')
    } 

    const refresh = () => {
        alert('generate new img')
    } 

    const controlTimer = () => {
        alert('pause/play timer')
    }

    const formatTimer = (totalMinutes) => {
        const minutes = Math.floor(totalMinutes);
        const seconds = Math.round((totalMinutes - minutes) * 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const location = useLocation();
    const { subject, timer } = location.state || {};

    return (
        <div className="session-wrapper">
            <Command type="back" onClick={() => backToHome()} />
            <Command type="pause-play" onClick={() => controlTimer()} />
            <Command type="refresh" onClick={() => refresh()} />

            <Timer timer={formatTimer(timer)}/> 

            <Reference 
                imgUrl="image url"
                author="author"
                profileLink="link"
            />
                    
        </div>
    )
}

export default Session