import { useEffect } from "react";
import { useState } from "react";
import { createContext} from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children})=>{
    const [darkMode,setdarkMode] = useState(
       JSON.parse(localStorage.getItem("darkMode")) || false
    );

    const toogle = ()=>{
        setdarkMode(!darkMode);
    }

    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode);
    },[darkMode]);

    return(
        <DarkModeContext.Provider value={{darkMode,toogle}}>
            {children}
        </DarkModeContext.Provider>
    )
}