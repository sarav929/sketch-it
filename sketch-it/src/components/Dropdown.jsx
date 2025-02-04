const Dropdown = ({ options, handleSelect, type, name, required }) => {

  // timer options - consistent across forms
  const timerOptions = [
    "No Timer",
    "1 minute",
    "5 minutes",
    "10 minutes",
    "15 minutes",
    "20 minutes",
    "25 minutes",
    "30 minutes",
    "60 minutes"
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
        <option value="">{name}</option>
        {dropdownOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
