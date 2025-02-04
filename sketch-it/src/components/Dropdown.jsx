const Dropdown = ({ options, handleSelect, type }) => {
    return (
      <div className="dropdown">
        <select onChange={(e) => handleSelect(e.target.value)} className={type}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Dropdown;