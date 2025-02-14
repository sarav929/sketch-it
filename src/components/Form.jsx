const Form = ({ handleSubmit, inputs, section, errorMsg, title}) => {
    
    return (
        <div className="container fade-in">

            <h1 className="tracking-wider uppercase text-2xl text-center">{title}</h1>

            <form onSubmit={handleSubmit} className={`form-${section} flex-col gap-5`} noValidate>
            
            {inputs.map((input, index) => (
                <div key={index}>{input}</div> 
            ))}
            <div className={`error-message text-red-700 text-xs py-3 ${errorMsg ? 'visible' : 'invisible'}`}>{errorMsg}</div>
            <button type="submit" className="bg-stone-500 hover:bg-stone-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out">Start</button>
            </form>
        </div>
    );
  };
  
  export default Form;