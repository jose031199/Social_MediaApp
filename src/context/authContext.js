import { useEffect } from "react";
import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [currentUser,setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = ()=>{
        setcurrentUser({
            id:1,username:"Jose",
            profile:"https://images.pexels.com/photos/58592/pexels-photo-58592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}