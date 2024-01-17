import { createContext, useEffect, useState } from "react"

export const TimeOfDayContext = createContext()

export default function TimeOfDayProvider({children}) {

    // The goal is to provide some global state to the rest of the application concerning 
    // the time of day beyond just a simple clock datetime. Having a central place to handle
    // time seems like a good way to handle this, and to alert the Special Events system 

    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const intervalId = window.setInterval(()=>{
            setCurrentTime(new Date())
        }, 1000)

        return () => { window.clearInterval(intervalId) }
    }, [])


    return <TimeOfDayContext.Provider value={{currentTime}}>
        { children }
    </TimeOfDayContext.Provider>
}