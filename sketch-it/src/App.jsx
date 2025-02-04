import Dropdown from "./components/Dropdown"
import "./styles/App.css"
import { useState, useEffect } from "react"

function App() {

  const [subject, setSubject] = useState(null)
  const [timer, setTimer] = useState(null)

  const handleSelect = (value, type) => {

    if (type === "subject") {
      setSubject(value);
    } else if (type === "timer") {
      setTimer(value);
    }
  }

  useEffect(() => {
    console.log("Subject:", subject, "Timer:", timer);
  }, [subject, timer]);

  return (
    <div>
      
      <Dropdown
        options={["a", "b", "c"]}
        handleSelect={(value) => handleSelect(value, "subject")}
        type="subject"
        name="People"
        required="required">
      </Dropdown>

      <Dropdown
        options={["1", "2", "3"]}
        handleSelect={(value) => handleSelect(value, "timer")}
        type="timer"
        name="Timer"
        required="required">
      </Dropdown>
    </div>
  )
}

export default App
