import Reference from "../components/Reference";
import Timer from "../components/Timer";
import Command from "../components/Command";
import { fetchRandomImage } from "../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/Context";
import Spinner from "../components/Spinner";
import Toggle from "../components/Switch";
import { ArrowCircleLeft, ArrowsClockwise } from "@phosphor-icons/react";

const Session = () => {
  const navigate = useNavigate();
  const { subject, timer, setSubject, setTimer } = useAppContext();
  const [resetTimer, setResetTimer] = useState(0); // force re-render on reset
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false)

  const restartTimer = () => {
    setResetTimer((prev) => prev + 1);  
    setTimer(timer);
  };

  useEffect(() => {
    const storedSubj = localStorage.getItem("subject");
    const storedTimer = localStorage.getItem("timer");

    if (storedSubj) setSubject(storedSubj);
    if (storedTimer) setTimer(Number(storedTimer));
  }, [setSubject, setTimer]);

  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = subject;

  const getImage = async () => {
    setLoading(true);
    try {
      const randomImage = await fetchRandomImage(query);
      if (randomImage) {
        setImage(randomImage);
        setError(null); // Clear any previous errors if successful
      }
      console.log(randomImage);
    } catch (err) {
      // Handle specific errors and set user-friendly messages
      if (err.message.includes("expected JSON response from server")) {
        setError("Oops! We’ve hit a limit for now. Please try again later.");
      } else {
        setError("Oops! Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    getImage();
  }, [query]);

  const backToHome = () => {
    setSubject(null);
    setTimer(0);
    localStorage.clear();
    navigate("/");
  };

  const refresh = () => {
    restartTimer()
    getImage()
  };

  return (
    <div className="session-container min-h-screen flex flex-col items-center justify-between w-full sm:w-[50vw] m-auto">
      {/* Display error message if there's an error */}
      {error && (
        <div className="m-auto text-center">
          <div className="session-error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col ">
            {error}
          </div>

          <button class="bg-white hover:bg-stone-100 text-stone-800 font-semibold py-2 px-4 border border-stone-400 rounded shadow mt-4" onClick={backToHome}>
            Home
          </button>
        </div>            
        
      )}
  
      {/* Only display commands and reference if there is no error */}
      {!error && (
        <>
          {/* Command section */}
          <div className="flex justify-between w-full px-5 py-4">
            <div className="flex items-center gap-3">
            <Command type="back" Icon={ArrowCircleLeft} onClick={backToHome} />
            <Toggle 
              enabled={isBlackAndWhite}
              onChange={() => setIsBlackAndWhite(!isBlackAndWhite)}
            />
            </div>
            <div className="flex gap-3 items-center">
              {timer !== 0 && (
                <Timer key={resetTimer} timer={timer} onRefresh={refresh} />
              )}
              <Command type="refresh" Icon={ArrowsClockwise} onClick={refresh} />
            </div>
          </div>
  
          <div className="flex flex-col items-center flex-grow px-5 text-center">
            {loading && <Spinner />}
  
            {!loading && image && (
              <div className="w-full h-full flex-col justify-center items-center">
                <Reference
                  imgUrl={image[0].urls.full}
                  alt={image[0].alt_description}
                  author={image[0].user.username}
                  profileLink={image[0].links.html}
                  errorMsg={error}
                  isBlackAndWhite={isBlackAndWhite}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
  
  
}  

export default Session;
