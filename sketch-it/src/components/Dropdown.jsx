const Dropdown = ({ options, handleSelect, type, name, required, value }) => {

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
        name={name}
        onChange={(e) => handleSelect(e.target.value, type)}
        className={type}
        required={required}
      >
        {type === 'subject' && (<option value="" aria-placeholder={name} selected disabled>{name}</option>)}
        {dropdownOptions.map((option) => (
          <option key={option[0]} value={option[1]}>
            {option[0]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
