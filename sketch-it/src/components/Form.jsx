const Form = ({ handleSubmit, inputs, section, errorMsg}) => {
    
    return (
        <form onSubmit={handleSubmit} className={`form-${section}`} noValidate>

        {inputs.map((input, index) => (
            <div key={index}>{input}</div> 
        ))}
        {errorMsg && (<div className="error-message">{errorMsg}</div>)}
        <button type="submit">Start</button>
        </form>
    );
  };
  
  export default Form;