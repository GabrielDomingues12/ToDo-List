/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const taskContext = createContext()

export function TaskProvider({children}) {
    const [taskDecription, setTaskDescription] = useState([])
    return (
    <taskContext.Provider value={{taskDecription, setTaskDescription}}>
        {children}
    </taskContext.Provider>
    )
}
