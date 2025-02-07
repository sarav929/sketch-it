const Timer = ({ timer }) => {

  return (
    <div>
      <div>{timer}</div>
      {timer !== 0 && (<button>Play/Pause</button>)}
    </div>
  );
};

export default Timer;
