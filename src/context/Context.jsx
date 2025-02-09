import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({children}) => {
    const [subject, setSubject] = useState(() => localStorage.getItem("subject") || null)
    const [timer, setTimer] = useState(() => Number(localStorage.getItem("timer")) || 0)

    useEffect(() => {
        const storedSubj = localStorage.getItem("subject")
        const storedTimer = localStorage.getItem("timer")

        if (storedSubj) setSubject(JSON.parse(storedSubj))
        if (storedTimer) setTimer(Number(storedTimer))
            
    }, [])

    useEffect(() => {
        localStorage.setItem("subject", JSON.stringify(subject))
        localStorage.setItem("timer", timer)
    }, [subject, timer])

    return <AppContext.Provider value={{ subject, timer, setSubject, setTimer }}>
        {children}
    </AppContext.Provider>
}