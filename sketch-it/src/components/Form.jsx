const Form = ({ handleSubmit, inputs, section }) => {
    
    return (
        <form onSubmit={handleSubmit} className={`form-${section}`}>

        {inputs.map((input, index) => (
            <div key={index}>{input}</div> 
        ))}
        
        <button type="submit">Start</button>
        </form>
    );
  };
  
  export default Form;