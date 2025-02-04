const Dropdown = ({ options, handleSelect, type, name, required }) => {
    return (
      <div className="dropdown">
        <select name={name} onChange={(e) => handleSelect(e.target.value, type)} className={type} required={required}>
            <option value="">{name}</option>
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