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
  const [resetTimer, setResetTimer] = useState(0);
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  const [isSessionInitialized, setIsSessionInitialized] = useState(false);  // New state to track session start

  const restartTimer = () => {
    setResetTimer((prev) => prev + 1);  
    setTimer(timer);
  };

  const backToHome = () => {
    setSubject(null);
    setTimer(0);
    localStorage.clear();
    navigate("/");
  };

  const refresh = () => {
    restartTimer();
    getImage();
  };

  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = subject;

  const getImage = async () => {
    console.log("Fetching new image...");
    setLoading(true);
    try {
      const randomImage = await fetchRandomImage(query);
      if (randomImage) {
        setImage(randomImage);
        setError(null); 
      }
    } catch (err) {
      setError("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedSubj = localStorage.getItem("subject");
    const storedTimer = localStorage.getItem("timer");

    if (storedSubj) setSubject(storedSubj);
    if (storedTimer) setTimer(Number(storedTimer));

    setIsSessionInitialized(true); 
  }, [setSubject, setTimer]);

  useEffect(() => {
    if (isSessionInitialized && query) { 
      getImage();
    }
  }, [isSessionInitialized, query]); 

  return (
    <div className="session-container flex flex-col items-center m-auto w-full lg:w-[60%]">
      
      {error && (
        <div className="m-5 text-center flex flex-col justify-center items-center h-screen">
          <div className="session-error bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col ">
            {error}
          </div>
          <button className="bg-white hover:bg-stone-100 text-stone-800 font-semibold py-2 px-4 border border-stone-400 rounded shadow mt-4 w-[40%]" onClick={backToHome}>
            Home
          </button>
        </div>            
      )}

      {!error && (
        <>
          <div className="flex justify-between px-5 py-4 w-full">
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
                <Reference
                  imgUrl={image.urls.full}
                  alt={image.alt_description}
                  author={image.user.username}
                  profileLink={image.links.html}
                  errorMsg={error}
                  isBlackAndWhite={isBlackAndWhite}
                />

            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Session;
