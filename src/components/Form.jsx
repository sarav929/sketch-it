const Form = ({ handleSubmit, inputs, section, errorMsg, title}) => {
    
    return (
        <div className="container">

            <h1 className="tracking-wide uppercase text-lg text-center">{title}</h1>

            <form onSubmit={handleSubmit} className={`form-${section} flex-col gap-4`} noValidate>

            {inputs.map((input, index) => (
                <div key={index}>{input}</div> 
            ))}
            {errorMsg && (<div className="error-message text-red-700 text-xs px-4 py-3 rounded relative">{errorMsg}</div>)}
            <button type="submit" className="bg-stone-500 hover:bg-stone-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out">Start</button>
            </form>
        </div>
    );
  };
  
  export default Form;