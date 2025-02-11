import { Description, Field, Label, Select } from '@headlessui/react'
import clsx from 'clsx'
import { CaretDown } from '@phosphor-icons/react'; 

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

    <div className="w-[50%] max-w-md px-4 m-auto">
      <Field>
        <Label className="text-sm/6 font-medium ">Select {type}</Label>
        <div className="relative">
          <Select
            key={`${type}-${name}`}
            value={value || ""}
            name={name}
            onChange={(e) => handleSelect(e.target.value, type)}

            required={required}
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg bg-white/5 py-1.5 px-3 text-sm/6',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              'border border-black/10' // Add this class for border with 20% opacity
            )}
          >

          {type === "subject" && (<option value="" disabled>{placeholder}</option>)}

          {dropdownOptions.map((option) => (
            <option key={`${type}-${option[1]}`} value={option[1]}>
              {option[0]}
            </option>
          ))}
          </Select>
          <CaretDown
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-black/60"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>

    
    //<div className="dropdown">
      //<select
        //key={`${type}-${name}`}
        //value={value || ""}
        //name={name}
        //onChange={(e) => handleSelect(e.target.value, type)}
        //className={type}
        //required={required}
      //>
        //{type === "subject" && (<option value="" disabled>{placeholder}</option>)}

        //{dropdownOptions.map((option) => (
          //<option key={`${type}-${option[1]}`} value={option[1]}>
            //{option[0]}
          //</option>
        //))}
      //</select>
    //</div>
  );
};

export default Dropdown;
