const Dropdown = ({ options, handleSelect, type, name, required, value, placeholder }) => {

  // timer options - consistent across forms
  const timerOptions = [
    ["No Timer", 0], 
    ["1 minute", 1],
    ["5 minutes", 5],
    ["10 minutes", 10],
    ["15 minutes", 15],
    ["20 minutes", 20],
    ["25 minutes", 25],
    ["30 minutes", 30],
    ["60 minutes", 60]
  ];

  // set options dynamically for timer or other dropdowns
  const dropdownOptions = type === "timer" ? timerOptions : options;

  return (
    <div className="dropdown">
      <select
        key={`${type}-${name}`}
        value={value || ""}
        name={name}
        onChange={(e) => handleSelect(e.target.value, type)}
        className={type}
        required={required}
      >
        {type === "subject" && (<option value="" disabled>{placeholder}</option>)}

        {dropdownOptions.map((option) => (
          <option key={`${type}-${option[1]}`} value={option[1]}>
            {option[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
