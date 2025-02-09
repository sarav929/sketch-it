const Form = ({ handleSubmit, inputs, section, errorMsg}) => {
    
    return (
        <div className="container m-auto">

            <form onSubmit={handleSubmit} className={`form-${section} flex-col gap-4`} noValidate>

            {inputs.map((input, index) => (
                <div key={index}>{input}</div> 
            ))}
            {errorMsg && (<div className="error-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">{errorMsg}</div>)}
            <button type="submit">Start</button>
            </form>
        </div>
    );
  };
  
  export default Form;